import classnames from "classnames";
import "./panel.scss";

const Panel = ({ children, component, loud, brand }) => {
  const className = classnames({
    panel: true,
    "panel--loud": loud
  });

  const Component = component || "div";
  return <Component className={className}>{children}</Component>;
};

export default Panel;
