import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import FirstSection from "./component/FirstSection";
import Footer from "./component/Footer";
import FourthSection from "./component/FourthSection";
import Navbar from "./component/Navbar";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
import { faStumbleuponCircle } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
function App() {
  const [arrow, setArrow] = useState(0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY; 
      if(scrollPosition > 500){
        // console.log(scrollPosition);
      }
      // => scroll position
      
    }
    const parentref = useRef<any>();
    // const handleScroll= () => {
    //   parentref.current.scrollTop = 200;
    // };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);
  return (
    <div id="main" className="pt-10">
      <Navbar />
      <div className="flex flex-col space-y-32">
        <div id="section1">
          <FirstSection />
        </div>
        <div id="section2">
          <SecondSection />
        </div>
        <div id="section3">
          <ThirdSection />
        </div>
        <div id="section4">
          <FourthSection />
        </div>
        <Footer />
      </div>
      <div className="sticky left-[90%] bottom-[10%] w-44 z-50">
        <a href="#root" onClick={handleScroll}>
          <FontAwesomeIcon
            icon={faStumbleuponCircle}
            style={{
              width: "50px",
              height: "50px",
              color: "white",
       
            }}
          />
        </a>
      </div>

      {/* <CVIndex /> */}
      {/* <CVDoc/> */}
    </div>
  );
}

export default App;
