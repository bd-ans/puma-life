import QualitySvg from "../assets/images/quality.svg"; /* IMPORT IMG */
import FlexibleSvg from "../assets/images/Flexible.svg"; /* IMPORT IMG */
import LongLastingSvg from "../assets/images/LongLasting.svg"; /* IMPORT IMG */

export default function FeatureSec() {
  return (
    <>
      {/* FEATURE SECTION */}
      <div className="feature-sec">
        <div className="container">
          {/* FEATURE INNER */}
          <div className="feature-inner">
            {/* FEATURE INNER SHORT TITLE */}
            <h2 className="feature-inner-shrt-title">
              Feature
            </h2>

            {/* FEATURE INNER TITLE */}
            <h1 className="feature-inner-title">
              We have best feature in Shoes
            </h1>

            {/* FEATURE CARDS */}
            <div className="feature-cards-box">
              {/* FEATURE CARD QUALITY */}
              <div className="feature-card">
                <div className="feture-inner">
                  {/* FEATURE CARD IMG */}
                  <div className="feature-card-img-box">
                    <div className="feature-card-img-background">
                      <img className="feature-card-img"
                        src={QualitySvg}
                        alt="quality logo"
                        width={108}
                        height={105} />
                    </div>
                  </div>
                  {/* FEATURE CARD TITLE */}
                  <div className="feature-card-title">
                    <h2 className="feature-card-title-txt">
                      Quality
                    </h2>
                  </div>
                  {/* FEATURE CARD TEXT */}
                  <div className="feature-card-txt">
                    <p className="feature-card-txt-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mauris nisl est accumsan quis tempus.
                    </p>
                  </div>
                  {/* FEATURE CARD BUTTON */}
                  <div className="feature-card-btn-box">
                    <button className="feature-card-btn" type="button">
                      Read More
                      {/* SVG ICON */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style={{ marginLeft: '6px' }}>
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* FEATURE CARD FLEXIBLE */}
              <div className="feature-card">
                <div className="feture-inner">
                  {/* FEATURE CARD IMG */}
                  <div className="feature-card-img-box">
                    <div className="feature-card-img-background">
                      <img className="feature-card-img"
                        src={FlexibleSvg}
                        alt="quality logo"
                        width={108}
                        height={105} />
                    </div>
                  </div>
                  {/* FEATURE CARD TITLE */}
                  <div className="feature-card-title">
                    <h2 className="feature-card-title-txt">
                      Flexible
                    </h2>
                  </div>
                  {/* FEATURE CARD TEXT */}
                  <div className="feature-card-txt">
                    <p className="feature-card-txt-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mauris nisl est accumsan quis tempus.
                    </p>
                  </div>
                  {/* FEATURE CARD BUTTON */}
                  <div className="feature-card-btn-box">
                    <button className="feature-card-btn" type="button">
                      Read More
                      {/* SVG ICON */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style={{ marginLeft: '6px' }}>
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* FEATURE CARD LONG LASTING */}
              <div className="feature-card">
                <div className="feture-inner">
                  {/* FEATURE CARD IMG */}
                  <div className="feature-card-img-box">
                    <div className="feature-card-img-background">
                      <img className="feature-card-img"
                        src={LongLastingSvg}
                        alt="quality logo"
                        width={108}
                        height={105} />
                    </div>
                  </div>
                  {/* FEATURE CARD TITLE */}
                  <div className="feature-card-title">
                    <h2 className="feature-card-title-txt">
                      Long Lasting
                    </h2>
                  </div>
                  {/* FEATURE CARD TEXT */}
                  <div className="feature-card-txt">
                    <p className="feature-card-txt-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mauris nisl est accumsan quis tempus.
                    </p>
                  </div>
                  {/* FEATURE CARD BUTTON */}
                  <div className="feature-card-btn-box">
                    <button className="feature-card-btn" type="button">
                      Read More
                      {/* SVG ICON */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" style={{ marginLeft: '6px' }}>
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
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