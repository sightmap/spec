export default function SchemaSection() {
  return (
    <section id="schema" data-component="SchemaSection">
      <div className="container">
        <div className="section-label">Schema Reference</div>
        <h2>Spec format</h2>
        <p className="section-desc">
          Each <code>.sightmap/*.yaml</code> file describes views and components of your application. All YAML files in the directory are discovered and merged. The schema is intentionally simple — YAML that any agent can parse without a library.
        </p>

        <h3 style={{ fontSize: '1rem', color: 'var(--text-bright)', marginBottom: '0.5rem', fontFamily: 'var(--mono)' }}>File (root)</h3>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <table className="schema-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>version <span className="required-badge">required</span></td>
                <td>number</td>
                <td>Must be <code>1</code>. Every file must start with this field.</td>
              </tr>
              <tr>
                <td>views</td>
                <td>View[]</td>
                <td>Views (pages/screens) defined in this file</td>
              </tr>
              <tr>
                <td>components</td>
                <td>Component[]</td>
                <td>Global components matched across all views</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '1rem', color: 'var(--text-bright)', margin: '2rem 0 0.5rem', fontFamily: 'var(--mono)' }}>View</h3>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <table className="schema-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name <span className="required-badge">required</span></td>
                <td>string</td>
                <td>Human-readable view name</td>
              </tr>
              <tr>
                <td>route <span className="required-badge">required</span></td>
                <td>string</td>
                <td>URL path pattern using glob syntax (e.g. <code>/checkout</code>, <code>/users/*</code>)</td>
              </tr>
              <tr>
                <td>description</td>
                <td>string</td>
                <td>What this view does or represents</td>
              </tr>
              <tr>
                <td>source</td>
                <td>string</td>
                <td>Relative path to the source file</td>
              </tr>
              <tr>
                <td>components</td>
                <td>Component[]</td>
                <td>Components scoped to this view (additive with globals)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ fontSize: '1rem', color: 'var(--text-bright)', margin: '2rem 0 0.5rem', fontFamily: 'var(--mono)' }}>Component</h3>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '10px' }}>
          <table className="schema-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name <span className="required-badge">required</span></td>
                <td>string</td>
                <td>Component name as it appears in code or a descriptive identifier</td>
              </tr>
              <tr>
                <td>selector <span className="required-badge">required</span></td>
                <td>string</td>
                <td>CSS selector for runtime matching (e.g. <code>[data-component="Nav"]</code>)</td>
              </tr>
              <tr>
                <td>source</td>
                <td>string</td>
                <td>Relative path to the source file</td>
              </tr>
              <tr>
                <td>description</td>
                <td>string</td>
                <td>What this component does</td>
              </tr>
              <tr>
                <td>children</td>
                <td>Component[]</td>
                <td>Nested child components or elements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
