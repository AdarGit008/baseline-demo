# baseline-demo

[![CI](https://github.com/AdarGit008/baseline-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/AdarGit008/baseline-demo/actions/workflows/ci.yml)

A tiny, self-contained reference repository that scores a **perfect
[project-baseline](tools/baseline/README.md)**: `0 blockers, 100% readiness`.
It exists so you can see what "green" looks like across every category the
standard checks — build, tests, security & [supply-chain](tools/baseline/GLOSSARY.md#supply-chain), reproducibility,
code quality, change governance, community, and context/doc-drift.

> New to a term in these docs? The [glossary](tools/baseline/GLOSSARY.md) explains
> the DevOps and supply-chain jargon in plain language.

## Install

```bash
git clone https://github.com/AdarGit008/baseline-demo
cd baseline-demo
npm ci
```

## Usage

```bash
npm test                          # the library's own tests
node tools/baseline/check.mjs     # score this repo against project-baseline
```

The bundled standard lives in [`tools/baseline/`](tools/baseline/); CI runs it
as a required gate on every push (see [`.github/workflows/ci.yml`](.github/workflows/ci.yml)).

## Status is derived

State is computed at read time — tree + history + forge, never stored:

```bash
node tools/baseline/baseline.mjs orient --repo .
```

The V1 [`last-verified:` stamp](tools/baseline/GLOSSARY.md#last-verified-stamp)
this repo once kept in `docs/start-here.md` retired with the V2 contract —
CTX-12 now blocks the stored-status signature in any tracked doc, and
[`tools/baseline/MIGRATION.md`](tools/baseline/MIGRATION.md) documents the
exit this repo took.
