<script lang="ts">
  import FeatureTitles from "../feature-titles.svelte";
  import Section from "../section.svelte";
  import { featureTitles } from "$lib/contents/home/index";
</script>

<Section>
  <FeatureTitles
    {featureTitles}
    featureTitlePadding="px-macro py-xx-small sm:px-small sm:py-x-small"
  />
  <div class="text-center mt-xx-small text-base">
    success metrics reported by customers
  </div>
</Section>
