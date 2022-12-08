import HeroRightImg from '../assets/images/header-krasovka.svg'; /* IMPORT HERO RIGHT IMG */
import HeroNextImg from '../assets/images/next.svg'; /* IMPORT HERO NEXT IMG */
import ChouseSec from './Chouse-sec';

export default function HeroSec() { /* EXPORT HERO SECTION */
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="hero-inner">
            {/* HERO LEFT CONTENT */}
            <div className="hero-left-content">
              <div className="hero-left-top-content">
                <h1 className="hero-left-top-content-txt">Life is better in <br /> running <br /> shoes.</h1>
              </div>

              <div className="hero-left-bottom-content">
                <p className="hero-left-bottom-content-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eu ultrices ut </p>
              </div>
            </div>
            {/* HERO RIGHT CONTENT */}
            <div className="hero-right-content">
              <img className='hero-right-img'
                src={HeroRightImg}
                alt="hero img"
                width={539}
                height={428} />
              {/* HERO NEXT BTN */}
              <button className='hero-next-btn'>
                <img className='hero-next-img'
                  width={70}
                  height={70}
                  src={HeroNextImg}
                  alt="next img" />
              </button>
            </div>

          </div>
          {/* CHOUSE SECTION */}
          <ChouseSec />
        </div>
      </div>
    </>
  )
};