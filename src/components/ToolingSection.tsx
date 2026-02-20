export default function ToolingSection() {
  return (
    <section id="tooling" data-component="ToolingSection">
      <div className="container">
        <div className="section-label">Tooling</div>
        <h2>The spec works without tooling. Tooling makes it better.</h2>
        <p className="section-desc">
          Sightmap is just YAML files in your repo — any agent can read them, and you can write them by hand. But tooling can generate, validate, and enrich sightmaps automatically.
        </p>

        <div className="tooling-tiers">
          <div className="tooling-tier">
            <div className="tooling-tier-header">
              <span className="tooling-tier-label">The spec</span>
              <span className="tooling-tier-cost">Free &middot; No dependencies</span>
            </div>
            <p>Write <code>.sightmap/*.yaml</code> files by hand or have any agent generate them. Add instructions to <code>CLAUDE.md</code> or <code>.cursorrules</code> and your agent reads the sightmap as context before writing code. No tooling required.</p>
          </div>

          <div className="tooling-tier highlighted">
            <div className="tooling-tier-header">
              <span className="tooling-tier-label">Subtext plugin</span>
              <span className="tooling-tier-cost">Free &middot; Claude Code</span>
            </div>
            <p>A <a href="https://subtext.fullstory.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Claude Code plugin</a> for building and using sightmaps. Browser snapshots show semantic component names instead of generic roles, guided generation walks you through selector discovery and validation, and the UI implementation workflow uses your sightmap as a navigation index from live UI to source code.</p>
          </div>

          <div className="tooling-tier">
            <div className="tooling-tier-header">
              <span className="tooling-tier-label">Subtext session review</span>
              <a href="https://subtext.fullstory.com" target="_blank" rel="noreferrer" className="tooling-tier-link">subtext.fullstory.com &rarr;</a>
            </div>
            <p>A hosted MCP server that lets your agent diagnose real user issues from session recordings. Replay what users experienced, inspect UI state at any timestamp, and diff before/after to find what went wrong. Free tier included, paid tiers based on usage.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
