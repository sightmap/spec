export default function CTASection() {
  return (
    <section className="cta-bottom" data-component="CTASection">
      <div className="container">
        <h2>Give your agents sight.</h2>
        <p>The spec is open-source. The YAML is simple. Start mapping your app today.</p>
        <div className="hero-ctas">
          <a href="https://github.com/sightmap/spec" target="_blank" rel="noreferrer" className="btn-primary">
            View the spec on GitHub
          </a>
          <a href="https://github.com/sightmap/spec/issues" target="_blank" rel="noreferrer" className="btn-secondary">
            Open an issue
          </a>
        </div>
      </div>
    </section>
  )
}
