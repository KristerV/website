<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { supplyChainSecurityFeatures } from "$lib/contents/home/features";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import Quotes from "$lib/components/quotes.svelte";
  import { quotes } from "$lib/contents/customers";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Section from "$lib/components/section.svelte";
  import Quote from "$lib/components/solutions/quote.svelte";
  import AnimatedLogos from "$lib/components/animated-logos.svelte";
  import Explore from "$lib/components/explore.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod gives a perfect development environment to everyone on the team.",
    title: "Solution: Software supply chain security - Gitpod",
    keywords:
      "cloud development environment, cde, remote development, developer experience, onboarding, supply chain security, software supply chain security, security, secure cloud development environment, secure cde, secure remote development, secure developer experience, secure onboarding, secure supply chain security, secure software supply chain security, secure security, secure, secure cloud development environment, secure cde, secure remote development, secure developer experience, secure onboarding, secure supply chain security, secure software supply chain security, secure security, secure",
  }}
/>

<div class="flex flex-col lg:flex-row sm:mt-x-large mt-xx-large">
  <div class="items-center justify-between max-w-7xl mx-auto mt-small">
    <h2 class="h1 !mb-micro md:!mb-x-small max-w-xl">
      Secure your software supply chain
    </h2>
    <p class="text-large max-w-xl">
      With <a href="/cde">CDEs</a>, source code is stored in a secure and
      controlled environment - the cloud.
    </p>
  </div>
  <Quote
    quote="We're able to reduce exfiltration risks as well as outside actors from accessing our development environments."
    author={{
      name: "Roger Goldfinger",
      jobTitle: "Senior Staff Engineer at Quizlet",
    }}
    svgClazz="h-14 w-24"
  />
</div>
<div class="mt-xxx-large mb-x-large sm:mb-0">
  <AnimatedLogos />
</div>

<SectionFeatures
  title="Maximize control, minimize overhead"
  features={supplyChainSecurityFeatures}
/>

<Section>
  <Quotes {quotes} class="max-w-7xl mx-auto" />
</Section>
<Explore />
