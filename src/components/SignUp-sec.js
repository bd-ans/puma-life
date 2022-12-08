import SignUpSecLeftSideImg from "../assets/images/signUp.png";

export default function SignUpSec() {
  return (
    <>
      {/* SIGN UP SECTION */}
      <div className="sign-up-sec">
        <div className="container">
          <div className="sign-up-sec-innner">
            {/* SIGN UP SECTION LEFT SIDE */}
            <div className="sign-up-sec-left-side">
              <img className="sign-up-sec-left-side-img"
                width={564}
                height={374}
                src={SignUpSecLeftSideImg}
                alt="sign-up" />
            </div>
            {/* SIGN UP SECTION RIGHT SIDE */}
            <div className="sign-up-sec-right-side">
              <div className="sign-up-sec-right-side-inner">
                <h2 className="sign-up-sec-right-side-inner-heading">
                  Sign Up to our Newsletter
                </h2>
                {/* RIGHT SIDE P TAG */}
                <p className="sign-up-sec-right-side-inner-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque <br /> in elementum tempus, vestibulum faucibus tortor odio elit.
                </p>
                {/* RIGHT SIDE FORM */}
                <form className="sign-up-sec-right-side-inner-form" action="https://echo.htmlacademy.ru" method="POST">
                  <input className="sign-up-sec-right-side-inner-form-input" type="text" name="email address" placeholder="Enter your email address" maxLength={30} />
                  <button className="sign-up-sec-right-side-inner-form-btn" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}