---
root: true
targets: ["*"]
---

# Project instructions

The existing Teddy Benz website. Use package.json scripts for local development and validation. For a new landing-page design, consult the existing GEMINI.md design brief; preserve its authored content.

## Agent configuration

Edit `.rulesync/` and `rulesync.jsonc` for shared instructions and native target selection. Preview before applying. From this repository root, run `pnpm dlx rulesync@43.6.0 generate --dry-run`, `pnpm dlx rulesync@43.6.0 generate`, and `pnpm dlx rulesync@43.6.0 generate --check`.

This configuration generates rules only. Global MCP connections and global agent roles remain in dotagents. Vercel owns skill installation; configuration generation does not install skills or run automatically during dependency installation or agent startup.
