<div align = "center">

<h1><a href="https://github.com/2kabhishek/gh-pr-labeler">gh-pr-labeler</a></h1>

<a href="https://github.com/2KAbhishek/gh-pr-labeler/blob/main/LICENSE">
<img alt="License" src="https://img.shields.io/github/license/2kabhishek/gh-pr-labeler?style=flat&color=eee&label="> </a>

<a href="https://github.com/2KAbhishek/gh-pr-labeler/graphs/contributors">
<img alt="People" src="https://img.shields.io/github/contributors/2kabhishek/gh-pr-labeler?style=flat&color=ffaaf2&label=People"> </a>

<a href="https://github.com/2KAbhishek/gh-pr-labeler/stargazers">
<img alt="Stars" src="https://img.shields.io/github/stars/2kabhishek/gh-pr-labeler?style=flat&color=98c379&label=Stars"></a>

<a href="https://github.com/2KAbhishek/gh-pr-labeler/network/members">
<img alt="Forks" src="https://img.shields.io/github/forks/2kabhishek/gh-pr-labeler?style=flat&color=66a8e0&label=Forks"> </a>

<a href="https://github.com/2KAbhishek/gh-pr-labeler/watchers">
<img alt="Watches" src="https://img.shields.io/github/watchers/2kabhishek/gh-pr-labeler?style=flat&color=f5d08b&label=Watches"> </a>

<a href="https://github.com/2KAbhishek/gh-pr-labeler/pulse">
<img alt="Last Updated" src="https://img.shields.io/github/last-commit/2kabhishek/gh-pr-labeler?style=flat&color=e06c75&label="> </a>

<h3>Label Your PRs 🐙😼</h3>

</div>

A GitHub Action that makes repo maintainer's lives easier.

## ✨ Features

- Add labels for current and required number of reviews
- Add WIP label for draft PRs
- Track a target branch (e.g. staging) to confirm if all current PR commits exist on target

## Setup

### 💻 Usage

Add the following to your `.github/workflows/pr-labeler.yml` file

```yml
name: PR Labeler
on: [pull_request, pull_request_review]

jobs:
  label:
    runs-on: ubuntu-latest

    steps:
      - uses: 2KAbhishek/gh-pr-labeler@main
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          required: 3
          wip: true
          target-branch: main
          label: Changes in main
          color: 1688f0

```

##  Behind The Code

### 🌈 Inspiration

Wanted to build a GitHub action from scratch

### 💡 Challenges/Learnings

- Slower feedback loop during dev
- Debugging a GitHub Action is hard

### 🧰 Tooling

- [Dotfiles](https://github.com/2kabhishek/Dotfiles) — Dev Environment
- [nvim2k](https://github.com/2kabhishek/nvim2k) — Personalized Editor
- [awesome2k](https://github.com/2kabhishek/awesome2k) — Tiling Window Manager

### 🔍 More Info

- [GA-Hello](https://github.com/2kabhishek/GA-Hello) — a GitHub action for beginners

<hr>

<div align="center">

<strong>⭐ hit the star button if you found this useful ⭐</strong><br>

<a href="https://github.com/2KAbhishek/gh-pr-labeler">Source</a>
| <a href="https://2kabhishek.github.io/blog" target="_blank">Blog </a>
| <a href="https://twitter.com/2kabhishek" target="_blank">Twitter </a>
| <a href="https://linkedin.com/in/2kabhishek" target="_blank">LinkedIn </a>
| <a href="https://2kabhishek.github.io/links" target="_blank">More Links </a>
| <a href="https://2kabhishek.github.io/projects" target="_blank">Other Projects </a>

</div>

