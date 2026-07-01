import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <ServiceSection />
    </div>
  );
}

export default App;
