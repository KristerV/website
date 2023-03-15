<script lang="ts">
  import type { Form } from "../../types/form";
  import Section from "../section.svelte";
  import { trackEvent, trackIdentity } from "../segment.svelte";
  import Button from "../ui-library/button";
  import Input from "../ui-library/input";

  let isSubmittedOnce = false;
  let resultMessage = "";
  let isSubmissionInProgress = false;

  export let title: string = "Read our newsletter";
  export let description: string =
    "Access Gitpod's latest thinking, news, and insights.";

  const formData: Form = {
    email: {
      el: null,
      valid: false,
      value: "",
    },
  };

  let isFormDirty = false;
  let isFormHidden = false;
  $: isFormValid = Object.values(formData).every((field) => field.valid);

  async function submitEmail() {
    isFormDirty = true;
    if (!isFormValid) {
      return;
    }

    isSubmissionInProgress = true;
    isSubmittedOnce = true;

    await trackIdentity({
      email_untrusted: formData.email.value,
    });

    await trackEvent("email_submitted", {
      email: formData.email.value,
    });

    isSubmissionInProgress = true;
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ type: "newsletter", email: formData.email.value }),
    });

    if (response.status === 201) {
      isSubmissionInProgress = false;
      isFormHidden = true;
      resultMessage = "You’re signed up and will hear from us shortly.";
    } else if (response.status === 409) {
      isFormHidden = true;
      isSubmissionInProgress = false;
      resultMessage =
        "You’ve already subscribed. Just lean back, you will hear from us soon.";
    } else {
      isFormHidden = true;
      isSubmissionInProgress = false;
      resultMessage = "Oh no, something went wrong :(.";
    }
    setTimeout(() => {
      formData.email.value = "";
    }, 5000);
  }
</script>

<Section
  class="flex justify-between max-w-6xl mx-auto items-center flex-wrap gap-small lg:gap-xx-large"
>
  <div>
    <h2 class="h3 !mb-macro lg:!mb-micro">{title}</h2>
    <p>
      {#if resultMessage}{resultMessage}{:else}{description}{/if}
    </p>
  </div>
  <div>
    {#if !isFormHidden}
      <form class="space-y-4" on:submit|preventDefault={submitEmail}>
        <div class="flex justify-center space-x-6" />
        <div class="flex gap-xx-small">
          <div class="w-4/5">
            <Input
              hasError={isFormDirty && !formData.email.valid}
              bind:value={formData.email.value}
              bind:element={formData.email.el}
              on:change={() => {
                formData.email.valid =
                  formData.email.value && formData.email.el.validity.valid;
              }}
              cols="30"
              name="Email"
              type="email"
              placeholder="Work email"
              id="email"
              legendClass="!mb-0"
              class="bg-bg w-full"
            />
          </div>
          <div>
            <Button
              class="w-1/5"
              isLoading={isSubmissionInProgress}
              variant="primary"
              size="large"
              disabled={isSubmittedOnce}
              type="submit">Subscribe</Button
            >
          </div>
        </div>
        <div>
          <div>
            <p class="text-sm max-w-lg">
              By submitting this form, I confirm that I acknowledge the
              collection and processing of personal data by Gitpod, as further
              described in the <a class="!underline" href="/privacy"
                >Privacy Policy.</a
              >
            </p>
          </div>
          <span />
        </div>
      </form>
    {/if}
  </div>
</Section>
