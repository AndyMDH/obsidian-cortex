# Community Plugins store submission

Obsidian submissions go through a web portal (not a PR anymore). Everything
on the repo side is ready — the remaining steps need the repo owner's
Obsidian + GitHub accounts.

## Repo-side prerequisites — all done

- [x] `manifest.json` at repo root, accurate at HEAD of `main` (the portal
      reads it from there)
- [x] `versions.json` mapping plugin version → minimum app version
- [x] GitHub release whose tag matches the manifest version, with `main.js`
      and `manifest.json` attached as individual assets
- [x] LICENSE (MIT), README with setup + privacy/network disclosure
- [x] Id/name "nous" confirmed free in `community-plugins.json`
- [x] Guidelines sweep: network use disclosed, keys stored locally and
      masked, no telemetry, `isDesktopOnly: false` honest, local `claude`
      execution disclosed

## Submit (repo owner, ~5 minutes)

1. Go to <https://community.obsidian.md> and sign in with your Obsidian
   account.
2. Connect your GitHub account (verifies you own the repo).
3. Sidebar → **Plugins** → **New plugin**.
4. Repository URL: `https://github.com/AndyMDH/obsidian-nous`
5. Accept the developer policies, **Submit**.

Review is automated first, then human — respond to feedback in the portal.

## After acceptance

Publishing a new GitHub release (with bumped `manifest.json` +
`versions.json`) is the entire update flow — the directory picks it up
automatically.
