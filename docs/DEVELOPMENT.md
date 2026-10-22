# Development and acceptance

Node24+. Run `npm ci` and `npm run check`. The boundary check rejects imports from Game Engine; domain tests cover arithmetic/security limits, native save/reopen/external revisions, isolated reviewed human Apply, write rollback, cancellation and changed review receipts. Joint host/browser acceptance lives in Platform `tests/p5.test.mjs` and `tests/browser-p5.mjs` with AXIOM_ENGINE_PATH and AXIOM_MATH_PATH set.

MVP local domain acceptance:7/7 tests. Joint Platform acceptance:36/36 with both real adapters and an explicit disposable Windows recycle integration flag. Browser P5 uses controlled Responses HTTP and verifies manual calculations/save/reopen, AI review/apply, one editor per project, disconnection/reconnection, simultaneous Game Engine, notifications and persistent host error recovery. Current evidence belongs to its tested review revisions; CI and human native/real-model acceptance are recorded separately in Platform's P5 report.

The shared provider is pinned to Platformf2131275ffed2d132383322959631484e8fc8ad5 through HTTPS with package-lock integrity. Do not replace it with copied infrastructure source, a local link or a Game Engine import. Both current product/UI/docs are English. The project is public MIT.
