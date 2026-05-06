function Membership() {
  return (
    <main className="page">
      <h1>Membership</h1>
      <p>Choose a plan that fits your training goals.</p>

      <section className="pricing-grid">
        <article className="pricing-card">
          <h2>Basic</h2>
          <p className="price">€25 / month</p>
          <ul>
            <li>Gym access</li>
            <li>Locker room access</li>
            <li>Basic support</li>
          </ul>
          <button>Choose Plan</button>
        </article>

        <article className="pricing-card">
          <h2>Standard</h2>
          <p className="price">€45 / month</p>
          <ul>
            <li>Everything in Basic</li>
            <li>Group classes</li>
            <li>Training plan</li>
          </ul>
          <button>Choose Plan</button>
        </article>

        <article className="pricing-card featured">
          <h2>Premium</h2>
          <p className="price">€70 / month</p>
          <ul>
            <li>Everything in Standard</li>
            <li>Personal coaching</li>
            <li>Nutrition advice</li>
          </ul>
          <button>Choose Plan</button>
        </article>
      </section>
    </main>
  );
}

export default Membership;