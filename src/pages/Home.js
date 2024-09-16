import { Navbar } from "../components";
import * as UI from "../UI";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div>
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
              <UI.ProfilePicture />
            </div>
            <div
              style={{
                fontFamily: "lobster",
                fontSize: 100,
                borderLeft: "4px solid black",
                paddingLeft: 100,
                paddingTop: 100,
                top: 200,
                marginLeft: 100,
                height: 400,
                marginTop: -200,
              }}
            >
              <div>Lorenzo Lim</div>
              <div
                style={{
                  fontFamily: "raleway",
                  fontSize: 30,
                  padding: 20,
                  width: 500,
                }}
              >
                "Good code isn't defined by how complex you can make it, good
                code is defined by making the complex simple"
              </div>
            </div>
          </div>
        </UI.CityBackdrop>
      </div>
    </div>
  );
}

export default Home;
