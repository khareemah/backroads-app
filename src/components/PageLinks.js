import React from "react";

const PageLinks = (props) => {
  const { pageLinks, classType } = props;
  return (
    <>
      {pageLinks.map((pageLink) => {
        const { id, link } = pageLink;
        return (
          <li key={id}>
            <a href={`#${link}`} className={classType}>
              {link}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default PageLinks;
