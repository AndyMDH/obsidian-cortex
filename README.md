<p align="center">
  <img src="assets/logo.svg" alt="Noggin logo — a knowledge graph forming a brain" width="112">
</p>

<h1 align="center">Noggin</h1>

<p align="center">
  <a href="https://obsidian.md/plugins?id=noggin"><img alt="Get it from Obsidian" src="https://img.shields.io/badge/Obsidian-Get%20the%20plugin-7C3AED?logo=obsidian&logoColor=white"></a>
  <img alt="Obsidian downloads" src="https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%237C3AED&label=downloads&query=%24%5B%22noggin%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-7C3AED"></a>
</p>

Capture anything — a typed thought, a voice memo, pasted meeting notes, a
photo, a PDF — and Noggin turns it into a tagged, linked knowledge graph
inside Obsidian.
Every capture gets summarized and connected to related notes automatically,
and once a topic has enough notes behind it, Noggin writes a wiki page
pulling everything together.

No coding needed. Everything happens inside Obsidian.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/pipeline-dark.svg">
  <img alt="Capture anything into 00-Inbox; Noggin turns it into a tagged, linked note in 10-Notes; topics with 4+ notes get a wiki page in 30-Wikis." src="assets/pipeline-light.svg">
</picture>

## What you need

- [Obsidian](https://obsidian.md) (free)
- One of these:
  - A **Claude subscription** (Pro or Max), plus
    [Claude Code](https://docs.claude.com/claude-code) installed once
  - An **API key** from Anthropic, OpenAI, Gemini, or [Z.ai](https://z.ai)
    (GLM-5.2 and other GLM models)
  - A **local model** (e.g. [Ollama](https://ollama.com)) — free, nothing
    ever leaves your machine

> **Desktop vs mobile:** Claude Code CLI mode only works on desktop. Use a
> direct API key on mobile.

## Install

1. In Obsidian: **Settings → Community plugins**, turn community plugins on.
2. **Browse**, search **"Noggin"**, click **Install**, then **Enable**.

That's it — or use the badge above to jump straight to Noggin's page on
[Obsidian's site](https://obsidian.md/plugins?id=noggin).

<details>
<summary>Want updates before the official directory picks them up?</summary>

Install [BRAT](https://github.com/TfTHacker/obsidian42-brat) from Community
plugins, then command palette → **"BRAT: Add a beta plugin"** → paste
`AndyMDH/obsidian-noggin`. BRAT tracks new GitHub releases immediately
instead of waiting for the directory to sync — everything else about setup
and use is identical.
</details>

## Set up

**A setup wizard opens the first time you enable Noggin** — it walks you
through the one choice below, checks the connection, and can drop a sample
note into your inbox so you watch your first enrichment happen. (Rerun it
anytime: command palette → "Noggin: Open setup wizard".)

Prefer doing it by hand? All settings live inside Obsidian (nothing to
configure on your computer itself). Open **Obsidian's settings** — the gear
icon bottom-left, or `Cmd/Ctrl+,` — and click **Noggin** in the left
sidebar. One choice to make:

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/settings-nav-dark.svg">
  <img alt="Obsidian's settings window: Noggin in the left sidebar under Community plugins, with Execution mode, Provider, and Model settings in the main pane." src="assets/settings-nav-light.svg">
</picture>

- **Claude subscription (Pro/Max)?** Set **Execution mode** to
  "Claude Code CLI". Done.
- **API key instead?** Set it to "Direct API key", pick your **Provider**,
  and paste your key (or your base URL, for a local model). Done.

Everything else has a sensible default, and a **Test connection** button in
the same panel confirms your choice works before you capture anything.

## Use it

The fastest way in: click the **➕ quick capture** icon in the left sidebar
(or command palette → "Noggin: Quick capture") — type, paste, or attach an
image/PDF/voice memo, hit Capture, done. Or drop anything straight into the
**`00-Inbox`** folder — same result:

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/capture-ways-dark.svg">
  <img alt="Type/paste, voice memo, photo/screenshot, or PDF — all land in 00-Inbox, and Noggin turns each into a tagged, summarized, linked note." src="assets/capture-ways-light.svg">
</picture>

- **➕ Type or paste** — quick capture, or a note (`Cmd/Ctrl+N`) in `00-Inbox`
- **🎙️ Voice** — click the mic icon (or a hotkey), talk, click again (more
  below)
- **📷 Photos & screenshots** — `.png`, `.jpg`, `.webp`, `.heic` (to
  auto-capture Mac screenshots, see [`examples/`](examples/))
- **📄 PDFs** — attach one via quick capture, or drop it in `00-Inbox`

Within seconds, Noggin tags it, summarizes it, links it to related notes,
and files it in **`10-Notes`** — your original text, image, or recording
preserved inside. Topics with 4+ notes get a wiki page in **`30-Wikis`** (or
force one anytime: command palette → "Noggin: Build/update wikis now").

### 🎙️ Capture by voice

Click the **🎙️ mic icon** in the left sidebar (or command palette →
"Noggin: Toggle voice capture") to start recording, click it again to stop.
That's the whole thing — the recording drops into the inbox and comes back
as a tagged, summarized note with the audio still playable inside.

(Prefer a hotkey? **Settings → Hotkeys**, search "Noggin: Toggle voice
capture", give it a key — same command, your choice which trigger you use.
Any audio file dropped in `00-Inbox` also works, including recordings made
in the Obsidian **mobile** app on the go.)

Transcription (speech → text) prefers **local whisper.cpp** on macOS if
`whisper-cli` and a model are installed (`brew install whisper-cpp`, path
configurable in Noggin's settings) — nothing leaves your machine, no API key
needed. Without that set up, it falls back to a **Gemini or OpenAI** API key
in Noggin's settings, even in Claude Code or GLM mode, where it's used *only*
for transcription (Claude and GLM have no audio API yet).

<details>
<summary><strong>Power option: a system-wide dictation hotkey</strong></summary>

If you want push-to-talk capture from anywhere on your machine (not just
inside Obsidian), a dictation app that can "run a script with the
transcript" — like [Handy](https://handy.computer), free and offline — can
pipe transcripts straight into your inbox: point its external-script setting
at [`examples/dictation-capture.sh`](examples/dictation-capture.sh) and edit
the two variables at the top. Note that setting is usually all-or-nothing:
once on, the app stops typing transcripts into other apps.
</details>

### 📞 Record meetings (macOS)

Calls with other people need system-audio capture, which no Obsidian plugin
can do on its own — so this one remote-controls a free open-source recorder
(QuickRecorder) instead of trying to duplicate it. Click the **📞 phone icon**
in the left sidebar (or command palette → "Noggin: Toggle meeting capture")
when the meeting starts, again when it ends — or use QuickRecorder's own
**⌥M** hotkey directly, same result either way. A speaker-labeled transcript
lands in your inbox and comes out enriched. Fully local (on-device Whisper —
no API key, nothing uploaded). One-time setup in
[`examples/meeting-capture/`](examples/meeting-capture/).

Want Noggin to use a specific tag — a client, a project? Add a file with
that name in **`20-Tags`** and it'll prefer it over inventing its own.

### 🔍 Ask your vault questions

Command palette → **"Noggin: Query vault"** — ask in plain language ("what
did we decide about the Q3 roadmap?") and get a direct, cited answer saved
to `40-Queries`. Needs CLI execution mode.

## How it works

The slightly technical version of what happens between dropping a capture
and seeing a linked note. (Full detail:
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and
[`docs/TECHNICAL.md`](docs/TECHNICAL.md).)

1. **Watch.** The plugin listens for file-create events in `00-Inbox` (plus
   a catch-up scan when Obsidian opens, since plugins only run while
   Obsidian does). New files get a 2-second settle delay — dictation and
   sync tools often create-then-rewrite.

2. **Normalize by type.** Markdown/text is read as-is. Images and PDFs are
   base64-encoded into vision/document content blocks (HEIC is converted to
   JPEG first via macOS's `sips`). Audio is **transcribed first** — local
   `whisper.cpp` when installed (macOS, no API key), otherwise Gemini's
   native audio input or OpenAI's `whisper-1` — and the transcript re-enters
   the text path, which is why voice works in every execution mode.

3. **Enrich — one structured call, no free-form generation.** The model is
   forced to answer via a single `enrich_note` tool call returning JSON:
   type (meeting/note), date, title, summary, key points, decisions, action
   items, 1–4 tags drawn from the controlled vocabulary in `20-Tags` (new
   tags need justification), plus a duplicate check and related-note picks
   against an index of your recent notes. In CLI mode this step instead
   shells out to `claude -p` with a generated SKILL.md, letting Claude Code
   read the inbox itself — same contract, agentic execution.

4. **Assemble deterministically.** Plugin code — not the model — builds the
   note from that JSON: frontmatter, sections, wikilinks, your original
   text/image/recording preserved inside. The file moves to `10-Notes`;
   detected duplicates are parked in `00-Inbox/duplicates` instead of
   deleted.

5. **Synthesize.** After each run, notes are clustered by tag. Any tag
   reaching 4+ substantial notes gets a wiki page in `30-Wikis` (a second
   structured call writes the narrative; timeline and source lists are built
   deterministically from note metadata) — updated, not appended, as new
   notes arrive.

Every step is logged to `.noggin/pipeline.log` in the vault.

## If something breaks

- **Nothing happened?** Command palette → "Noggin: Process inbox now" and
  watch for an error notification.
- **"Claude not found" (CLI mode)?** Run `which claude` in Terminal and
  paste the result into the **Claude CLI path** field in Obsidian's Noggin
  settings.
- **Logs**: `.noggin/pipeline.log` (hidden file in your vault) records every
  run and error.

## Good to know

- **Obsidian must be open** — captures wait in `00-Inbox` until it is, then
  get processed.
- **CLI mode is desktop-only**; use Direct API key mode on mobile.
- **One image, PDF, or recording per note.** HEIC photos need macOS to
  convert; PDFs need Anthropic, Gemini, or CLI mode; audio needs either local
  `whisper.cpp` (macOS) or a Gemini/OpenAI key for transcription.
- **API keys are stored in plain text** in your vault's settings file —
  keep the vault out of shared backups.
- **Privacy**: only your captured notes, tag names, and recent note titles
  are ever sent to the provider you chose. Local mode sends nothing
  anywhere. No telemetry, ever.

## For developers

```bash
npm install
npm run dev      # rebuild as you edit
npm run build    # typecheck + final main.js
npm test         # no live API/CLI calls
```

Core logic lives in `src/` with no Obsidian dependency (tested with Node's
test runner); `main.ts` wires it to the real app.

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — how captures flow through
  the vault layers.
- [`docs/TECHNICAL.md`](docs/TECHNICAL.md) — code map, build process, and
  extension points.

## License

MIT — see [LICENSE](LICENSE).
