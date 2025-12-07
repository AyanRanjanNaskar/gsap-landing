import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./component/Navbar";
import gsap from "gsap";
import Hero from "./component/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => (
  <main>
    <Navbar />
    <Hero />
    <div className="h-dvh bg-black">

    </div>
  </main>
)

export default App