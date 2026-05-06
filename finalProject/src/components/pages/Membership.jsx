import { Link } from "react-router-dom";
function Membership() {
  return (
    <main className="page">
      <h1>Membership</h1>
      <div className="membership-intro">
         <p className="membership-slogan"> Choose the plan that matches your goals, lifestyle and training level.</p>
  <p className="membership-note">
    All memberships are confirmed in person or by phone. One-day training passes are also available. Please contact our team for details.
    </p>
     </div>
      <section className="pricing-grid">
        <article className="pricing-card">
          <h2>Basic</h2>
          <p className="price">€25 / month</p>
          <ul>
            <li>Gym access</li>
            <li>Locker room access</li>
            <li>Basic support</li>
          </ul>
         <Link to="/contact" className="plan-button">Choose Plan</Link>
        </article>

        <article className="pricing-card">
          <h2>Standard</h2>
          <p className="price">€45 / month</p>
          <ul>
            <li>Everything in Basic</li>
            <li>Group classes</li>
            <li>Training plan</li>
          </ul>
         <Link to="/contact" className="plan-button">Choose Plan</Link>
        </article>

        <article className="pricing-card featured">
          <h2>Premium</h2>
          <p className="price">€70 / month</p>
          <ul>
            <li>Everything in Standard</li>
            <li>Nutrition advice</li>
            <li>Bring a friend once per month</li>
          </ul>
          <Link to="/contact" className="plan-button">Choose Plan</Link>
        </article>
      </section>
    </main>
  );
}

export default Membership;