export default function RoadmapSection() {
  return (
    <section data-component="RoadmapSection">
      <div className="container">
        <div className="section-label">Roadmap</div>
        <h2>What's coming</h2>
        <p className="section-desc">
          Sightmap is an open-source spec maintained by the <a href="https://subtext.dev" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Subtext</a> team. The spec evolves based on real usage and community feedback.
        </p>

        <div className="roadmap-items">
          <div className="roadmap-item">
            <span className="roadmap-status now">Now</span>
            <span>YAML spec for page structure, components, and elements</span>
          </div>
          <div className="roadmap-item">
            <span className="roadmap-status now">Now</span>
            <span>Agent instruction templates for Claude Code and Cursor</span>
          </div>
          <div className="roadmap-item">
            <span className="roadmap-status next">Next</span>
            <span>Network request schemas and API endpoint mapping</span>
          </div>
          <div className="roadmap-item">
            <span className="roadmap-status next">Next</span>
            <span>Data flow definitions and state management maps</span>
          </div>
          <div className="roadmap-item">
            <span className="roadmap-status next">Next</span>
            <span>MCP server for queryable sightmap context</span>
          </div>
          <div className="roadmap-item">
            <span className="roadmap-status later">Later</span>
            <span>Validation tooling — check sightmap accuracy against live UI</span>
          </div>
          <div className="roadmap-item">
            <span className="roadmap-status later">Later</span>
            <span>React Native and Flutter support for mobile apps</span>
          </div>
        </div>
      </div>
    </section>
  )
}
