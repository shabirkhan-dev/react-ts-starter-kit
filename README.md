# react-ts-starter-kit

A starter kit for React with TypeScript, Tailwind CSS, and Vite.


## Features

-   TypeScript
-   Tailwind CSS
-   Vite
-   Biome for linting and formatting
-   Lefthook for pre-commit hooks


## Biome Linting

Biome is configured to lint the entire project. It will lint all files in the `src` directory and ignore any files that are not in the `src` directory.
[![Linted with Biome](https://img.shields.io/badge/Linted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)

## Lefthook Pre-commit Hooks

Lefthook is configured to run the `check` command from Biome before every commit. It will also prevent you from committing files that are not formatted with Biome.
[![Pre-commit with Lefthook](https://img.shields.io/badge/Pre--commit_with-Lefthook-60a5fa?style=flat&logo=lefthook)](https://github.com/evilmartians/lefthook)
