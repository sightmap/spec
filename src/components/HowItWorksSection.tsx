export default function HowItWorksSection() {
  return (
    <section id="how-it-works" data-component="HowItWorksSection">
      <div className="container">
        <div className="section-label">How It Works</div>
        <h2>Three steps. Zero runtime cost.</h2>
        <p className="section-desc">
          Sightmap is a static file committed to your repo. No SDK, no runtime dependency, no performance impact.
        </p>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Generate the map</h3>
              <p>Your AI agent generates <code>.sightmap/</code> files by crawling your app's component tree and mapping views, components, and selectors into structured YAML. You can also write them by hand.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Commit to your repo</h3>
              <p>The <code>.sightmap/</code> directory lives alongside your code. It's version-controlled, reviewed in PRs, and evolves with your app. All <code>*.yaml</code> files in the directory are discovered and merged.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Agents read it automatically</h3>
              <p>When an AI agent starts a task, it reads your sightmap to understand your app's structure before writing a single line of code. No special integration needed — agents read YAML from the repo like any other file.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
