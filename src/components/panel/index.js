import classnames from "classnames";
import "./panel.scss";

const Panel = ({ children, className, component, loud, brand }) => {
  const panelClass = classnames({
    [className]: true,
    panel: true,
    "panel--loud": loud,
  });

  const Component = component || "div";
  return <Component className={panelClass}>{children}</Component>;
};

export default Panel;
