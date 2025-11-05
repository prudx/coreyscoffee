const BrewMenu = ({ methods }) => (
  <section className="panel inverted" aria-labelledby="brew-title">
    <header className="panel-header">
      <p className="eyebrow">Brew Menu</p>
      <h2 id="brew-title">Pick your ritual.</h2>
      <p>
        However you brew, Corey&apos;s Coffee has a profile dialed for your equipment. Visit our
        brew bar or grab beans to experiment at home.
      </p>
    </header>
    <ul className="menu-grid">
      {methods.map((method) => (
        <li key={method.id}>
          <h3>{method.title}</h3>
          <p>{method.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default BrewMenu;
