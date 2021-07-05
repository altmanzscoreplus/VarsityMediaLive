import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HomeHero } from '../components/home';
import gtm from '../lib/gtm';

const Home = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Varsity Media</title>
      </Helmet>
      <div>
        <HomeHero />
      </div>
    </>
  );
};

export default Home;
