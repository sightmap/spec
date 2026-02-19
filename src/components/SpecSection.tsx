export default function SpecSection() {
  return (
    <section id="spec" data-component="SpecSection">
      <div className="container">
        <div className="section-label">The Spec</div>
        <h2>Your app, indexed for AI</h2>
        <p className="section-desc">
          A sightmap is a set of structured YAML files that live in your repo. They map every view, component, and interactive element — giving any AI coding agent instant understanding of your app's architecture.
        </p>

        <div className="code-block">
          <div className="code-header">
            <span className="code-filename">.sightmap/checkout.yaml</span>
            <span className="code-lang">yaml</span>
          </div>
          <pre><code><span className="c-key">version</span>: <span className="c-val">1</span>{'\n'}
{'\n'}
<span className="c-key">views</span>:{'\n'}
{'  '}- <span className="c-key">name</span>: <span className="c-str">Checkout</span>{'\n'}
{'    '}<span className="c-key">route</span>: <span className="c-str">/checkout</span>{'\n'}
{'    '}<span className="c-key">description</span>: <span className="c-str">Purchase flow with cart summary and payment</span>{'\n'}
{'    '}<span className="c-key">components</span>:{'\n'}
{'      '}- <span className="c-key">name</span>: <span className="c-str">CheckoutPage</span>{'\n'}
{'        '}<span className="c-key">selector</span>: <span className="c-str">[data-component="CheckoutPage"]</span>{'\n'}
{'        '}<span className="c-key">source</span>: <span className="c-str">src/pages/Checkout.tsx</span>{'\n'}
{'        '}<span className="c-key">children</span>:{'\n'}
{'          '}- <span className="c-key">name</span>: <span className="c-str">CartSummary</span>{'\n'}
{'            '}<span className="c-key">selector</span>: <span className="c-str">[data-component="CartSummary"]</span>{'\n'}
{'            '}<span className="c-key">source</span>: <span className="c-str">src/components/CartSummary.tsx</span>{'\n'}
{'            '}<span className="c-key">children</span>:{'\n'}
{'              '}- <span className="c-key">name</span>: <span className="c-str">line-items</span>{'\n'}
{'                '}<span className="c-key">selector</span>: <span className="c-str">[data-testid="cart-items"]</span>{'\n'}
{'              '}- <span className="c-key">name</span>: <span className="c-str">order-total</span>{'\n'}
{'                '}<span className="c-key">selector</span>: <span className="c-str">[data-testid="order-total"]</span>{'\n'}
{'          '}- <span className="c-key">name</span>: <span className="c-str">PaymentForm</span>{'\n'}
{'            '}<span className="c-key">selector</span>: <span className="c-str">[data-component="PaymentForm"]</span>{'\n'}
{'            '}<span className="c-key">source</span>: <span className="c-str">src/components/PaymentForm.tsx</span>{'\n'}
{'            '}<span className="c-key">children</span>:{'\n'}
{'              '}- <span className="c-key">name</span>: <span className="c-str">card-number</span>{'\n'}
{'                '}<span className="c-key">selector</span>: <span className="c-str">input[name="card"]</span>{'\n'}
{'              '}- <span className="c-key">name</span>: <span className="c-str">submit</span>{'\n'}
{'                '}<span className="c-key">selector</span>: <span className="c-str">button[type="submit"]</span>{'\n'}
{'                '}<span className="c-key">description</span>: <span className="c-str">Place order</span></code></pre>
        </div>
      </div>
    </section>
  )
}
