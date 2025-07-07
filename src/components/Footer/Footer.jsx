import { Link } from "react-router-dom";
import Logo from "../../assets/images/Footer/Logo 2.png";
import { footerLinks } from "../../Data/Data.js";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiDribbbleLine,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
import "./Footer.css";

const socialLists = [
  { id: 1, name: "Facebook", icon: <RiFacebookFill />, url: "https://www.facebook.com" },
  { id: 2, name: "Instagram", icon: <RiInstagramLine />, url: "https://www.instagram.com" },
  { id: 3, name: "Dribbble", icon: <RiDribbbleLine />, url: "https://www.dribbble.com" },
  { id: 4, name: "LinkedIn", icon: <RiLinkedinFill />, url: "https://www.linkedin.com" },
  { id: 5, name: "Twitter", icon: <RiTwitterFill />, url: "https://www.twitter.com" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-left">
          <Link>
            <img src={Logo} alt="Logo" />
          </Link>
          <p>
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          {footerLinks.map((section) => (
            <div key={section.title} className="footer-link-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="footer-right">
          <h3>Get job notifications</h3>
          <p>The latest job news, articles, sent to your inbox weekly</p>
          <form className="footer-form">
            <input type="text" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p title="Created by @isha">
          &copy; {new Date().getFullYear()} made by ishaa.
        </p>
        <div className="footer-socials">
          {socialLists.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
