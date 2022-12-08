export default function ChouseSec() { /* EXPORT DEFAULT CHOUSE SECTION */
  return (
    <>
      {/* CHOUSE SECTION */}
      <div id="chouse-section" className="chouse-section">
        <form className="chouse-box" action="https://echo.htmlacademy.ru" method="POST">
          {/* CHOUSE BRAND BOX */}
          <div className="chouse-brand-box">
            <div className="chouse-brand">

              <div className="chouse-brand-txt-box">
                <h2 className="chouse-brand-txt">Brand</h2>
              </div>

              <div className="chouse-brand-select-box">
                <select className='chouse-brand-select' name="brand">
                  <option value="Puma">Puma</option>
                  <option value="Adidas">Adidas</option>
                </select>
              </div>
            </div>
            <div className='chouse-right-line'></div>
          </div>
          {/* CHOUSE PERSON BOX */}
          <div className="chouse-person-box">
            <div className="chouse-person">

              <div className="chouse-person-txt-box">
                <h2 className="chouse-person-txt">Person</h2>
              </div>

              <div className="chouse-person-select-box">
                <select className='chouse-person-select' name="person">
                  <option value="man">man</option>
                  <option value="woman">woman</option>
                </select>
              </div>
            </div>
            <div className='chouse-right-line'></div>
          </div>
          {/* CHOUSE SIZE BOX */}
          <div className="chouse-size-box">
            <div className="chouse-size">

              <div className="chouse-size-txt-box">
                <h2 className="chouse-size-txt">Size</h2>
              </div>

              <div className="chouse-size-select-box">
                <select className='chouse-size-select' name="size">
                  <option value="large">large</option>
                  <option value="medium">medium</option>
                </select>
              </div>
            </div>
            <div className='chouse-right-line'></div>
          </div>
          {/* CHOUSE PRICE BOX */}
          <div className="chouse-price-box">
            <div className="chouse-price">

              <div className="chouse-price-txt-box">
                <h2 className="chouse-price-txt">Price</h2>
              </div>

              <div className="chouse-price-select-box">
                <select className='chouse-price-select' name="price">
                  <option value="$150">$150</option>
                  <option value="$280">$280</option>
                </select>
              </div>
            </div>
            <button type="submit" className='chouse-buy-now-btn'>
              Buy Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};