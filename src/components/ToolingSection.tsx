export default function ToolingSection() {
  return (
    <section id="tooling" data-component="ToolingSection">
      <div className="container">
        <div className="section-label">Tooling</div>
        <h2>The spec works without tooling. Tooling makes it better.</h2>
        <p className="section-desc">
          Sightmap is just YAML files in your repo — any agent can read them, and you can write them by hand. But runtime tooling can generate, validate, and enrich sightmaps automatically.
        </p>

        <div className="tooling-tiers">
          <div className="tooling-tier">
            <div className="tooling-tier-header">
              <span className="tooling-tier-label">Just the spec</span>
              <span className="tooling-tier-cost">Free &middot; No dependencies</span>
            </div>
            <p>Write <code>.sightmap/*.yaml</code> files by hand or have your agent generate them. Add instructions to <code>CLAUDE.md</code> or <code>.cursorrules</code>. Any AI coding agent reads the YAML as context before writing code.</p>
          </div>

          <div className="tooling-tier">
            <div className="tooling-tier-header">
              <span className="tooling-tier-label">Agent generation</span>
              <span className="tooling-tier-cost">Free &middot; Any agent</span>
            </div>
            <p>Ask your agent to inspect your component tree and generate sightmap files. The agent crawls the DOM, discovers selectors, and writes structured YAML. Update the files as your app evolves — they're version-controlled like any other code.</p>
          </div>

          <div className="tooling-tier highlighted">
            <div className="tooling-tier-header">
              <span className="tooling-tier-label">Subtext</span>
              <a href="https://subtext.fullstory.com" target="_blank" rel="noreferrer" className="tooling-tier-link">subtext.fullstory.com &rarr;</a>
            </div>
            <p>The reference implementation. <a href="https://subtext.fullstory.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Subtext</a> is a Claude Code plugin that brings sightmap to life with runtime enrichment — browser snapshots show semantic component names instead of generic roles, guided generation walks you through selector discovery and validation, and Subtext session integration lets you diagnose real user issues.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
