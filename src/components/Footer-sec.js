import FooterSiteLogoImg from "../assets/images/logo.svg"; // FOOTER SITE LOGO IMAGE
import FacebookIconImg from "../assets/images/facebook.svg"; // FACEBOOK ICON IMAGE
import InstagramIconImg from "../assets/images/instagram.svg"; // INSTAGRAM ICON IMAGE
import TwitterIconImg from "../assets/images/twitter.svg"; // TWITTER ICON IMAGE
import GoogleIconImg from "../assets/images/google.png"; // GOOGLE ICON IMAGE

export default function FooterSec() { /* EXPORT FOOTER SECTION */
  return (
    <>
      {/* FOOTER SECTION */}
      <div className="footer-section">
        <div className="container">
          <div className="footer-section-inner">
            {/* FOOTER TOP SECTION */}
            <div className="footer-top-section">
              {/* FOOTER TOP SECTION LEFT SIDE */}
              <div className="footer-top-section-left-side">
                <img className="footer-site-logo"
                  width={108}
                  height={48}
                  src={FooterSiteLogoImg}
                  alt="Site Logo" />

                <div className="footer-site-address">
                  <address className="footer-site-address-inner">
                    10 New Town Street, V2 <br />
                    5NW, Newstate. USA
                  </address>
                </div>
              </div>
              {/* FOOTER TOP SECTION RIGHT SIDE */}
              <div className="footer-top-section-right-side">
                <div className="footer-top-section-right-side-cards">
                  <h3 className="footer-top-section-right-side-cards-title">
                    Our Services
                  </h3>
                  <ul className="footer-top-section-right-side-cards-list">
                    <li className="footer-top-section-right-side-cards-list-item">
                      <a href="##" className="footer-top-section-right-side-cards-list-item-link">
                        About Us
                      </a>
                    </li>
                    <li className="footer-top-section-right-side-cards-list-item">
                      <a href="##" className="footer-top-section-right-side-cards-list-item-link">
                        Feature
                      </a>
                    </li>
                    <li className="footer-top-section-right-side-cards-list-item">
                      <a href="##" className="footer-top-section-right-side-cards-list-item-link">
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
                {/* SUPPORT */}
                <div className="footer-top-section-right-side-cards">
                  <h3 className="footer-top-section-right-side-cards-title">
                    Support
                  </h3>
                  <ul className="footer-top-section-right-side-cards-list">
                    <li className="footer-top-section-right-side-cards-list-item">
                      <a href="##" className="footer-top-section-right-side-cards-list-item-link">
                        About Us
                      </a>
                    </li>
                    <li className="footer-top-section-right-side-cards-list-item">
                      <a href="##" className="footer-top-section-right-side-cards-list-item-link">
                        Feature
                      </a>
                    </li>
                    <li className="footer-top-section-right-side-cards-list-item">
                      <a href="##" className="footer-top-section-right-side-cards-list-item-link">
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
                {/* CONTACT US */}
                <div className="footer-top-section-right-side-cards">
                  <h3 className="footer-top-section-right-side-cards-title">
                    Contact Us
                  </h3>
                  <ul className="footer-top-section-right-side-cards-list">
                    <li className="footer-top-section-right-side-cards-list-item">
                      <a href="##" className="footer-top-section-right-side-cards-list-item-last-link">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* FOOTER CENTER SECTION */}
            <div className="footer-center-section">
              <a href="mailto:shahzodbadriyev523@gmail.com" className="footer-center-section-link">
                shahzodbadriyev523@gmail.com
              </a>
              {/* FOOTER SOCIAL MEDIAS */}
              <div className="footer-social-medias-box">
                <a href="facebook.com" className="footer-social-medias-box-link">
                  <img className="footer-social-medias-box-icon"
                    width={48}
                    height={48}
                    src={FacebookIconImg}
                    alt="Facebook Icon" />
                </a>
                <a href="instagram.com" className="footer-social-medias-box-link">
                  <img className="footer-social-medias-box-icon"
                    width={48}
                    height={48}
                    src={InstagramIconImg}
                    alt="Instagram Icon" />
                </a>
                <a href="twitter.com" className="footer-social-medias-box-link">
                  <img className="footer-social-medias-box-icon"
                    width={39}
                    height={39}
                    src={TwitterIconImg}
                    alt="Twitter Icon" />
                </a>
                <a href="google.com" className="footer-social-medias-box-link">
                  <img className="footer-social-medias-box-icon"
                    width={43}
                    height={43}
                    src={GoogleIconImg}
                    alt="Google Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER BOTTOM SECTION */}
        <div className="footer-bottom-section">
          Copyright 2021 The PUMA All rights Reserved
        </div>
      </div>
    </>
  );
};