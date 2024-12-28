import Percentage from "./Percentage.jsx";

function Skills(props) {
  return (
    <div>
      <div
        class="flex-wrapper"
        style={{ justifyContent: "space-between", marginBottom: 20 }}
      >
        <Percentage
          percent={94}
          text="React"
          color="orange"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={70}
          text="Typescript"
          color="green"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={85}
          text="Javascript"
          color="blue"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={90}
          text="Node"
          color="red"
          isVisible={props.isVisible}
        />
      </div>
      <div
        class="flex-wrapper"
        style={{ justifyContent: "space-between", marginBottom: 20 }}
      >
        <Percentage
          percent={70}
          text="Docker"
          color="purple"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={92}
          text="Express"
          color="teal"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={63}
          text="MSSQL"
          color="yellow"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={55}
          text="Ruby"
          color="pink"
          isVisible={props.isVisible}
        />
      </div>
      <div
        class="flex-wrapper"
        style={{ justifyContent: "space-between", marginBottom: 20 }}
      >
        <Percentage
          percent={65}
          text="GraphQL"
          color="gold"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={60}
          text="Azure AD"
          color="violet"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={80}
          text="PHP"
          color="lightblue"
          isVisible={props.isVisible}
        />
        <Percentage
          percent={70}
          text="Webpack"
          color="mintgreen"
          isVisible={props.isVisible}
        />
      </div>
    </div>
  );
}

export default Skills;
