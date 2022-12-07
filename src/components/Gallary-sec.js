import ToRightBtnImg from "../assets/images/toRight.svg";
import ToLeftBtnImg from "../assets/images/toLeft.svg";
import RsxBoldSneaker from "../assets/images/rx-xBold.png";
import DubbleXlSneaker from "../assets/images/sneakers.png";
import FerrariSneaker from "../assets/images/ferrari.png";
import RunningSneaker from "../assets/images/running.png";

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
          {/* GALLER CARD BOX */}
          <div className="gallery-images-card-box">
            <div className="gallery-images-card">
              <img className="gallery-images-card-img"
                width={322}
                height={230}
                src={RsxBoldSneaker}
                alt="sneaker" />

              <div className="gallery-product-info-box">
                <h2 className="gallery-images-card-title">
                  Puma RS-X Bold
                </h2>

                <ul className="gallery-images-card-list">
                  <li className="gallery-images-card-list-li">
                    <p className="gallery-images-card-list-p">
                      Size:
                      <span className="gallery-images-card-list-span">
                        Dubble-XL
                      </span>
                    </p>
                  </li>
                  {/* PRODUCT PRICE */}
                  <li className="gallery-images-card-list-li">
                    <p className="gallery-images-card-list-p">
                      Price:
                      <span className="gallery-images-card-list-span">
                        $200
                      </span>
                    </p>
                  </li>
                </ul>

                <button className='gallery-buy-now-btn' type='button'>
                  Buy Now
                </button>
              </div>
            </div>
            {/* DUBBLE XL */}
            <div className="gallery-images-card">
              <img className="gallery-images-card-img"
                width={322}
                height={230}
                src={DubbleXlSneaker}
                alt="sneaker" />

              <div className="gallery-product-info-box">
                <h2 className="gallery-images-card-title">
                  Puma Sneakers
                </h2>

                <ul className="gallery-images-card-list">
                  <li className="gallery-images-card-list-li">
                    <p className="gallery-images-card-list-p">
                      Size:
                      <span className="gallery-images-card-list-span">
                        Dubble-XL
                      </span>
                    </p>
                  </li>
                  {/* PRODUCT PRICE */}
                  <li className="gallery-images-card-list-li">
                    <p className="gallery-images-card-list-p">
                      Price:
                      <span className="gallery-images-card-list-span">
                        $200
                      </span>
                    </p>
                  </li>
                </ul>
                {/* PRODUCT BUY BUTTON */}
                <button className='gallery-buy-now-btn' type='button'>
                  Buy Now
                </button>
              </div>
            </div>
            {/* FERRARI SNEAKER */}
            <div className="gallery-images-card">
              <img className="gallery-images-card-img"
                width={322}
                height={230}
                src={FerrariSneaker}
                alt="sneaker" />

              <div className="gallery-product-info-box">
                <h2 className="gallery-images-card-title">
                  Puma Ferrari
                </h2>

                <ul className="gallery-images-card-list">
                  <li className="gallery-images-card-list-li">
                    <p className="gallery-images-card-list-p">
                      Size:
                      <span className="gallery-images-card-list-span">
                        Dubble-XL
                      </span>
                    </p>
                  </li>
                  {/* PRODUCT PRICE */}
                  <li className="gallery-images-card-list-li">
                    <p className="gallery-images-card-list-p">
                      Price:
                      <span className="gallery-images-card-list-span">
                        $190
                      </span>
                    </p>
                  </li>
                </ul>
                {/* PRODUCT BUY BUTTON */}
                <button className='gallery-buy-now-btn' type='button'>
                  Buy Now
                </button>
              </div>
            </div>
            {/* RUNNING SNEAKER */}
            <div className="gallery-images-card">
              <img className="gallery-images-card-img"
                width={322}
                height={230}
                src={RunningSneaker}
                alt="sneaker" />

              <div className="gallery-product-info-box">
                <h2 className="gallery-images-card-title">
                  Puma Running
                </h2>

                <ul className="gallery-images-card-list">
                  <li className="gallery-images-card-list-li">
                    <p className="gallery-images-card-list-p">
                      Size:
                      <span className="gallery-images-card-list-span">
                        Dubble-XL
                      </span>
                    </p>
                  </li>
                  {/* PRODUCT PRICE */}
                  <li className="gallery-images-card-list-li">
                    <p className="gallery-images-card-list-p">
                      Price:
                      <span className="gallery-images-card-list-span">
                        $200
                      </span>
                    </p>
                  </li>
                </ul>
                {/* PRODUCT BUY BUTTON */}
                <button className='gallery-buy-now-btn' type='button'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};