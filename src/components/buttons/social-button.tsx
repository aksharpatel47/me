import * as React from "react";

export const SocialButton: React.StatelessComponent<ISocialButton> = ({
  href,
  imageSrc,
  alt
}) => (
  <a
    href={href}
    style={{ padding: "0.5rem" }}
    target={href.startsWith("mailto") ? "_self" : "_blank"}
    rel="noopener"
  >
    <img style={{ width: "60px", height: "60px" }} src={imageSrc} alt={alt} />
  </a>
);

interface ISocialButton {
  href: string;
  imageSrc: string;
  alt: string;
}
