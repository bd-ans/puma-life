import TeastamolialsImg from '../assets/images/testimonials.png'; // import image
import AnnaPaulwerImg from '../assets/images/AnnaPaulwer.svg'; // import image
import TestamonialsToRightBtnImg from "../assets/images/toRight.svg"; // import image
import TestamonialsToLeftBtnImg from "../assets/images/toLeft.svg"; // import image

export default function TestimonialsSec() { /* export TestimonialsSec component */
  return (
    <>
      {/* TESTIMONIALS SECTION */}
      <div className="testimonials-section">
        <div className="container">
          {/* TESTIMONIALS */}
          <div className="testimonials">
            {/* TESTIMONIALS TITLE */}
            <div className="testimonials-title">
              <h2 className="testimonials-title-text">
                Testimonials
              </h2>
            </div>
            {/* TESTIMONIALS CARDS */}
            <div className="testamonial-card">
              {/* TESTAMONIALAS LEFT SIDE */}
              <div className="testamonial-left-side">
                <div className="testamonial-left-side-img">
                  <img className='testamonial-left-side-img' 
                    width={513}
                    height={292}
                    src={TeastamolialsImg} 
                    alt="testamonial-img" />
                </div>
              </div>
              {/* TESTAMONIALAS RIGHT SIDE */}
              <div className="testamonial-right-side">
                <div className="testamonial-right-side-top-content">
                  <img className='testamonial-right-side-top-content-img'
                    width={94}
                    height={94}
                    src={AnnaPaulwerImg} 
                    alt="Anna Paulwer" />

                  <div className="testamonial-right-side-top-content-navigation-btns">
                    {/* TESTAMONIALS TO LEFT BUTTON */}
                    <button className="testamonial-right-side-top-content-navigation-btns-toLeft">
                      <img src={TestamonialsToLeftBtnImg}
                        width={55}
                        height={55}
                        alt="toLeft" 
                        className='testamonial-right-side-top-content-navigation-btns-toLeft-img'/>
                    </button>
                    {/* TESTMONIALS TO RIGHT BUTTON */}
                    <button className="testamonial-right-side-top-content-navigation-btns-toLeft">
                      <img src={TestamonialsToRightBtnImg}
                        width={55}
                        height={55}
                        alt="toLeft" 
                        className='testamonial-right-side-top-content-navigation-btns-toLeft-img'/>
                    </button>
                  </div>
                </div>
                {/* TESTAMONIAL RIGHT SIDE BOTTOM CONTENT */}
                <div className="testamonial-right-side-bottom-content">
                  <h3 className="testamonial-right-side-bottom-content-text">
                    Their services was best and friendly
                  </h3>
                  <p className="testamonial-right-side-bottom-content-p">
                    Lorem ipsum dolor sit amet, consectetur adipis <br /> cing elit. Eleifend 
                  </p>
                  <h4 className="testamonial-right-side-bottom-content-user-txt">
                    Anna Paulwer
                  </h4>
                  <p className="testamonial-right-side-bottom-content-user-span">
                    Athletic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};