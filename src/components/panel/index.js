import classnames from "classnames";
import "./panel.scss";

const Panel = ({ children, loud, brand }) => {
  const className = classnames({
    panel: true,
    "panel--loud": loud
  });
  return <div className={className}>{children}</div>;
};

export default Panel;
