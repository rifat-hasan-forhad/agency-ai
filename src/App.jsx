import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import TeamMate from "./components/TeamMate";
import WorkSection from "./components/WorkSection";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <WorkSection />
      <TeamMate />
    </div>
  );
}

export default App;
