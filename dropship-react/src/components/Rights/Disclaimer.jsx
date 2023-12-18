import React from "react"
import { Link } from "react-router-dom"

function Disclaimer() {
  return (
    <main className="body-rights">
      <div className="page-container">
        <div className="first-paragraph">
          <h3 className="disclaimer">Disclaimer</h3>
          <p>Disclaimer for Click & Ship</p>
          <p>Last updated: 10.19.2023</p>
          <p>
            The information provided by Click & Ship ("we," "us," or "our") on{" "}
            <Link to="http://localhost:3000/" className="link-style">
              http://localhost:3000
            </Link>{" "}
            is for general informational purposes only. All information on the
            website is provided in good faith, however, we make no
            representation or warranty of any kind, express or implied,
            regarding the accuracy, adequacy, validity, reliability,
            availability, or completeness of any information on the website.
          </p>

          <p>
            Under no circumstance shall we have any liability to you for any
            loss or damage of any kind incurred as a result of the use of the
            website or reliance on any information provided on the website. Your
            use of the website and your reliance on any information on the
            website is solely at your own risk.
          </p>

          <p>
            The website may contain links to external websites that are not
            provided or maintained by or in any way affiliated with Click &
            Ship. Please note that we do not guarantee the accuracy, relevance,
            timeliness, or completeness of any information on these external
            websites.
          </p>
        </div>

        <div className="second paragraph">
          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>
        </div>

        <div className="third paragraph">
          <h2>Update</h2>
          <p>
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Disclaimer;
