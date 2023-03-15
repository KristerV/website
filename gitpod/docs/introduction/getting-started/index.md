---
section: getting-started
title: Getting started
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
data={{
    description:
      "Learn how to start your first workspace, set up a gitpod.yml configuration file and enable Prebuilds. Get started for free.",
    title: "Getting started with Gitpod",
    keywords: "get started, fast, free",
  }}
/>

# Getting started

In this guide we'll walk you through the basics to get up and running with Gitpod today.

- [Step 1: Your first workspace](#step-1-your-first-workspace)
- [Step 2: Customize Gitpod](#step-2-customize-gitpod)
- [Step 3: Gitpodify a project](#step-3-gitpodify-a-project)

## Step 1: Your first workspace

`youtube: w65POyu3ZUQ`

The best way to get see the power of Gitpod, is to try it out by starting your first [Workspace](/docs/configure/workspaces).

<!-- TODO: Is this the process we want to suggest? -->

To start your first workspace:

1. Navigate to a GitHub, GitLab or Bitbucket repository.
2. Open the repo in Gitpod by prefixing the URL with: `gitpod.io/#`

<!-- TODO: Is this the "best" Gitpod example we have? -->

For example, click this link to open the NodeJS project in a Gitpod workspace:

[`https://gitpod.io/#https://github.com/nodejs/node`](https://gitpod.io/#https://github.com/nodejs/node)

## Step 2: Customize Gitpod

<!-- `youtube: VYHsd1zI_tE` -->

Gitpod can be customized depending on the needs of the project, and your own personal taste. With Gitpod, you can set an IDE preference between VS Code and JetBrains, either working in the browser, or on your desktop application. You can add custom scripts via Dotfiles.

### Set your IDE preference

<figure>
  <video controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" src="/images/editors/select-jetbrains-ide.webm" type="video/webm"></video>
  <figcaption>Updating Gitpod IDE preferences to {title}</figcaption>
</figure>

Work in the browser with [VS Code Browser](/docs/references/ides-and-editors/vscode-browser), or on desktop with [VS Code Desktop](/docs/references/ides-and-editors/vscode) or [JetBrains Gateway](/docs/integrations/jetbrains-gateway). To set your preferences, navigate to [gitpod.io/preferences](https://gitpod.io/preferences) to set your [IDE preference](/docs/references/ides-and-editors).

### Install the browser extension

![Browser Extension](../../../static/images/docs/browser-extension-lense.png)

A convinient way to work with Gitpod is using the custom [browser extension](/docs/configure/user-settings/browser-extension). Using the extension you can open workspaces directly from inside GitHub.

### Set your Dotfiles

Dotfiles are a way to customize your developer environment according to your personal needs. To configure Gitpod to use your own dotfiles for all your workspaces, enter the URL of a dotfiles repository in your user preferences. See [Dotfiles](/docs/configure/user-settings/dotfiles) for more.

See [User Settings](/docs/configure/user-settings) for more ways to customize Gitpod.

## Step 3: Gitpodify a project

Opening a repository in Gitpod starts a workspace and clones the source code. To start developing though, you would then have to install any required dependencies, run any build scripts and start servers. Luckily, with Gitpod, we can automate all of those steps.

1. Add a `.gitpod.yml` at the root of your repository.
   - **Tip:** Run `gp init` to generate a scaffold `.gitpod.yml` file.
2. Use the `gp rebuild` command to test your configuration.
3. Commit + push the configuration!

Now, every new workspace opened will run the steps defined in your `gitpod.yml`.

<!-- TODO: Gitpodify with `.gitpod.yml` -->

### A gitpod.yml example

```yaml
image: gitpod/workspace-full

# Commands that will run on workspace start
tasks:
  - name: Setup, Install & Build
    before: yarn global add express
    init: yarn install
    command: yarn build

# Ports to expose on workspace startup
ports:
  - port: 3000
    onOpen: open-preview
    name: Website
    description: Website Preview
```

**Caption:** An example project configured to install, build and run a `yarn` project with a webserver, exposed on port 3000. On start, the webserver preview is opened automatically.

See the [.gitpod.yml reference page](/docs/references/gitpod-yml) for more.
