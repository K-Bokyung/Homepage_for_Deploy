import AboutView from '../about-view';
import ContactView from '../contact-view';
import IntroView from '../intro-view';
import PortfolioView from '../portfolio-view';

//
export default function HomeView() {
  return (
    <div>
      <div>
        <IntroView />
      </div>

      <div>
        <PortfolioView />
      </div>

      <div>
        <AboutView />
      </div>

      <div>
        <ContactView />
      </div>
    </div>
  );
}
