---
title: Workspace Images OS Update and Breaking Changes
excerpt: Gitpod workspace images are being updated to use Ubuntu 22.04.2 LTS (Jammy Jellyfish). There are breaking changes to consider.
date: 2023-03-28
image: jammy.webp
ogImage: jammy.webp
alt: Gitpod workspaces are being updated to use Ubuntu 22.04.2 LTS (Jammy Jellyfish).
customSlug: workpace-images-os-update-and-breaking-changes
---

On **April 3rd**, Gitpod will upgrade their workspace images to utilize the latest Long Term Support (LTS) version of Ubuntu, which is `Ubuntu 22.04.2` (codenamed "Jammy Jellyfish"). As this is a significant release, there are some breaking changes that you should take into account. In case you encounter any problems with your workspaces as a result of this update, kindly submit an issue in the [workspace-images](https://github.com/gitpod-io/workspace-images) repository.

## What should you do

Consider [which docker image tag](https://www.gitpod.io/docs/configure/workspaces/workspace-image#docker-image-tags) is right for your team and repo(s).

Options to consider:

1. Continue using the `latest` tag. New workspace starts after the release will use Jammy.
2. Test Jammy before it is released using tag `2023-03-24-02-48-18`.
3. Continue using Focal even after the release using tag `2023-01-16-03-31-28`. Switch to Jammy at your leisure, after you've had more time to do testing.
4. Use a [custom base image](https://www.gitpod.io/docs/configure/workspaces/workspace-image#custom-base-image), and continue using Focal for a longer period of time.

## Breaking changes

1. All maintained images have been updated from Focal to Jammy [[1](https://github.com/gitpod-io/workspace-images/#-images-well-maintain)][[2](https://github.com/gitpod-io/workspace-images/#-specific-images)] at [hub.docker.com/u/gitpod](https://hub.docker.com/u/gitpod).
2. [`gitpod/workspace-ruby-2` is deprecated and will not be updated; Ruby 2.7 is EOL March 31, 2023](https://endoflife.date/ruby).
3. Upgraded `gitpod/workspace-mongodb` to mongo v6. v5 doesn't support OpenSSL 3, [OpenSSL 3 comes out of the box with Jammy](https://packages.ubuntu.com/source/jammy/openssl).
4. Updated `gitpod/workspace-node-lts` from Node 16 to Node 18, and also in `gitpod/workspace-full`.
5. Updated `gitpod/workspace-node` from Node 18 to Node 19.
6. Installed Python 3.9 in `gitpod/workspace-yugabytedb*`, changing its `base` ref from `full`. Refer to its [dockerfile](https://github.com/gitpod-io/workspace-images/blob/kylos101/jam/chunks/tool-yugabytedb/Dockerfile#L27) for background



## Fixes

1. Bumped Rust to 1.67.1
2. Bumped Ruby patch versions for 3.0, 3.1, 3.2
3. Overrode OpenSSL for Ruby 3.0 to support Jammy
4. Bump Ruby in `gitpod/workspace-full` from 3.1 to 3.2
5. Bump Python in `gitpod/workspace-full` from Python 3.8 to 3.11
6. Bump `nvm` version from 0.39.0 to 0.39.3

## New features

1. Use asdf version manager in `gitpod/workspace-elixir` to more easily manage erlang and elixir versions

## FAQs

**Is Gitpod still maintaining support for Focal in its images?**

No. Please consider the [above options](#what-should-you-do) to handle the update.

**What else should I consider as part of the upgrade?**

The GNU C Library (glibc) varies between [Focal](https://packages.ubuntu.com/source/focal/glibc) and [Jammy](https://packages.ubuntu.com/source/jammy/glibc).

OpenSSL varies between [Focal](https://launchpad.net/ubuntu/focal/+source/openssl) and [Jammy](https://launchpad.net/ubuntu/jammy/+source/openssl).

Both led to some of the breaking changes (above). Therefore, this may impact you and your team, depending on your related workloads.
