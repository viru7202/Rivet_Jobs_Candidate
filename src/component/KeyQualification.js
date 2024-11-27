import Navbar from "./Navbar";

function KeyQualification() {
  return (
    <div>
      <Navbar />
        <div className="add-job-img">
          <img src="assets/img/hero-image.png" alt="" />
        </div>
        <div className="main-box-editprofile" style={{border:'none',padding:'0 0'}}>
        <div className="detail_text-key-qualify-top">
          <p>
            <span>
              Find the best candidates by telling us which Language / Skills /
              Driving license are a must have.
            </span>
          </p>
          <p>
            Let us know how important they are so that we can reach the right
            jobseekers.
          </p>
        </div>

        <div className="content-key-qualify">
          <div className="content-key-qualify-text-tp">
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>Language</p>
              </div>
              <div className="lang-english">
                <p>English</p>
              </div>
              <div className="lang-english">
                <p>Hindi</p>
              </div>
            </div>
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>( Preferred )</p>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
            </div>
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>( Must-have )</p>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
            </div>
          </div>
          <div className="border-1"></div>
          <div className="content-key-qualify-text-tp">
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>Skills</p>
              </div>
              <div className="lang-english">
                <p>Medical terminology </p>
              </div>
              <div className="lang-english">
                <p>Senior care</p>
              </div>
              <div className="lang-english">
                <p>Care home</p>
              </div>
            </div>
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>( Preferred )</p>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
            </div>
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>( Must-have )</p>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
            </div>
          </div>
          <div className="border-1"></div>
          <div className="content-key-qualify-text-tp">
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>License</p>
              </div>
              <div className="lang-english">
                <p>Driving license</p>
              </div>
            </div>
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>( Preferred )</p>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
            </div>
            <div className="language-key-qulify-top">
              <div className="lang-1-key">
                <p>( Must-have )</p>
              </div>
              <div className="language-inpt-radio">
                <input type="radio"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonss">
            <div className="back-btn">Back</div>
            <div className="back-btn">Preview</div>
            <div className="back-btn">Conform</div>
          </div>
        
      </div>
    </div>
  );
}

export default KeyQualification;
