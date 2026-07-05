# baseline-demo

[![CI](https://github.com/AdarGit008/baseline-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/AdarGit008/baseline-demo/actions/workflows/ci.yml)

A tiny, self-contained reference repository that scores a **perfect
[project-baseline](tools/baseline/README.md)**: `0 blockers, 100% readiness`.
It exists so you can see what "green" looks like across every category the
standard checks — build, tests, security & supply-chain, reproducibility,
code quality, change governance, community, and context/doc-drift.

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

## The status stamp

`docs/start-here.md` carries a `last-verified: <sha> <date>` stamp naming the
last commit whose state was reconciled — CTX-01 accepts any commit within a few
of `HEAD` as fresh, so a stamp that names the previous commit (as here) passes.
Reconcile it in your end-session ritual; a stamp that points off-branch or falls
far behind `HEAD` fails.
