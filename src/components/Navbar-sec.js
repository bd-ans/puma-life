import siteLogo from '../assets/images/logo.svg'; /* import site logo */

export default function NavbarSec() { /* export NavbarSec component */
  return (
    <>
      {/* NAVBAR SECTION */}
      <div className="navbar-section">
        <div className="container">
          {/* NAVBAR */}
          <nav className="navbar">
            <div className="navbar-left-section">
              <div className="navbar-brand">
                {/* site logo */}
                <a href="index.html">
                  <img src={siteLogo}
                    className="navbar-logo"
                    alt="site logo"
                    width={108}
                    height={48}
                  />
                </a>
              </div>
              {/* navbar menu */}
              <div className="navbar-menu">
                <ul className="navbar-menu-list">
                  <li className="navbar-menu-list-item">
                    <a href="#menu" className="navbar-menu-list-item-link">
                      Menu
                    </a>
                  </li>
                  <li className="navbar-menu-list-item">
                    <a href="#about" className="navbar-menu-list-item-link">
                      About
                    </a>
                  </li>
                  <li className="navbar-menu-list-item">
                    <a href="#feature" className="navbar-menu-list-item-link">
                      Feature
                    </a>
                  </li>
                  <li className="navbar-menu-list-item">
                    <a href="#gallary" className="navbar-menu-list-item-link">
                      Gallary
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* navbar buy now button */}
            <button className='navbar-buy-now-btn' type='button'>
              Buy Now
            </button>
          </nav>
        </div>
      </div>
    </>
  )
};