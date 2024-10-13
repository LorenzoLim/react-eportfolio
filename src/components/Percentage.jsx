function Percentage(props) {
  return (
    <div class="single-chart">
      <div
        style={{
          textAlign: "center",
          color: props.textColor || "white",
          fontSize: 36,
        }}
      >
        {props.text}
      </div>
      <svg viewBox="0 0 36 36" class={`circular-chart ${props.color}`}>
        <path
          class="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class={props.isVisible ? "circle circle-animation" : "circle"}
          stroke-dasharray={`${props.percent}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" class="percentage">
          {props.percent + "%"}
        </text>
      </svg>
    </div>
  );
}

export default Percentage;
