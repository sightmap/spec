export default function DirectorySection() {
  return (
    <section data-component="DirectorySection">
      <div className="container">
        <div className="section-label">Convention</div>
        <h2>Directory structure</h2>
        <p className="section-desc">
          Sightmap files live in a <code>.sightmap/</code> directory at your project root. All <code>*.yaml</code> files are discovered and merged — organize however you like.
        </p>

        <div className="code-block">
          <div className="code-header">
            <span className="code-filename">your-project/</span>
            <span className="code-lang">tree</span>
          </div>
          <pre><code><span className="c-str">├──</span> src/{'\n'}
<span className="c-str">├──</span> package.json{'\n'}
<span className="c-str">├──</span> .gitignore{'\n'}
<span className="c-accent">├── .sightmap/</span>{'\n'}
<span className="c-accent">│   ├── globals.yaml</span>        <span className="c-com"># nav, footer, shared components</span>{'\n'}
<span className="c-accent">│   ├── index.yaml</span>          <span className="c-com"># homepage view</span>{'\n'}
<span className="c-accent">│   ├── checkout.yaml</span>       <span className="c-com"># checkout flow</span>{'\n'}
<span className="c-accent">│   └── dashboard.yaml</span>      <span className="c-com"># main dashboard</span>{'\n'}
<span className="c-str">├──</span> CLAUDE.md{'\n'}
<span className="c-str">└──</span> .cursorrules</code></pre>
        </div>
      </div>
    </section>
  )
}
