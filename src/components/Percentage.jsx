function Percentage(props) {
  return (
    <div class="flex-wrapper" style={{ paddingBottom: 90 }}>
      <div class="single-chart">
        <svg viewBox="0 0 36 36" class="circular-chart orange">
          <path
            class="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            class={props.isVisible ? "circle circle-animation" : "circle"}
            stroke-dasharray="30, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" class="percentage">
            30%
          </text>
        </svg>
      </div>

      <div class="single-chart">
        <svg viewBox="0 0 36 36" class="circular-chart green">
          <path
            class="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            class={props.isVisible ? "circle circle-animation" : "circle"}
            stroke-dasharray="60, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" class="percentage">
            60%
          </text>
        </svg>
      </div>

      <div class="single-chart">
        <svg viewBox="0 0 36 36" class="circular-chart blue">
          <path
            class="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            class={props.isVisible ? "circle circle-animation" : "circle"}
            stroke-dasharray="90, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" class="percentage">
            90%
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Percentage;
