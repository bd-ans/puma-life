import HeaderSec from './components/Header-sec'; /* IMPORT HEADER SECTION */
import FooterSec from './components/Footer-sec'; /* IMPORT FOOTER SECTION */
import VideoSec from './components/Video-sec'; /* IMPORT VIDEO SECTION */
import FeatureSec from './components/Feature-sec'; /* IMPORT FEATURE SECTION */
import GallarySec from './components/Gallary-sec'; /* IMPORT GALLARY SECTION */
import TestimonialsSec from './components/Testimonials-sec'; /* IMPORT GALLARY SECTION */
function App() { /* EXPORT APP */
  return (
    <>
      {/* HEADER SECTION */}
      <HeaderSec />
      {/* VIDEO SECTION */}
      <VideoSec />
      {/* FEATURE SECTION */}
      <FeatureSec />
      {/* GALLARY SECTION */}
      <GallarySec />
      {/* TESTIMONIALS SECTION */}
      <TestimonialsSec />
      {/* FOOTER SECTION */}
      <FooterSec />
    </>
  );
}

export default App;