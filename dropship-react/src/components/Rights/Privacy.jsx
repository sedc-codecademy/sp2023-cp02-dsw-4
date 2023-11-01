import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <main className="body-rights">
      <div className="page-container">
        <div className="rights-header">
          <h1 className="title">
            <span>privacy</span>
            <span>policy</span>
          </h1>
        </div>

        <div className="first-paragraph">
          <p>At <Link to="http://localhost:3000/" className="link-style">Click & Ship </Link> 
            (hereinafter, "we," "us," "our"), we prioritize the protection and
            security of your personal information. We understand the
            significance of maintaining the confidentiality of the data you
            entrust to us and are dedicated to ensuring that your privacy is
            safeguarded throughout your interactions with our services. This
            Privacy Policy delineates the ways in which we collect, use, and
            safeguard your personal information when you engage with our
            platform. By accessing and using our website, you express your
            consent to the practices detailed in this policy, indicating your
            understanding of and agreement to our data handling practices.
            Please take the time to review this document to comprehend how we
            manage and protect your information.
          </p>

          <p>
            This Privacy Policy, together with the Terms and conditions poster
            on our Website, set forth the general rules and policies governing
            your use of our Website. Depending on your activities when visiting
            our Website, you may be required to agree to additional terms and
            conditions.
          </p>
        </div>

        <div className="information-header">
          <h3>Information We Collect</h3>
        </div>

        <div className="second paragraph">
          <h4>1. Personal information: </h4>
          <p>
            When you place an order on our website, we collect information such
            as your name, shipping address, email address, and phone number to
            process and fulfill your order.
          </p>

          <h4>2. Payment information: </h4>
          <p>
            We collect payment information, including credit card details or
            other payment methods when you make a purchase. However, we do not
            store your payment information, and all transactions are processed
            securely through third-party payment processors.
          </p>

          <h4>3. Communication Data</h4>
          <p>
            We collect information when you contact us, including your email
            address or other contact details, and the content of your
            communication.
          </p>

          <h4>4. Technical Information:</h4>
          <p>
            We may collect technical data such as your IP address, browser type,
            device information, and cookies to improve your browsing experience
            and analyze our website's performance.
          </p>
        </div>

        <div className="information-header">
          <h3>Disclosure of Your Information</h3>
        </div>

        <div className="third paragraph">
          <p>
            We do not sell, rent, or trade your personal information to third
            parties. However, we may share your information with the following
            entities under certain circumstances:
          </p>

          <h4>Third-Party Service Providers:</h4>
          <p>
            We may share your information with third-party service providers who
            assist us in providing services like shipping, payment processing,
            or website hosting.
          </p>

          <h4>Cookies</h4>
          <p>
            We use cookies to enhance your experience on our website. By using
            our website, you consent to the use of cookies in accordance with
            our Cookie Policy.
          </p>

          <h4>Security</h4>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, and destruction.
            However, no data transmission over the internet can be entirely
            secure, and we cannot guarantee the security of your information.
          </p>
        </div>

        <div className="fourth paragraph">
          <h4>Your Rights</h4>
          <p>
            You have the following rights regarding your personal information:
          </p>
          <ul>
            <li>The right to access the personal data we hold about you.</li>
            <li>The right to correct inaccurate information.</li>
            <li>The right to have your information erased.</li>
            <li>The right to restrict the processing of your data.</li>
            <li>The right to object to the processing of your data.</li>
            <li>The right to data portability.</li>
          </ul>

          <h4>Contact Us</h4>
          <p>
            If you have any questions, concerns, or requests related to this
            Privacy Policy, please contact us at:
          </p>
          <p>DIME NE ZNAM KOE CONTACT INFO DA GO STAVAM TUKA</p>
        </div>

        <div className="fifth paragraph">
          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our
            practices or for legal compliance. We encourage you to review this
            policy periodically.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Privacy;
