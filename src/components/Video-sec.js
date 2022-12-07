import VideoBackImg from '../assets/images/bag-ekskalatordan-opa.png'; /* IMPORT IMG */
import VideoOldImg from '../assets/images/sumkali-op.png'; /* IMPORT IMG */
import VideoPlayImg from '../assets/images/play-video.png'; /* IMPORT IMG */
export default function VideoSec() { /* EXPORT VIDEO SECTION */
  return (
    <>
      {/* VIDEO SECTION */}
      <div id="video-section" className="video-section">
        <div className="container">
          <div className="video-inner">
            {/* VIDEO LEFT CONTENT */}
            <div className="video-left-content">
              <div className="video-left-top-content">
                <h2 className="video-left-top-content-txt">
                  VIDEO
                </h2>
              </div>
              {/* VIDEO LEFT CENTER CONTENT */}
              <div className="video-left-center-content">
                <h1 className="video-left-center-content-txt">
                  Desire the feel of <br /> satisfaction.
                </h1>
              </div>
              {/* VIDEO LEFT BOTTOM CONTENT */}
              <div className="video-left-bottom-content">
                <p className="video-left-bottom-content-txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Neque auctor proin amet sagittis semper ipsum at <br /> lectus. At
                </p>
              </div>
            </div>

            {/* VIDEO RIGHT CONTENT */}
            <div className="video-right-content">
              <div className="video-right-top-content">
                <div className="vide-top-right-inner">
                  {/* VIDEO TOP RIGHT CONTENT IMG */}
                  <img className='video-top-right-img'
                    src={VideoBackImg} 
                    alt="video img" 
                    width={547}
                    height={309}/>
                  {/* VIDEO TOP RIGHT CONTENT OLD IMG */}
                    <img className='video-top-right-old-img'
                    src={VideoOldImg} 
                    alt="video img" 
                    width={547}
                    height={309}/>
                  {/* VIDEO TOP RIGHT CONTENT PLAY IMG */}
                    <img className='video-top-right-play-img'
                    src={VideoPlayImg} 
                    alt="video img" 
                    width={85}
                    height={95}/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};