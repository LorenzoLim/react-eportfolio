import Percentage from "./Percentage.jsx";

function Skills(props) {
  return (
    <div>
      <div
        class="flex-wrapper"
        style={{ justifyContent: "space-between", marginBottom: 90 }}
      >
        <Percentage percent={90} text="Javascript" color="orange" />
        <Percentage percent={70} text="SQL" color="green" />
        <Percentage percent={85} text="Node" color="blue" />
        <Percentage percent={95} text="React" color="red" />
      </div>
      <div class="flex-wrapper" style={{ justifyContent: "space-between" }}>
        <Percentage percent={75} text="Docker" color="purple" />
        <Percentage percent={65} text="GraphQL" color="teal" />
        <Percentage percent={80} text="PHP" color="yellow" />
        <Percentage percent={96} text="Express" color="pink" />
      </div>
    </div>
  );
}

export default Skills;
