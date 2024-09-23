function Percentage(props) {
  return (
    <div>
      <div class="flex-wrapper" style={{ paddingBottom: 90 }}>
        <div class="single-chart">
          <div style={{ textAlign: "center", color: "white", fontSize: 36 }}>
            Javascript
          </div>
          <svg viewBox="0 0 36 36" class="circular-chart orange">
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

        <div class="single-chart">
          <div style={{ textAlign: "center", color: "white", fontSize: 36 }}>
            Typescript
          </div>
          <svg viewBox="0 0 36 36" class="circular-chart green">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class={props.isVisible ? "circle circle-animation" : "circle"}
              stroke-dasharray="70, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">
              70%
            </text>
          </svg>
        </div>

        <div class="single-chart">
          <div style={{ textAlign: "center", color: "white", fontSize: 36 }}>
            Node
          </div>
          <svg viewBox="0 0 36 36" class="circular-chart blue">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class={props.isVisible ? "circle circle-animation" : "circle"}
              stroke-dasharray="85, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">
              85%
            </text>
          </svg>
        </div>
      </div>
      <div class="flex-wrapper" style={{ paddingBottom: 90 }}>
        <div class="single-chart">
          <div style={{ textAlign: "center", color: "white", fontSize: 36 }}>
            React
          </div>
          <svg viewBox="0 0 36 36" class="circular-chart red">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class={props.isVisible ? "circle circle-animation" : "circle"}
              stroke-dasharray="95, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">
              95%
            </text>
          </svg>
        </div>

        <div class="single-chart">
          <div style={{ textAlign: "center", color: "white", fontSize: 36 }}>
            Docker
          </div>
          <svg viewBox="0 0 36 36" class="circular-chart teal">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class={props.isVisible ? "circle circle-animation" : "circle"}
              stroke-dasharray="80, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">
              80%
            </text>
          </svg>
        </div>

        <div class="single-chart">
          <div style={{ textAlign: "center", color: "white", fontSize: 36 }}>
            SQL
          </div>
          <svg viewBox="0 0 36 36" class="circular-chart pink">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class={props.isVisible ? "circle circle-animation" : "circle"}
              stroke-dasharray="77, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">
              77%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Percentage;
