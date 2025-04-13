// import Hero from "./components/hero/Hero";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";

import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import { Element, Link } from "react-scroll";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        {/* <LazyLoad height={"100vh"} offset={-100}> */}
          <Element name="hero">
          <section>
            <Hero />
          </section>
          </Element>
        {/* </LazyLoad> */}
        {/* <LazyLoad height={"100vh"} offset={-100}> */}
        <Element name="services">
          <section>
            <Services />
          </section>
          </Element>
        {/* </LazyLoad> */}
        {/* <LazyLoad height={"600vh"} offset={-100}> */}
        {/* <Element name="portfolio"> */}
          {/* <section id="#portfolio"> */}
          {/* <Portfolio /> */}
          {/* </section> */}
          {/* </Element> */}
        {/* </LazyLoad> */}
        {/* <LazyLoad height={"100vh"} offset={-100}> */}
        <Element name="contact">
          <section>
            <Contact />
          </section>
          </Element>
        {/* </LazyLoad> */}
      </Suspense>
    </div>
  );
};

export default App;
