import { useRef, useState, useEffect } from "react";
import * as Component from "../components";
import * as UI from "../UI";

function Home() {
  const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callBackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callBackFunction, options);
      const currentContainerRef = containerRef.current;
      if (currentContainerRef) observer.observe(currentContainerRef);

      return () => {
        if (currentContainerRef) observer.observe(currentContainerRef);
      };
    }, [containerRef, options]);

    return [containerRef, isVisible];
  };

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  return (
    <div style={{ position: "relative" }}>
      <Component.Navbar />
      <UI.CityBackdrop>
        <div
          style={{
            position: "relative",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: 20, marginTop: -200 }}>
            <UI.ProfilePicture class="square" />
          </div>
          <div
            style={{
              animation: "fadeIn 1s ease-in both",
            }}
          >
            <div
              style={{
                borderLeft: "4px solid black",
                paddingLeft: 100,
                paddingTop: 100,
                top: 200,
                marginLeft: 100,
                height: 400,
                marginTop: -200,
              }}
            >
              <div style={{ fontFamily: "lobster", fontSize: 100 }}>
                Lorenzo Lim
              </div>
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 30,
                  padding: 20,
                  width: 500,
                }}
              >
                "Good code isn't defined by how to make something complex, it's
                defined by making the complex simple"
              </div>
            </div>
          </div>
        </div>
      </UI.CityBackdrop>
      <div className="box" ref={containerRef}>
        <UI.Blackwood>
          <Component.Percentage isVisible={isVisible} />
        </UI.Blackwood>
      </div>
    </div>
  );
}

export default Home;
