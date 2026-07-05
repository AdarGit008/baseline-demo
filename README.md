# baseline-demo

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

## Why the CI reconciles the status stamp

`CTX-01` requires the status doc's `last-verified:` stamp to name the current
commit — which a committed file structurally can't do (a stamp can't contain
the hash of the commit that contains it). So CI re-stamps `docs/start-here.md`
to `$GITHUB_SHA` before scoring, exactly the end-session-ritual the standard
recommends. A static local clone shows `CTX-01` as a gentle "re-stamp me"
reminder until you reconcile; the pipeline is always 100%.
