import { Suspense } from 'react';
import ExploreCard from './Components/Explores/ExploreCard';
import Mainbar from './Components/Mainbar';
import Navbar from './Components/Navbar';
import { Itechnology } from './Types/Explore';
import Footer from './Components/Explores/Footer';

const exploreFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const explorePromise = exploreFetch();
  return (
    <>
      <Navbar />
      <Mainbar />

      <Suspense fallback={<h2>Loading.....</h2>}>
        <ExploreCard explorePromise={explorePromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
