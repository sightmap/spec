export default function WhySection() {
  return (
    <section data-component="WhySection">
      <div className="container">
        <div className="section-label">Why</div>
        <h2>What agents get from a sightmap</h2>

        <div className="values">
          <div className="value-item">
            <div className="value-icon">◎</div>
            <h3>Build accuracy</h3>
            <p>The agent reads your sightmap before coding. It knows where components live and how they connect — places features correctly the first time.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">⟐</div>
            <h3>Self-validation</h3>
            <p>The sightmap defines what "correct" looks like per page. Agents check their own work against the blueprint using a headless browser.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">⇄</div>
            <h3>Cross-agent portability</h3>
            <p>Define your app structure once. Every agent — Claude Code, Cursor, Codex, Windsurf — can consume the same sightmap.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
