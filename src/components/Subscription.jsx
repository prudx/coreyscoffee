const Subscription = () => (
  <section id="subscribe" className="panel subscription">
    <header className="panel-header">
      <p className="eyebrow">Subscription</p>
      <h2>Always stocked, never stressed.</h2>
      <p>
        Set your cadence, switch blends anytime, and pause with one click. We roast to order
        every Monday and ship within 24 hours.
      </p>
    </header>
    <form className="subscription-form">
      <label>
        Frequency
        <select>
          <option>Every week</option>
          <option>Every 2 weeks</option>
          <option>Every month</option>
        </select>
      </label>
      <label>
        Grind
        <select>
          <option>Whole bean</option>
          <option>Espresso</option>
          <option>Pour over</option>
          <option>French press</option>
        </select>
      </label>
      <label>
        Bags per delivery
        <select>
          <option>1 bag</option>
          <option>2 bags</option>
          <option>3 bags</option>
        </select>
      </label>
      <button type="submit" className="btn btn-primary">
        Start subscription
      </button>
    </form>
  </section>
);

export default Subscription;
