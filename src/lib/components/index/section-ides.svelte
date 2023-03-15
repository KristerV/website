<script lang="ts">
  import { ides } from "$lib/contents/home";
  import Section from "../section.svelte";
  import IdeSwitcher from "./ide-switcher.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
  let selectedIde = "vscode";
  let ideType = "browser";
  let toggleChecked = false;
  let activeIdeName: string = "";

  $: if (toggleChecked) {
    ideType = "browser";
    selectedIde = "vscode";
    activeIdeName = "vscode";
  } else {
    ideType = "desktop";
    activeIdeName = "";
  }

  const getIdeByName = (name: string) => ides.find((ide) => ide.name === name);

  const handleIdeChange = (e: { detail: { text: string } }) => {
    const text = e.detail.text;
    if (getIdeByName(text).screenshots.desktop !== "") {
      selectedIde = e.detail.text;
    }
  };

  $: idetoRender = getIdeByName(selectedIde);
</script>

<Section>
  <div class="row">
    <h3 class="text-left sm:text-center text-3xl sm:text-5xl	font-bold">
      What's a CDE?
    </h3>
    <p
      class="text-left sm:text-center text-lg sm:text-2xl mt-xx-small mb-x-small mx-auto max-w-4xl"
    >
      CDEs are high-powered, automated development environments in the cloud.
      They are perfectly configured for each task enabling instant onboarding
      and collaboration.
    </p>
    <div class="text-left sm:text-center m-auto mb-x-small">
      <LinkButton variant="gray" size="medium" href="/cde"
        >Learn more about CDEs</LinkButton
      >
    </div>
    <div class="max-w-5xl mx-auto">
      <div class="relative">
        <!-- TODO: Fix Toggle -->
        <IdeSwitcher
          on:message={handleIdeChange}
          {ides}
          activeByDefaultName="vscode"
          {ideType}
          {activeIdeName}
          on:change={(e) => {
            ideType = "desktop";
            // @ts-ignore
            toggleChecked = e.currentTarget.checked;
          }}
          checked={toggleChecked}
          id="screenshot"
        />
        <div class="pt-xx-small md:pr-micro lg:px-xx-small">
          <img
            src="/images/index/{idetoRender.screenshots[ideType]}"
            alt={idetoRender.label}
            class="shadow-highlight rounded-xl"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  </div>
</Section>
