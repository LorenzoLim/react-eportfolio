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
        <UI.Container>
          <div
            style={{
              color: "yellow",
              textAlign: "center",
              fontSize: 70,
            }}
          >
            Skills
          </div>
          <div>
            <Component.Skills isVisible={isVisible} />
          </div>
        </UI.Container>
      </UI.Blackwood>
      <UI.Brickwall
        className="box"
        style={{
          height: 5480,
          backgroundAttachment: "fixed",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <UI.Container
          style={{ backgroundColor: "rgba(250,249,246,0.7)", height: 5400 }}
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
            <UI.Award
              rel="preload"
              class="square"
              style={{ marginBottom: 20 }}
            />
            <div>
              Digital Insurance Agenda Munich 2018 Winners. image source:
              www.itcdiaeurope.com
            </div>
            <div
              style={{
                width: 920,
                height: 180,
                margin: "auto",
                marginTop: 20,
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
            <UI.InsuranceForm style={{ marginBottom: 20 }} />
          </div>
          <div>
            image source:
            https://accident-health-claims.qbe.com/public-forms/group-personal-accident-and-sickness
          </div>
          <div style={{ display: "flex", margin: "20px 0px" }}>
            <UI.Forms />
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
                  fontSize: 24,
                  padding: 20,
                  width: 340,
                  color: "white",
                }}
              >
                My first project at RBC group was to make a website to create
                and store all the internal forms. I was responsible for
                designing and creating the entire website including the login
                page and the forms within the website. <br />
                <br /> I managed the deployments and updates to the website as
                well as the addition of requested forms.
              </div>
            </div>
          </div>
          <div>image source: forms.ip2me.com.au</div>
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
                  fontSize: 24,
                  padding: 20,
                  width: 360,
                  color: "white",
                }}
              >
                One of RBC groups largest client, Qcoal Group, needed a solution
                for their users to be able to manage their phone extensions.
                <br />
                <br />I created an online solution where users can input their
                extension and it would redirect them to the correct server.
              </div>
            </div>
            <UI.Phones rel="preload" class="square" />
          </div>
          <div style={{ margin: "20px 0px" }}>
            image source: https://phones.ip2me.com.au (only available from
            within the network)
          </div>
          <div style={{ marginBottom: 20 }}>
            <UI.Network
              rel="preload"
              class="square"
              style={{ marginBottom: 20 }}
            />
            <div style={{ margin: "20px 0px" }}>
              image source: https://forms.ip2me.com.au
            </div>
            <div
              style={{
                width: 920,
                height: 300,
                margin: "auto",
                padding: 20,
                borderRadius: 10,
                backgroundColor: "rgba(81,81,81,0.7)",
              }}
            >
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 24,
                  padding: 20,
                  width: 880,
                  color: "white",
                }}
              >
                The Network Access Request form that was original a paper
                solution that had to be signed and scanned and uploaded and was
                used to give users permissions to drives and basic details like
                contact email and the manager approving the form.
                <br />
                <br /> I created an online solution that can be filled out by a
                manager and once approved be sent to the new user via email and
                one click sign the form to start the automated onboarding
                process.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <UI.Monitor
              rel="preload"
              class="square"
              style={{ marginBottom: 20 }}
            />
            <div style={{ margin: "20px 0px" }}>
              image source: https://3cxmanager.ip2me.com.au/
            </div>
            <div
              style={{
                width: 920,
                height: 260,
                margin: "auto",
                padding: 20,
                borderRadius: 10,
                backgroundColor: "rgba(81,81,81,0.7)",
              }}
            >
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 24,
                  padding: 20,
                  width: 880,
                  color: "white",
                }}
              >
                RBC Group has an internal company called Ducentis and I was
                requested to reverse engineer a third party server monitor
                application that was outdated by looking at the requests being
                sent by this third party program to the server API.
                <br />
                <br /> I displayed the server information retrieved and
                converted the JSON data to a readable and presentable table with
                all the servers as well as their details. Functionality to
                backup servers as well as catch errors and sending alert emails
                to support when a server goes down.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <UI.Quotes
              rel="preload"
              class="square"
              style={{ marginBottom: 20 }}
            />
            <div style={{ margin: "20px 0px" }}>
              image source: https://quotes.ip2me.com.au/
            </div>
            <div
              style={{
                width: 920,
                height: 260,
                margin: "auto",
                padding: 20,
                borderRadius: 10,
                backgroundColor: "rgba(81,81,81,0.7)",
              }}
            >
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 22,
                  padding: 20,
                  width: 880,
                  color: "white",
                }}
              >
                The sales team within the company needed an online solution to
                generate quotes so I created this quoting website to aid in the
                speed in which we generate quotes. The old process involved
                going to one person and asking them to generate a quote manually
                using a price sheet.
                <br />
                <br /> However with this solution, the prices are stored in the
                database and can be adjusted on the fly so the prices will
                always be correct and the ease of use of not having to calculate
                costs manually and just inputting the quantity they desire and
                which package makes the quoting tool a valuable resource to the
                company.
              </div>
            </div>
          </div>
        </UI.Container>
      </UI.Brickwall>
      <UI.River
        className="box"
        style={{
          height: 2400,
          backgroundAttachment: "fixed",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <UI.Container style={{ height: 900 }}>
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 70,
              marginBottom: 50,
            }}
          >
            About
          </div>
          <div
            style={{
              width: 920,
              height: 260,
              margin: "auto",
              padding: 20,
              borderRadius: 10,
              backgroundColor: "rgba(81,81,81,0.7)",
            }}
          >
            <div
              style={{
                fontFamily: "raleway",
                fontSize: 22,
                padding: 20,
                width: 880,
                color: "white",
              }}
            >
              Before you read about what I have achieved in my I.T. career, let
              me tell you a little bit about myself. I'm your typical Dungeons
              and Dragons anime loving nerd. I love playing board games and card
              games with my friends.
              <br />
              <br />
              On my free time I play a little chess and solve Rubick's cubes. I
              love solving puzzles and keeping my brain engaged, hence why I
              love developing so much. New problems to tackle and new ideas to
              explore.
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
                width: 540,
                height: 360,
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
                  fontSize: 23,
                  padding: 20,
                  width: 520,
                  color: "white",
                }}
              >
                After studying at Griffith University I took a teaching role at
                Code Camp. As the head teacher, I managed the lesson plans and
                taught kids aged between 7-14 on the fundamentals of coding
                using drag and drop logic blocks to create games that were
                interactive and engaging.
                <br />
                <br />I travelled between NSW and QLD visiting different schools
                to teach numerous kids the joy of coding and inspring them to
                pursue a career in this field.
              </div>
            </div>
            <UI.CodeCamp style={{ marginBottom: 20 }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              paddingTop: 20,
            }}
          >
            <UI.CoderAcademy style={{ marginBottom: 20 }} />
            <div
              style={{
                width: 540,
                height: 360,
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
                  fontSize: 24,
                  padding: 20,
                  width: 540,
                  color: "white",
                }}
              >
                I was given the opportunity to be one of the first students to
                participate in the very first fast track bootcamp in Brisbane.
                This bootcamp was a six month fast track bootcamp that taught
                revelant industry technologies and also offered an internship at
                the end of the program.
                <br />
                <br />I completed the bootcamp and completed my internship at
                Rex Labs. During my time there, I created React components and
                wrote integration tests.
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
                width: 540,
                height: 360,
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
                  fontSize: 23,
                  padding: 20,
                  width: 520,
                  color: "white",
                }}
              >
                My first full time Software Engineering role was at
                Codafication. My first project there was to work on the
                extensions list for their portal. Our platform was submitted to
                the Digital Insurance Agenda in Munich Germany and won an award.
                <br />
                <br />
                Afterwards I worked closely with our global insurance client QBE
                on an online insurance form. The project was a success and is
                still in use to this day. Afterwards I was mainly working on bug
                fixes and quality of life improvements.
              </div>
            </div>
            <UI.Codafication style={{ marginBottom: 20 }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              paddingTop: 20,
            }}
          >
            <UI.Techx style={{ marginBottom: 20 }} />
            <div
              style={{
                width: 540,
                height: 420,
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
                  fontSize: 24,
                  padding: 20,
                  width: 520,
                  color: "white",
                }}
              >
                I've been with RBC group for nearly 5 years and I have been
                chosen to represent them at the TechX conference. During my time
                at RBC Group I have completed many projects over the years and
                worked with many clients.
                <br />
                <br />I manage RBC Groups internal forms as well as any internal
                projects that they assign to me. I deal with the design,
                development, deployment and maintenance of all of our projects.
                I manage a junior developer under me and teach them coding
                patterns and principles.
              </div>
            </div>
          </div>
        </UI.Container>
      </UI.River>
    </div>
  );
}

export default Home;
