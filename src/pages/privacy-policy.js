import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"
import PrivacyInner from "assets/images/banners/privacy-inner.svg"
// import SEO from "components/Seo"
// import email from "assets/images/icons/icemail.svg"
import { Link } from "gatsby"

const Layout = loadable(() => import("../components/Layout"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const Privacy = () => (
  // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
  <Layout>
    <SEO
      title="Privacy Policy | MathFactLab"
      description="We take privacy very seriously at MathFactLab, a 100% free, strategy-based math fact program.  Learn more."
      keywords={["Math Fact Families Math Fact Fluency", "Math Facts Lab"]}
      lang="en-us"
      locales={["en-us"]}
    />

    <section className="mfl-spotlightInner-section section-background-3 section privacy-spotlight">
      <div className="circle top">
        <span className="circle-green size-65"></span>
      </div>
      <div className="circle bottom">
        <span className="circle-green size-38"></span>
        <span className="circle-blue size-90"></span>
      </div>
      <div className="container">
        <div className="spotlightInner-content-wrapper">
          <div className="spotlightInner-content">
            <h1 className="spotlightInner-title">Privacy Policy</h1>
          </div>
          <div className="spotlightInner-image">
            <img src={PrivacyInner} alt="PrivacyInner" className="spotlightInner-img" />
          </div>
        </div>
      </div>
    </section>

    <section className="mfl-innerPages-section section">
      <div className="container">
        <h3 className="title">Privacy Policy</h3>
        <div className="contentWrapper">
          <div className="section-title">Welcome to the Privacy Policy for MathFactLab.</div>
          <div className="content-20">
            We recognize the importance of respecting the privacy of those who use our services and visit the website
            (located at www.mathfactlab.com), including all associated webpages and interactive resources (such as user
            profiles, blogs, and forum discussions as applicable) (our services and website are referred to together as
            the “Site”). We are committed to the protection of your Personal Information (as defined in this Privacy
            Policy). This Privacy Policy describes how we may collect and use your information. This Privacy Policy
            applies to your use of the Site, and it should be read together with, and is incorporated into, MathFactLab{" "}
            <Link
              target="_blank"
              href="/terms-of-service/"
              rel="noreferrer"
              className="link-border"
              title="MathFactLab pp1"
            >
              Terms of Service
            </Link>
            . All terms in this Privacy Policy that are defined in the Terms of Service have the meanings ascribed to
            them in the Terms of Service.
          </div>
          <div className="content-20">
            We reserve the right to, at any time and in our sole discretion, add to, change, update, or modify this
            Privacy Policy simply by posting such addition, change, update, or modification (together, "changes") on the
            Privacy Policy and updating the "Last Updated" date. For instance, from time to time we may want to use
            information that you provide to us for new, unanticipated uses not previously addressed in our Privacy
            Policy. If our privacy practices change or if there is a material change in the manner in which we use
            Personal Information, we will update this Privacy Policy to reflect these changes. Any such changes will be
            effective immediately upon posting. Your continued use of the Site will constitute your acceptance of such
            changes. Because this Privacy Policy may change from time to time, it is important that you regularly review
            this Privacy Policy to ensure that you are updated as to any changes. This Privacy Policy, and any posted
            changes to its terms, shall remain in full force and effect while you use the Site.
          </div>
          <div className="content-20">
            Your use of the Site and/or provision of Personal Information to us, via the Site or otherwise (such as by
            email, phone, regular mail, or via our social media pages), constitutes your consent to our use, storage,
            processing, and transfer of that information in accordance with this Privacy Policy. By using the Site, you
            acknowledge and agree that you have read and accepted the terms of this Privacy Policy. Without prejudice to
            the generality of the foregoing, you expressly and unequivocally consent to: (a) the collection and
            processing of your Personal Information by us in accordance with the indicated purposes of this Privacy
            Policy; and (b) the collection and processing of Personal Information on your behalf, as indicated in this
            Privacy Policy.
          </div>
          <div className="contentWrapper">
            <div className="section-title">COLLECTION OF INFORMATION</div>
            <div className="section-title">What is "Personal Information"?</div>
            <div className="content-20">
              "Personal Information" includes any information that enables us to identify you, directly or indirectly,
              by reference to an identifier such as your name, identification number, location data, online identifier,
              or one or more factors specific to you.
            </div>
            <div className="content-20">
              Personal Information includes pseudonymized Personal Information but excludes anonymous information or
              information that has had the identity of an individual permanently removed (“de-identified”). Once
              Personal Information has been de-identified, that information is no longer Personal Information. Personal
              Information may be de-identified through aggregation or various other means. To allow MathFactLab to
              proactively address customer needs, we anticipate using de-identified information to improve our services
              or the Site. We would use reasonable de-identification approaches to ensure that in doing so we are not
              compromising the privacy or security of the Personal Information you entrust to us. We will not attempt to
              re-identify any de-identified data and will not transfer de-identified data to any party unless that party
              agrees not to attempt re-identification.
            </div>
            <div className="content-20">
              The type of information we may collect could include, but is not limited to, your name, email address,
              postal address, phone number, mobile number, credit card information, and other personal, identifying, or
              preference information you choose to provide.
            </div>
          </div>
          <div className="section-title">Consent to Use of Personal Information</div>
          <div className="content-20">
            By accessing or using the Site, you are consenting to have your information, including Personal Information,
            transferred to, processed, and stored in the United States.
          </div>
          <div className="content-20">
            If you are providing Personal Information to us relating to a third party, you confirm that you have the
            necessary consent of the third party to be able to share such Personal Information with us in accordance
            with all applicable laws and regulations and that you have made the information in this Privacy Policy
            available to the third party. If you are a School or Parent providing information about a Child User, see
            the
            <a href="#children_privacy_notice" rel="noreferrer" className="link-border" title="MathFactLab pp2">
              Children’s Privacy Policy
            </a>
            .
          </div>
          <div className="content-20">
            If you choose not to provide us with your Personal Information, you still may visit some of the Site. Please
            note, however, that you may be unable to access certain content on the Site or receive certain services or
            offerings otherwise provided.
          </div>

          <div className="section-title">
            How do we collect Personal Information and what information do we collect?{" "}
          </div>
          <div className="content-20">
            We may collect information about you, including Personal Information, as follows:
          </div>
          <div className="content-20">
            <b>Information You Provide to Us.</b> We collect information you provide directly to us. For example, we
            collect information when you fill out a form, create an account, set up a personal profile, send us an
            email, sign up to receive email updates, create an account, make a purchase or contribution, communicate
            with us via third party social media sites, request information, link to Third Party Social Platforms, or
            otherwise communicate with us. We collect information that you provide when you communicate with us through
            the Site or otherwise (such as by email, phone, regular mail, or via our social media pages). We may collect
            your Personal Information if we monitor the Site.
          </div>
          <div className="content-20">
            <b>Information We Collect Automatically When You Use the Site.</b> When you access or use our Site, we
            automatically collect certain information about you, including:
          </div>

          <div className="mfl-accordions-answer">
            <p className="mfl-bullet-item">
              <b>Log Information:</b> We log information about your use of the Site, including the type of browser you
              use, access times, pages viewed, your IP address, and the page you visited before navigating to the Site.
            </p>
            <p className="mfl-bullet-item">
              <b>Device Information:</b> We may collect information about the computer or mobile device you use to
              access the Site, including the hardware model, operating system and version, device identifiers, and
              mobile network information.
            </p>
            <p className="mfl-bullet-item">
              <b>Information Collected by Cookies and Other Tracking Technologies:</b> We use various technologies to
              collect information, and this may include sending cookies to your computer or mobile device. Cookies are
              small data files stored on your hard drive or in device memory that helps us to improve the Site and your
              experience, see which areas and features of the Site are popular, and count visits. We may also collect
              information using web beacons (also known as “tracking pixels”). Web beacons are electronic images that
              may be used in the Site or emails and help deliver cookies, count visits, understand usage and campaign
              effectiveness, and determine whether an email has been opened and acted upon. For more information about
              cookies and how to disable them, please see “Your Choices” below.
            </p>
          </div>

          <div className="section-title">USE OF INFORMATION</div>
          <div className="section-title">How Do We Use Your Information?</div>

          <div className="content-20">
            We may use information about you, including Personal Information, for our business purposes in accordance
            with the terms of the Privacy Policy in effect at the time of such use, including to:
          </div>

          <div className="mfl-accordions-answer">
            <p className="mfl-bullet-item">Provide, maintain, and improve the Site;</p>
            <p className="mfl-bullet-item">
              Provide and deliver information you request, process contributions and transactions, and send you related
              information, including confirmations and invoices;
            </p>
            <p className="mfl-bullet-item">
              Send you confirmations, technical notices, updates, security alerts, and support and administrative
              messages;
            </p>

            <p className="mfl-bullet-item">Request feedback and otherwise contact you about your use of the Site;</p>
            <p className="mfl-bullet-item">
              Respond to your comments, questions, and requests and provide customer service;
            </p>
            <p className="mfl-bullet-item">
              Send you newsletters and otherwise provide you with information or services you request or that we think
              will be of interest to you, such as sending you information to keep you informed about various issues,
              events, resources, promotions, products, and services;
            </p>

            <p className="mfl-bullet-item">
              Determine your eligibility, including verifying your identity or determining your eligibility for certain
              aspects of the Site, such as promotions, services, products, which may include verification of your age,
              date of birth, and state of residence;
            </p>
            <p className="mfl-bullet-item">
              Communicate with you about this Privacy Policy or the Terms of Service, changes to the Site, feedback
              requests;
            </p>
            <p className="mfl-bullet-item">
              Monitor and analyze trends, usage, and activities in connection with the Site;
            </p>

            <p className="mfl-bullet-item">
              Personalize and improve the Site and provide content, or features that match user profiles or interests;
            </p>
            <p className="mfl-bullet-item">
              Link or combine with information we get from others to help understand your needs and provide you with
              better service;
            </p>
            <p className="mfl-bullet-item">
              Carry out our contractual obligations, including any obligations arising from any agreement entered into
              between you and us, including the Terms of Service;
            </p>

            <p className="mfl-bullet-item">
              Help maintain the safety, security, and integrity of the Site, products, services, databases, technology
              assets, and business assets, and to help prevent and detect fraud;
            </p>
            <p className="mfl-bullet-item">
              Administer and protect our business and the Site, including troubleshooting, data analysis, testing,
              system maintenance, support, reporting and hosting of data, protecting and enforcing our legal rights,
              protecting our company;
            </p>
            <p className="mfl-bullet-item">
              Comply with all applicable laws or legal processes, including providing information on individual users to
              the appropriate governmental authorities where required by law enforcement or judicial authorities;
              responding to law enforcement requests and as required by applicable law, court order, or governmental
              regulations;
            </p>

            <p className="mfl-bullet-item">
              Carry out any other permissible purpose for which the information was collected;
            </p>
            <p className="mfl-bullet-item">As otherwise permitted by law or as we may notify you</p>
          </div>

          <div className="content-20">
            We may use aggregated, anonymous data we collect about Site use for the following purposes:
          </div>
          <div className="mfl-accordions-answer">
            <p className="mfl-bullet-item">For Site administration and updating;</p>
            <p className="mfl-bullet-item">
              To perform statistical analyses of the collective characteristics and behavior of visitors to the Site;
            </p>
            <p className="mfl-bullet-item">
              To measure user interests regarding specific areas of the Site, including content;
            </p>
            <p className="mfl-bullet-item">To analyze how and where best to use our resources.</p>
          </div>
          <div className="content-20">
            Without such data, we would not know which parts of the Site are the most popular, and we would not be able
            to change and update the Site and content appropriately.
          </div>
          <div className="section-title">How May Your Information Be Shared with Third Parties?</div>

          <div className="content-20">
            We allow you to make informed choices about who has access to your information. We do not provide contact
            information or share Personal Information to third party marketers. Personal Information collected through
            the Site generally is collected and maintained solely by us or our contracted vendors.
          </div>

          <div className="content-20">We may share Personal Information in the following ways:</div>

          <div className="mfl-accordions-answer">
            <p className="mfl-bullet-item">
              With third-party service providers, vendors, consultants, and volunteers (together, “service providers”)
              engaged to assist us in providing the Site, including the content, to you or to carry out one or more of
              the purposes described above or in the Terms of Service. These service providers are not permitted to use
              your Personal Information for any purpose other than to provide this assistance. When we use such service
              providers, we provide limited access to your information so that such service providers can perform the
              tasks on our behalf;
            </p>
            <p className="mfl-bullet-item">
              With business advisors, such as accountants and lawyers, who assist us in carrying out our business
              activities;
            </p>
            <p className="mfl-bullet-item">
              In response to a request for information (such as a subpoena, warrant, or other court order) if we believe
              disclosure is in accordance with any applicable law, regulation, or legal process, or as otherwise
              required by any applicable law, rule, or regulation, or to respond to an emergency situation;
            </p>

            <p className="mfl-bullet-item">
              If we believe your actions are inconsistent with the spirit or language of the Terms of Service, any user
              agreements or policies, or to protect the rights, property, or safety of our company, our employees,
              volunteers, or others persons associated with us;
            </p>
            <p className="mfl-bullet-item">
              In connection with, or during negotiations of, any reorganization, formation of new organization, asset
              sale or transfer, financing or lending transaction, or in any other situation where Personal Information
              may be disclosed or transferred as one of the assets of our company;
            </p>
            <p className="mfl-bullet-item">
              With a third party if we have reason to believe that disclosing Personal Information is necessary to
              identify, contact, or bring legal action against someone who may be causing injury to or interference with
              (either intentionally or unintentionally) our rights or property, other Site users, or anyone else who
              could be harmed by such activities;
            </p>

            <p className="mfl-bullet-item">
              With governmental agencies or other companies assisting us in fraud prevention or investigation. We may do
              so when: (1) permitted or required by law; or, (2) trying to protect against or prevent actual or
              potential fraud or unauthorized transactions; or, (3) investigating fraud that has already taken place.
              The information is not provided to these companies for marketing purposes;
            </p>
            <p className="mfl-bullet-item">
              With your consent or at your direction, including if we notify you through the Site that the information
              you provide will be shared in a particular manner and you provide such information.
            </p>
          </div>

          <div className="content-20">
            <b>De-identified or Aggregated information.</b> We may share statistical, de-identified, or aggregated
            non-Personal Information about our users with business partners, affiliates, sponsors, and/or other third
            parties, including but not limited to Google Analytics. Such data may be used to customize our website
            content to deliver a better experience to our Users. You may opt out from Google Analytics implementations
            and features that we use (see the “Your Choices” section of this Privacy Policy).{" "}
          </div>
          <div className="content-20">
            <b>Social Sharing Features.</b> The Site may offer social sharing features and other integrated tools (such
            as the Facebook “Like” button), which let you share actions you take on the Site with other media, and vice
            versa. The use of such features may enable the sharing of information with your friends or the public,
            depending on the settings you establish with the entity providing the social sharing feature. For more
            information about the purpose and scope of data collection and processing in connection with social sharing
            features, please visit the privacy policies of the entities that provide these features.
          </div>

          {/* section */}

          <div className="section-title">ANALYTICS SERVICES PROVIDED BY OTHERS</div>

          <div className="content-20">
            We do not have third-party advertising on the Site, and we will not provide your Personal Information to any
            third parties for marketing purposes.
          </div>
          <div className="content-20">
            We may allow third parties to use cookies or other technologies to provide analytics services and to serve
            ads on other websites based on your visits to this site and other sites across the Internet. These entities
            may collect information about your use of the Site and other websites, including your IP address, web
            browser, pages viewed, time spent on pages, links clicked, and conversion information. This information may
            be used by us and others to, among other things, analyze and track data, determine the popularity of certain
            content, and better understand your online activity.
          </div>
          <div className="content-20">
            For example, we may use remarketing with Google Analytics or other remarketing tools to advertise our
            services online. This enables third-party vendors, including Google, to show our ads on sites across the
            Internet. Such third-party vendors, including Google, may use first-party cookies (such as the Google
            Analytics cookie) and third-party cookies (such as the DoubleClick cookie) together to inform, optimize, and
            serve ads based on your past visits to our website. For information on how you can opt out of Google’s use
            of cookies for interest-based ads please visit Google’s{" "}
            <a
              target="_blank"
              href="https://www.google.com/url?q=http://www.google.com/ads/preferences/&sa=D&source=docs&ust=1656933051447539&usg=AOvVaw3rVmi8wW3-uE2GAP3Z8V1C"
              rel="noreferrer"
              className="link-border"
              title="MathFactLab pp3"
            >
              {" "}
              Ads Settings.
            </a>
          </div>
          <div className="content-20">
            For more information about Internet-based ads, or to opt out of having your web browsing information used
            for behavioral advertising purposes, please visit{" "}
            <a
              target="_blank"
              href="https://thenai.org/opt-out/"
              className="link-border"
              title="MathFactLab pp4"
              rel="noreferrer"
            >
              {" "}
              www.networkadvertising.org/managing/opt_out.asp
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://optout.aboutads.info/"
              className="link-border"
              title="MathFactLab pp5"
              rel="noreferrer"
            >
              www.aboutads.info/choices.
            </a>
          </div>

          {/* security */}
          <div className="section-title">SECURITY</div>

          <div className="content-20">
            The Site uses security measures at least equal to those reasonably expected in the industry, to protect
            against the loss, misuse, and alteration of your Personal Information under our control. These measures
            include commercially reasonable industry-standard physical, administrative, and technological methods to
            protect your Personal Information.
          </div>
          <div className="content-20">
            We cannot guarantee that unauthorized third parties will never be able to defeat our security measures or
            use your Personal Information for improper purposes. In the event that any information under our control is
            compromised as a result of a breach of security, we will take commercially reasonable steps to investigate
            the situation and, where appropriate, notify those individuals whose information may have been compromised
            and take other steps, in accordance with any applicable laws and regulations.
          </div>
          <div className="content-20">
            Please keep in mind that you are responsible for the security of any Personal Information in your control.
          </div>

          {/* your choices */}

          <div className="section-title">YOUR CHOICES</div>

          <div className="content-20">
            <b>Cookies.</b> Most web browsers are set to accept cookies by default. If you prefer, you may be able to
            set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject
            cookies, this could affect the availability and functionality of the Site.
          </div>
          <div className="content-20">
            <b>Promotional Communications..</b>You may opt out of receiving updates and newsletters from us by following
            the instructions in those emails or by emailing us at the information provided in the Contact Us section
            below. If you opt out, we may still send you other types of emails, such as those about your use of the Site
            or any transactions.
          </div>
          <div className="content-20">
            <b>Your Personal Information.</b>. If you believe any of the Personal Information that we have is incomplete
            or inaccurate, you may request that we correct your record. To make this request, please contact as provided
            in the Contact Us section below.
          </div>
          <div className="content-20">
            Please note that after your information is deleted, backup copies may linger for some time before they are
            deleted, and we may retain certain data for a longer period of time if we are required to do so for legal
            reasons.
          </div>

          {/* third party links */}

          <div className="section-title">THIRD-PARTY LINKS</div>

          <div className="content-20">
            The Site may contain links to third party websites. As provided in the Terms of Service, those websites are
            not controlled by us and we are not responsible for the content of any such website. We are not responsible
            for the privacy practices of other websites. We encourage our users to be aware of when they leave the Site
            and to read the privacy policies of each and every website that collects Personal Information. This Privacy
            Policy applies solely to information collected by us through the Site.
          </div>

          {/* conflict in terms */}

          <div className="section-title">CONFLICT IN TERMS</div>

          <div className="content-20" id="children_privacy_notice">
            Some browsers utilize privacy enhancing technology to translate our Privacy Policy into a computer readable
            format and then translate it back into human readable format for you to read. This translation back into
            human readable format is often referred to as a "Policy Summary." To the extent that this Policy Summary is
            inconsistent with, fails to address, or addresses an issue not raised in our Privacy Policy, you should rely
            on our Privacy Policy as it is the controlling authority.
          </div>

          {/* children privacy notice */}

          <div className="section-title">CHILDREN’S PRIVACY NOTICE</div>

          <div className="content-20">
            MathFactLab is committed to protecting the privacy of children who use the Site. This section of our Privacy
            Policy explains our information collection, disclosure, and parental consent practices with respect to
            information provided by children, and uses terms that are defined elsewhere in this Privacy Policy. This
            section of our Privacy Policy outlines our practices in the United States regarding children’s Personal
            Information.
          </div>

          <div className="content-20">
            <b>COPPA and Children Under the Age of 13.</b> The Children’s Online Privacy Protection Act (COPPA) is a
            federal law designed to protect the privacy of individuals under 13 years old (“child” or “children”).
            MathFactLab’s Site complies with COPPA.
          </div>
          <div className="content-20">
            MathFactLab does not knowingly permit children under the age of 13 (“Child User”) to create MathFactLab
            accounts, but we do permit Child Users to use accounts created for them by schools/school districts
            (“School”) and parents/legal guardians (“Parent”). If we learn that Personal Information of a Child User has
            been collected on our Site without Parent or School consent, we will take appropriate steps to delete this
            information. If you are a Parent and discover that your child under the age of 13 has an account with
            MathLabFact without consent, please contact us as provided in the “Contact Us” section and request that we
            delete that child’s personal information from our systems.
          </div>

          <div className="content-20">
            <b>Accounts for Child Users. </b> Accounts for Child Users may be created in one of the following ways:
          </div>

          <div className="mfl-accordions-answer">
            <p className="mfl-bullet-item">
              <b>Account Created by Parent.</b> When a Parent creates an account for a Child User, we request a
              username, password, and a Parent’s email address. We do not ask for more information than is necessary to
              provide the Site to the Child User. The Parent must provide Parental consent for the Child User to use the
              Site when creating the Child User’s account.
            </p>
            <p className="mfl-bullet-item">
              <b>Device Information:</b> We may collect information about the computer or mobile device you use to
              access the Site, including the hardware model, operating system and version, device identifiers, and
              mobile network information.
            </p>
            <p className="mfl-bullet-item">
              <b>Account Created by School.</b> When a School uses the Site in an educational setting, we permit the
              School to create Child User accounts and to provide the required consent on behalf of the Child User’s
              Parent for MathFactLab to collect Personal Information of a Child User for this purpose. When a School
              creates a Child User account, we rely on the consent provided to us by the School and do not require
              additional consent from the Parent.
            </p>
          </div>

          <div className="section-title">Child User Accounts Created by Schools/Districts. </div>
          <div className="content-20">
            The Family Educational Rights and Privacy Act (FERPA) requires that educational institutions and agencies
            that receive certain federal funds (for example, public schools) get prior consent from a parent or legal
            guardian before disclosing any education records regarding that student to a third party. Consequently,
            before a school/district enters, uploads, or accesses any data concerning a minor student, the
            school/district must confirm that it has (1) obtained appropriate consent from the parent or guardian of
            that student, or (2) determined that one of the limited exceptions to the consent requirement applies.
          </div>
          <div className="content-20">
            Each school is responsible for creating student accounts for the Site. For example, schools may choose to
            list students’ full names, grade level, and ID number in the record for each user. Entering data in these
            fields is optional and is intended for administrative purposes only. The schoolwide data collected by
            MathFactLab may include the school’s address, grade levels, and other aggregate information about the
            school’s internet connection, computers, and the likelihood of students having devices such as smartphones
            or tablets.
          </div>

          <div className="section-title">Information We May Collect from Child Users and How We May Use It </div>
          <div className="content-20">
            The Site may include a range of materials and information, some of which are targeted primarily at Child
            Users, and others that are intended for users of all ages. The Site may include activities that may collect
            information from Child Users.
          </div>
          <div className="content-20">
            In any instance when we collect Personal Information from a Child User, we will retain that information for
            only as long as reasonably necessary to fulfill the activity request, to allow the Child User to continue to
            participate in the activity, to ensure the security of our users and the Site, and as required by law. In
            the event we discover we have collected information from a Child User in a manner inconsistent with COPPA,
            we will either delete the information or immediately seek the Parent’s or School’s consent for that
            collection. Any retained data will remain subject to the restrictions on disclosure and use outlined in this
            Privacy Policy for as long as it resides with us.
          </div>

          <div className="content-20">
            <b>Collection of Information.</b> MathFactLab may collect usernames, passwords, Parent’s email
            addresses/School-related email addresses when an account is created by a Parent or School for a Child User,
            as well as any other Personal Information a Parent or School adds to a Child User’s account. We may collect
            information about the Child User’s use of the Site, and we may collect usage and device information, as
            described in the “Collection of Information” section of this{" "}
            <Link
              target="_blank"
              href="/privacy-policy/"
              rel="noreferrer"
              className="link-border"
              title="MathFactLab pp6"
            >
              Privacy Policy
            </Link>
            .
          </div>
          <div className="content-20">
            <b>Persistent Identifiers.</b> Persistent Identifiers. When Child Users interact with us, certain
            information may automatically be collected, both to make the Site more interesting and useful to Child Users
            and for various purposes related to our business purposes. Examples include the type of computer operating
            system, the Child User’s IP address, the web browser, the frequency with which the Child User visits various
            parts of our sites or applications, and information regarding the online or mobile service provider. This
            information is collected using technologies such as cookies, web beacons, and other unique identifiers. This
            information may be collected by MathFactLab or by a third party. This data is principally used for internal
            purposes only, in order to: provide Child Users with access to features and activities on the Site;
            customize content and improve the Site; conduct research and analysis to address the performance of the
            Site; generate anonymous reporting for use by MathFactLab. In the event we collect (or allow others to
            collect) such information from Child Users on the Site for other purposes, we will notify Parents and
            Schools and obtain consent prior to such collection.
          </div>
          <div className="content-20">
            <b>Use of Child User Personal Information.</b> MathFactLab may use Personal Information from Child Users to
            enable their use of the Site. We use this information to provide the Site and for the purposes described in
            the “Use of Information” section of this{" "}
            <Link
              target="_blank"
              href="/privacy-policy/"
              rel="noreferrer"
              className="link-border"
              title="MathFactLab pp7"
            >
              Privacy Policy
            </Link>
            . We use the Parent’s email address and School-related email address to communicate messages about the Child
            User’s account. Unless a School or Parent expressly instructs otherwise, we will not share or reuse Child
            User Personal Information for any other purpose except for business purposes, as described in the “Use of
            Information” section of this Privacy Policy.
          </div>
          <div className="content-20">
            <b>No Targeted Advertising.</b>MathFactLab does not display any targeted advertising on the Site. We do not
            disclose Child User Personal Information for direct marketing purposes or for targeted advertising purposes.
          </div>

          <div className="section-title">How to access, modify, and delete Child User Accounts. </div>

          <div className="mfl-accordions-answer">
            <p className="mfl-bullet-item">
              <b>Accounts created by Parent.</b> To access or delete a Child User’s account, please contact us as
              provided in the “Contact Us” section below. Please note that you will need the Child User’s username, and
              we may take steps to authenticate your identity before we respond to your request.
            </p>
            <p className="mfl-bullet-item">
              <b>Accounts created by School.</b> If a School creates a Child User account, you will need to direct your
              request to the School.
            </p>
          </div>
          <div className="content-20">
            Any other inquiries may be directed as provided in the Contact Us section below. Note that we may take steps
            to authenticate your identity before we take action on your request.
          </div>

          {/* notice to user outside US */}

          <div className="section-title">NOTICE TO USERS OUTSIDE THE UNITED STATES </div>
          <div className="content-20">
            If you are a user located outside of the United States, be advised that any information you enter on the
            Site may be transferred outside of your country (including but not limited to the European Union) to the
            United States of America, which may not offer an equivalent level of protection to that required in your
            country. In particular, you are advised that the United States of America uses a sectoral model of privacy
            protection that relies on a mix of legislation, governmental regulation, and self-regulation.
            <b>
              {" "}
              By using the Site, you unambiguously consent to the transfer of all such information to the United States
              of America, which may not offer an equivalent level of protection to that required in your country, and to
              the processing of that information by us on our servers located in the United States.
            </b>
          </div>
          <div className="content-20">
            <b>Storage of Information.</b> Personal information we maintain may be stored in or outside of the United
            States. If you live outside of the United States, you understand and agree that we may transfer your
            Personal Information to the United States.{" "}
          </div>

          <div className="section-title">STATE SPECIFIC DISCLOSURES </div>
          <div className="content-20">
            We may choose or be required by law to provide different or additional disclosures relating to the
            processing of Personal Information about residents of certain states. Please see below for disclosures that
            may be applicable to you:
          </div>
          <div className="content-20">
            <b>California Consumer Protection Act.</b>MathFactLab currently is not subject to the California Consumer
            Protection Act of 2018, as amended (the CCPA). We recognize the importance of respecting the privacy of
            those who visit the Site, and many of our privacy practices align with the requirements of the CCPA.
          </div>

          {/* contact information */}

          <div className="section-title">CONTACT INFORMATION</div>
          <div className="content-20">
            To change your Personal Information or preferences (such as to modify your Personal Information, opt out of
            or change your preferences regarding receiving communications or information), and for legal matters,
            including notices of violation of this Privacy Policy:
          </div>

          <div className="content-20 ml-24">
            <b>Email us at:</b>{" "}
            <a href="mailto:contact@mathfactlab.com" className="link" title="MathFactLab pp mail" rel="canonical">
              contact@mathfactlab.com
            </a>
            <br />
            <b> Write us at:</b> Oakledge Mathematics Consulting, LLC, 300 Redrock Drive, Burlington, VT 05401
          </div>

          <div className="content-20">
            When you contact us, provide your name and address exactly as it appears on correspondence you have received
            from us.
          </div>
          <div className="content-20">
            In any correspondence to us related to a Child User, please include the child’s username and the Parent
            email address or School email address.
            <div className="content-20">
              You are entitled to make an anonymous complaint or inquiry in relation to this Privacy Policy or your
              privacy rights; however, we may require you to identify yourself if required by law or it is impracticable
              for us to address your matter otherwise.
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  // </Suspense>
)

export default Privacy
