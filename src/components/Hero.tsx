export default function Hero() {
  return (
    <section className="hero" data-component="Hero">
      <div className="container">
        <div className="hero-badge">
          <span className="dot"></span>
          Open-source spec · v0.1
        </div>
        <h1>A semantic map of your<br />application, for AI agents</h1>
        <p className="hero-sub">
          <code>sitemap.xml</code> tells search engines how to crawl your site.<br />
          <code>.sightmap/</code> tells AI agents how to understand your app.
        </p>
        <div className="hero-ctas">
          <a href="https://github.com/sightmap/spec" target="_blank" rel="noreferrer" className="btn-primary">
            View the spec on GitHub
          </a>
          <a href="#spec" className="btn-secondary">
            Read the docs ↓
          </a>
        </div>
      </div>
    </section>
  )
}
