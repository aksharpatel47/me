import React from "react"
import AksharPatel from "../images/me.jpg"
import {SocialButton} from "../components/buttons/social-button"
import GithubSVG from "../images/logos/github-logo.svg"
import LinkedInSVG from "../images/logos/linkedin.svg"
import TwitterSVG from "../images/logos/twitter.svg"
import MailSVG from "../images/logos/mail.svg"

const AboutPage = () => (
  <div style={{textAlign: "center"}}>
    <img
      style={{
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        border: "5px solid #3F51B5",
        textAlign: "center",
      }}
      src={AksharPatel}
      alt="Akshar Patel"
    />
    <p>
      Please bear while I transfer my blog from Jekyll to Gatsby.<br/>Thank you
      for understanding.
    </p>
    <p>In the meantime, you can visit me at: </p>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        margin: "0",
      }}
    >
      <li>
        <SocialButton
          imageSrc={TwitterSVG}
          alt={"Link to Twitter Account"}
          href={"https://twitter.com/aksharpatel47"}
        />
      </li>
      <li>
        <SocialButton
          imageSrc={GithubSVG}
          alt={"Link to GitHub Account"}
          href={"https://github.com/aksharpatel47"}
        />
      </li>
      <li>
        <SocialButton
          imageSrc={LinkedInSVG}
          alt={"Link to LinkedIn Account"}
          href={"https://linked.com/in/aksharpatel47"}
        />
      </li>
      <li>
        <SocialButton
          imageSrc={MailSVG}
          alt={"Mail Me at me@aksharpatel47.com"}
          href={"mailto:me@aksharpatel47.com"}
        />
      </li>
    </ul>
    <br/>
    <h3>Thank You for Visiting.</h3>
  </div>
)

export default AboutPage
