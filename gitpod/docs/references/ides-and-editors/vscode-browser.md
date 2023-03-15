---
section: ides-and-editors
title: VS Code Browser
---

<script context="module">
  export const prerender = true;
</script>

# VS Code Browser

VS Code Browser is the default editor that workspaces open in when using Gitpod. You can even [configure your VS Code extension](/docs/references/ides-and-editors/vscode-extensions) preferences by updating your .gitpod.yml.

![VS Code](../../../static/images/gitpod-editor.jpg)

## Changing the VS Code Browser version

VS Code Browser in Gitpod is based on a fork of [VS Code](https://github.com/microsoft/vscode) called [OpenVSCode Server
](https://github.com/gitpod-io/openvscode-server). VS Code in the browser in Gitpod is updated frequently, to use the latest nightly build of Gitpod you can switch to the "insiders" version of VS Code from [your Gitpod preferences page](https://gitpod.io/preferences).

## Settings Sync

By default, all your extensions and other preferences are synced between all of your workspaces on Gitpod. You can read more about over at [Settings Sync](settings-sync).

## Upload Files

You can upload files to your workspace by dragging and dropping them into the editor. You can also upload files by clicking the "Upload" button in the file explorer.

<figure>
  <video onloadstart="this.playbackRate = 1.5;" controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" src="/images/editors/file-upload-ui-button.webm" type="video/webm"></video>
  <figcaption>Upload Files from local to VS Code Browser</figcaption>
</figure>
