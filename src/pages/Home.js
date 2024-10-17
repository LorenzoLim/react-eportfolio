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
        <UI.Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              paddingTop: 100,
            }}
          >
            <div
              style={{
                width: 400,
                height: 400,
                margin: "auto",
                marginTop: 40,
              }}
            >
              <UI.ProfilePicture rel="preload" class="square" />
            </div>
            <div
              style={{
                width: 360,
                height: 360,
                margin: "auto",
                marginTop: 40,
                padding: 20,
                borderRadius: 10,
                backgroundColor: "rgba(81,81,81,0.7)",
                animation: "fadeIn 1s ease-in both",
                animationDelay: "0.4s",
              }}
            >
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 36,
                  padding: 20,
                  width: 360,
                  color: "white",
                }}
              >
                "Good code isn't defined by how to make something complex, it's
                defined by making the complex simple"
              </div>
              <div
                style={{
                  fontFamily: "lobster",
                  fontSize: 50,
                  color: "lightgrey",
                  paddingLeft: 80,
                }}
              >
                - Lorenzo Lim
              </div>
            </div>
          </div>
        </UI.Container>
      </UI.CityBackdrop>
      <UI.Blackwood className="box" ref={containerRef}>
        <UI.Container
          style={{ backgroundColor: "rgba(81,81,81,0.7)", height: 770 }}
        >
          <div
            style={{
              color: "yellow",
              textAlign: "center",
              fontSize: 70,
              marginBottom: 60,
            }}
          >
            Skills
          </div>
          <div isVisible={isVisible}>
            <Component.Skills />
          </div>
        </UI.Container>
      </UI.Blackwood>
      <UI.Brickwall
        className="box"
        style={{
          height: 4500,
          backgroundAttachment: "fixed",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <UI.Container
          style={{ backgroundColor: "rgba(250,249,246,0.7)", height: 2920 }}
        >
          <div
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 70,
              marginBottom: 60,
            }}
          >
            Portfolio
          </div>
          <div style={{ marginBottom: 20 }}>
            <UI.Award rel="preload" class="square" />
            <div>
              Digital Insurance Agenda Munich 2018 Winners. image source:
              www.itcdiaeurope.com
            </div>
            <div
              style={{
                width: 920,
                height: 180,
                margin: "auto",
                marginTop: 40,
                padding: 20,
                borderRadius: 10,
                backgroundColor: "rgba(81,81,81,0.7)",
              }}
            >
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 26,
                  padding: 20,
                  width: 920,
                  color: "white",
                }}
              >
                During my time at Codafication, I contributed to the development
                of a product that won the DIA award in Munich in 2018. I was in
                charge of handling the extensions for our infrastructure and
                allowing mobile first, omni-channel experiences.
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              paddingTop: 20,
            }}
          >
            <div
              style={{
                width: 360,
                height: 460,
                margin: "auto",
                marginTop: 0,
                padding: 20,
                borderRadius: 10,
                backgroundColor: "rgba(81,81,81,0.7)",
                animation: "fadeIn 1s ease-in both",
                animationDelay: "0.4s",
              }}
            >
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 26,
                  padding: 20,
                  width: 360,
                  color: "white",
                }}
              >
                At Codafication, I worked closely with our global insurance
                client to create a group accident and illness claim form. <br />
                <br />I was in charge of converting the designs approved to a
                functional form with pagination and file upload capabilities.
              </div>
            </div>
            <UI.InsuranceForm />
          </div>
          <div style={{ margin: "20px 0px" }}>
            image source:
            https://accident-health-claims.qbe.com/public-forms/group-personal-accident-and-sickness
          </div>
          <div style={{ margin: "20px 0px" }}>
            <UI.Phones rel="preload" class="square" />
            <div>
              image source: phones.ip2me.com.au (only available from within the
              network)
            </div>
            <div
              style={{
                width: 920,
                height: 180,
                margin: "20px 0px",
                padding: 20,
                borderRadius: 10,
                backgroundColor: "rgba(81,81,81,0.7)",
              }}
            >
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 25,
                  padding: 20,
                  width: 920,
                  color: "white",
                }}
              >
                Qcoal needed a solution for their users to be able to manage
                their phone extensions and I created an online solution where
                they can input in their extension and it would redirect them to
                the correct server.
              </div>
            </div>
          </div>
        </UI.Container>
      </UI.Brickwall>
    </div>
  );
}

export default Home;
