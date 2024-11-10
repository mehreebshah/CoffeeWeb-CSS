import Hero from "./hero/page";

import Review from "./review/page";
import About from "./about/page";


function Homepage() {
  return (
    <div className="h-full w-full">
      <Hero />

      <About />
      <Review />
     
    </div>
  );
}
export default Homepage;
