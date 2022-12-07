import NavbarSec from './Navbar-sec'; /* IMPORT NAVBAR SECTION */
import HeroSec from './Hero-sect'; /* IMPORT HERO SECTION */
export default function HeaderSec() { /* EXPORT HEADER SECTION */
  return (
    <>
      <div className="header">
        {/* NAVBAR SECTION */}
        <NavbarSec />
        {/* HERO SECTION */}
        <HeroSec />
      </div>
    </>
  )
};