import React from "react";

const SocialLinks = (props) => {
  const { socialLinks, classType } = props;
  return (
    <>
      {socialLinks.map((socialLink) => {
        const { id, href, icon } = socialLink;
        return (
          <li key={id}>
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              className={classType}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </>
  );
};

export default SocialLinks;
