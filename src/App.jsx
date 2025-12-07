import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./component/Navbar";
import gsap from "gsap";
import Hero from "./component/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => (
  <main>
    <Navbar />
    <Hero />
    
  </main>
)

export default App