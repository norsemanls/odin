import { useEffect } from "react";
import tocbot from "tocbot";
import "./toc.scss";

export const tocContentSelector = "js-toc-content";

const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc",
      contentSelector: `.${tocContentSelector}`,
      headingSelector: "h1, h2, h3",
      hasInnerContainers: true,
      orderedList: false,
    });

    return () => tocbot.destroy();
  });

  return (
    <nav role="navigation" className="table-of-contents">
      <h4>On this page:</h4>
      <div className="js-toc"></div>
    </nav>
  );
};

export default Toc;
