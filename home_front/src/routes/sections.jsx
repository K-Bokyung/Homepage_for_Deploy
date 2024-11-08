import { useRoutes } from 'react-router-dom';

import AboutPage from 'src/pages/about';
import ContactPage from 'src/pages/contact';
import CopyrightPage from 'src/pages/copyright';
import FooterPage from 'src/pages/footer';
import IntroPage from 'src/pages/intro';
import NavbarPage from 'src/pages/navbar';
import Portfolio from 'src/pages/portfolio';

//-------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: <AboutPage />,
    },
    {
      element: <ContactPage />,
    },
    {
      element: <CopyrightPage />,
    },
    {
      element: <FooterPage />,
    },
    {
      element: <IntroPage />,
    },
    {
      element: <NavbarPage />,
    },
    {
      element: <Portfolio />,
    },
  ]);

  return routes;
}
