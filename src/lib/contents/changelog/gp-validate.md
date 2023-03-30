---
title: Validate your `.gitpod.yml` without committing ! 🤘
alt: Lorem Ipsum
date: 2023-03-31
excerpt: Lorem Ipsum
image: gp-validate.jpg
ogImage: gp-validate.jpg
customSlug: lorem-ipsum
---

<script context="module">
  export const prerender = true;
</script>

**TL;DR;** - You can now validate a Gitpod configuration—both the `.gipod.yml` and the workspace image—by running `gp validate` without needing to restart, leave your workspace, or commit your configuration.

- With `gp validate` can now validate a configuration within the workspace without committing. This works in a very similar way to a regular Gitpod workspace start, allowing you to catch configuration mistakes earlier.
- Using `gp validate --prebuild` you can create run a workspace just as a Prebuild would, which makes it easier to debug a Prebuild configuration by re-creating the exact state inside a running workspace.

## Introducing `gp validate`

The power of a [CDE](https://www.gitpod.io/cde) comes with a well-defined configuration. Because, when your workspace is configured, you can make use of ephemeral workspaces, multi-track development and other benefits of develping in the cloud.

In Gitpod, your configuration is defined in your `gitpod.yml`.

To update a configuration, you would commit your `.gitpod.yml` and start a new workspace. This process would delay the time to finding out a configuration was incorrect, and in the mean time pollute your source control with commits like: "_updates_", "_next_", "_please work!_", "_please work this time_" — yeah, we know how it feels!

Which is why we are "shifting left" and bringing errors, validation and suggestions closer to when you are actually developing on and iterating on your configuration. The new Gitpod command `gp validate` allows you to do exactly this! Validate and test your configuration changes without committing, or leaving your workspace!

For more, see [configuring workspaces](/docs/configure/workspaces).

## How does `gp validate` work?

`gp validate` is a included in every workspace. It works by creating a "workspace within your workspace" using Docker. The command mounts your `/workspace` directory, and pulls through all necessary information such as environment variables. By building a workspace within your existing workspace, we can heavily cache changes as Docker layers, making the update cycle to your configuration ⚡️ super, super fast ⚡️.

## What's next?

### Improved linting & best practices

Through the `gp validate` command, Gitpod has the opportunity to share more tips and tricks with our users to improve their configurations.For instance, we can better showcase new features of Gitpod and help users avoid common gotchas such as not adding an explicit base image to a workspace configuration.

### Simpler workspace restarts

The `gp validate` command should be all you need to get confidence your configurations work. For those who do a lot of gitpod configuring, we are also looking for ways to make it easier to restart a workspace when you're finished validating changes with `gp validate`.

## FAQs

**Does `gp validate` apply it's changes to the currently opened workspace?**

The `gp validate` command creates a workspace within your current workspace so you can quickly try our your configuration changes without committing or needing to do a full workspace restart. You do still need to commit and start a new workspace to apply the changes to your current (and future) workspaces. However, committing your configuration should now be more of a formality, as your configuration now be validated.

**Does `gp validate` apply to all files and configurations in the workspace?**

The `gp validate` command is compatible with `.gitpod.yml` and your workspace base image, whether a Dockerfile in the current workspace, or referencing an image hosted elsewhere. The workspace that `gp validate` creates shares the file system with the parent workspace, meaning all files and folders are copied into that workspace. This is especially useful when you install a tool, and want to execute or experiment with that tool immediately.
