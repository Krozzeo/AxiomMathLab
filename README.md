Current integration review: **0.1.3**, using the public Platform0.1.9 SDK for provider/local model IDs with slashes. Native calculation format1 and review/Apply contracts are unchanged.

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

Prepared Windows releases follow the shared Platform schema1 manifest: package/descriptor version, compatible platform/API, ZIP bytes and SHA256. Stable version tags run checks and publish prepared dependencies plus axiom-release.json; source-only archives are not installations. Project format remains1.

Version0.1.2 pins the shared Platform0.1.7 provider contract; account readiness follows the Hub verification state and compatible reasoning inherits independently of a project model override. The native calculation format remains1.


Prepared publication supports exact-commit Experimental builds from accepted same-repository PR CI, independently of main approval. Platform0.1.8 installs them side by side and retains the selected stable version until explicit activation. The candidate builder has read-only permissions; a separate pinned publisher validates provenance and hashes. Stable main publication and experimental prereleases are distinct, immutable channels. Native format1 and the bounded Math Lab product scope are unchanged.
