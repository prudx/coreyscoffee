import Hero from './components/Hero.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import BrewMenu from './components/BrewMenu.jsx';
import StorySection from './components/StorySection.jsx';
import Subscription from './components/Subscription.jsx';
import { featuredBlends, brewMethods } from './data/products.js';

const App = () => (
  <div className="app-shell">
    <header className="site-header">
      <span className="logo">Corey&apos;s Coffee</span>
      <nav>
        <a href="#shop">Shop</a>
        <a href="#subscribe">Subscribe</a>
        <a href="#story">Our story</a>
      </nav>
      <button type="button" className="btn btn-outline">
        Cart (0)
      </button>
    </header>

    <main>
      <Hero />
      <FeaturedProducts blends={featuredBlends} />
      <StorySection />
      <BrewMenu methods={brewMethods} />
      <Subscription />
    </main>

    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Corey&apos;s Coffee Roasters. Crafted in Brooklyn.</p>
      <div className="footer-links">
        <a href="mailto:hello@coreys.coffee">Email</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://shop.coreys.coffee" target="_blank" rel="noreferrer">
          Wholesale
        </a>
      </div>
    </footer>
  </div>
);

export default App;
