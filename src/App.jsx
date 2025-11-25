import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestClient from "./components/LatestClient";
import LatestJob from "./components/LatestJob";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <LatestClient />
      <LatestJob />
      <Footer />

    </div>
  );
}
