export default function AgentSection() {
  return (
    <section id="agents" data-component="AgentSection">
      <div className="container">
        <div className="section-label">Agent Integration</div>
        <h2>Works with any AI coding tool</h2>
        <p className="section-desc">
          Agents generate and consume sightmaps through their native configuration mechanisms. No plugins or special tooling required.
        </p>

        <div className="agent-cards">
          <div className="agent-card">
            <h3>Claude Code</h3>
            <p>Add a <code>CLAUDE.md</code> instruction telling Claude to read <code>.sightmap/</code> before making changes. Claude generates and updates sightmaps via its skills system.</p>
          </div>
          <div className="agent-card">
            <h3>Cursor</h3>
            <p>Add sightmap instructions to <code>.cursorrules</code>. Cursor reads the YAML files as project context and can generate new sightmaps when asked.</p>
          </div>
          <div className="agent-card">
            <h3>Codex &amp; Others</h3>
            <p>Any agent that reads files from a repo can consume a sightmap. The format is plain YAML — no SDK, no API, no special parser needed.</p>
          </div>
          <div className="agent-card">
            <h3>MCP Servers</h3>
            <p>For agents that support MCP, a sightmap server can expose your app's structure as queryable context — returning relevant maps for the current task.</p>
          </div>
        </div>

        <div className="example-grid" style={{ marginTop: '1.5rem' }}>
          <div className="code-block">
            <div className="code-header">
              <span className="code-filename">CLAUDE.md</span>
              <span className="code-lang">markdown</span>
            </div>
            <pre><code><span className="c-com"># Sightmap</span>{'\n'}
{'\n'}
Before modifying any UI code, read{'\n'}
the relevant <span className="c-accent">.sightmap/</span> YAML file{'\n'}
to understand the view structure,{'\n'}
component hierarchy, and selectors.{'\n'}
{'\n'}
When adding new views or components,{'\n'}
update or create the corresponding{'\n'}
sightmap file.</code></pre>
          </div>
          <div className="code-block">
            <div className="code-header">
              <span className="code-filename">.cursorrules</span>
              <span className="code-lang">text</span>
            </div>
            <pre><code><span className="c-com"># Project uses sightmap spec</span>{'\n'}
<span className="c-com"># (.sightmap/ directory)</span>{'\n'}
{'\n'}
When working on UI features, always{'\n'}
check <span className="c-accent">.sightmap/</span> for the semantic{'\n'}
map of the relevant page.{'\n'}
{'\n'}
The sightmap shows which component{'\n'}
renders each element and where the{'\n'}
source files are located.</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
