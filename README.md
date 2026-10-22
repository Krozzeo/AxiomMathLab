# Axiom Math Lab

A minimal local calculation notebook and independently versioned second consumer of [Axiom Platform](https://github.com/Krozzeo/AxiomPlatform). Version 0.1.1 is the reference product for the Platform MVP, not a full mathematical suite.

Create a Math Lab project from the combined Platform bundle. Edit sequential calculation cells, save/reopen the native document, or prepare an isolated AI proposal and explicitly review/apply it. Example: `radius = 3`, `area = pi * radius ^ 2`, `sqrt(area)`.

- [User guide and acceptance](docs/GUIDE.md).
- [Architecture, format and limits](docs/ARCHITECTURE.md).
- [Development and evidence](docs/DEVELOPMENT.md).

The product contains no Game Engine imports. Platform supplies lifecycle contracts, project leases, shared AI transport, atomic file utilities and review primitives. Math Lab owns its parser, calculation semantics, native format, manual editing and proposal transaction. Credentials stay in the host's memory; the project selects its own model. No JavaScript evaluation, arbitrary code execution or automatic AI Apply.

Source checks: `npm ci` then `npm run check` (Node 24+). The dependency is a public HTTPS Platform source commit with lockfile integrity; no sibling checkout is needed to run domain tests. A compatible Platform host is needed to open the editor. See the combined ZIP's startup guide.

[MIT](LICENSE). Full symbolic algebra, matrices, plots, packages and cross-product automation remain outside this proof of concept. Commercial decisions remain deferred.

Model and Reasoning Effort are independent of connecting the shared account. Empty project model settings inherit Platform defaults; explicit overrides persist in the native document. Test project model verifies that exact selection without editing calculations.
