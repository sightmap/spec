# sightmap

**A semantic map of your application, for AI agents.**

`sitemap.xml` tells search engines how to crawl your site.
`.sightmap/` tells AI agents how to understand your app.

→ **[sightmap.org](https://sightmap.org)** — full spec documentation

---

## Quick start

Create a `.sightmap/` directory at your project root. Add YAML files that describe your app's views and components.

```yaml
# .sightmap/checkout.yaml
version: 1

views:
  - name: Checkout
    route: /checkout
    description: Purchase flow with cart and payment
    components:
      - name: CheckoutPage
        selector: [data-component="CheckoutPage"]
        source: src/pages/Checkout.tsx
        children:
          - name: CartSummary
            selector: [data-component="CartSummary"]
            source: src/components/CartSummary.tsx
          - name: PaymentForm
            selector: [data-component="PaymentForm"]
            source: src/components/PaymentForm.tsx
            children:
              - name: card-number
                selector: input[name="card"]
              - name: submit
                selector: button[type="submit"]
                description: Place order
```

That's it. Commit the files, and any AI coding agent can read them.

## Schema

Every `.sightmap/*.yaml` file starts with `version: 1`. All files in the directory are discovered and merged.

### File (root)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | number | yes | Must be `1` |
| `views` | View[] | | Views (pages/screens) in this file |
| `components` | Component[] | | Global components matched across all views |

### View

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Human-readable view name |
| `route` | string | yes | URL path pattern, glob syntax (`/checkout`, `/users/*`) |
| `description` | string | | What this view does |
| `source` | string | | Relative path to the source file |
| `components` | Component[] | | Components scoped to this view |

### Component

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Component name or descriptive identifier |
| `selector` | string | yes | CSS selector for runtime matching |
| `source` | string | | Relative path to the source file |
| `description` | string | | What this component does |
| `children` | Component[] | | Nested child components |

## How it works

1. **Generate** — Your AI agent generates `.sightmap/` files by crawling your component tree, or you write them by hand.
2. **Commit** — The `.sightmap/` directory lives alongside your code. Version-controlled, reviewed in PRs, evolves with your app.
3. **Agents read it** — When an agent starts a task, it reads your sightmap to understand structure before writing code. No special integration needed.

## Agent setup

**Claude Code** — Add to your `CLAUDE.md`:

```
# Sightmap

Before modifying any UI code, read the relevant .sightmap/ YAML file
to understand the view structure, component hierarchy, and selectors.

When adding new views or components, update or create the corresponding sightmap file.
```

**Cursor** — Add to `.cursorrules`:

```
# Project uses sightmap spec (.sightmap/ directory)

When working on UI features, always check .sightmap/ for the semantic
map of the relevant page. The sightmap shows which component renders
each element and where the source files are located.
```

**Any agent** — The format is plain YAML. Any tool that reads files from a repo can consume a sightmap.

## Global vs view-scoped components

Components defined at the file root (`components:`) are **global** — matched across all views. Components nested inside a view are **view-scoped** and additive with globals.

```yaml
version: 1

# Global: matched on every view
components:
  - name: Navigation
    selector: nav[data-component="Navigation"]
    source: src/components/Navigation.tsx

views:
  - name: Dashboard
    route: /dashboard
    components:
      # View-scoped: only matched on /dashboard
      - name: DashboardLayout
        selector: [data-component="DashboardLayout"]
        source: src/pages/Dashboard.tsx
```

## Directory structure

```
your-project/
├── src/
├── package.json
├── .sightmap/
│   ├── globals.yaml        # nav, footer, shared components
│   ├── index.yaml          # homepage view
│   ├── checkout.yaml       # checkout flow
│   └── dashboard.yaml      # main dashboard
├── CLAUDE.md
└── .cursorrules
```

## License

MIT — see [LICENSE](LICENSE).

---

Built by [Subtext](https://subtext.dev). The spec is open-source and evolves based on real usage and community feedback.
