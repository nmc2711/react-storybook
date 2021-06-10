import React, { useState } from "react";
import "./tooltip.css";

export interface TooltipProps {
  direction?: string;
  content: string;
  delay?: number;
  children: any;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  let timeout: any;

  const [active, setActive] = useState<boolean>(false);

  const showTip = (): void => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = (): void => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
