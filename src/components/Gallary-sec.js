import ToRightBtnImg from "../assets/images/toRight.svg";
import ToLeftBtnImg from "../assets/images/toLeft.svg";

export default function GallarySec() {
  return (
    <>
      {/* GALARY SECTION */}
      <div className="gallary-sec">
        <div className="container">
          {/* GALLARY INNER */}
          <div className="gallery-inner">
            <div className="gallery-top-box">
              {/* GALLARY SHORT TITLE */}
              <h2 className="gallery-top-short-title">
                GALLARY
              </h2>

              {/* GALARY TITLE */}
              <h1 className="gallery-top-title">
                40+YEARS’ EXPRERIENCE
              </h1>
            </div>
            {/* GALLARY CATEROGIES BOX */}
            <div className="gallary-caterogies-box">
              {/* GALLARY CATEROGIES */}
              <div className="gallary-caterogies">
                {/* GALARY CATEROGIES LEFT SIDE */}
                <div className="gallary-caterogies-left-side">
                  <h3 className="gallary-caterogies-title">
                    Categories:
                  </h3>
                  {/* GALARY CATEROGIES LIST */}
                  <div className="gallary-caterogies-list">
                    <ul className="gallary-caterogies-list-ul">
                      <li className="gallary-caterogies-list-li">
                        <button className="gallary-caterogies-list-btn">
                          All
                        </button>
                      </li>
                      <li className="gallary-caterogies-list-li">
                        <button className="gallary-caterogies-list-btn">
                          Male
                        </button>
                      </li>
                      <li className="gallary-caterogies-list-li">
                        <button className="gallary-caterogies-list-btn">
                          Female
                        </button>
                      </li>
                      <li className="gallary-caterogies-list-li">
                        <button className="gallary-caterogies-list-btn">
                          Kids
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* GALARY CATEROGIES RIGHT SIDE */}
                <div className="gallary-caterogies-right-side">
                  {/* GALARY CATEROGIES NEXT BUTTON */}
                  <div className="gallary-caterogies-btn-box">
                    <button className="gallary-caterogies-next-btn">
                      <img className="gallary-caterogies-next-btn-img"
                        width={58}
                        height={58}
                        src={ToLeftBtnImg} 
                        alt="" />
                    </button>
                    {/* GALARY CATEROGIES NEXT BUTTON */}
                    <button className="gallary-caterogies-next-btn">
                      <img className="gallary-caterogies-next-btn-img"
                        width={58}
                        height={58}
                        src={ToRightBtnImg} 
                        alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};