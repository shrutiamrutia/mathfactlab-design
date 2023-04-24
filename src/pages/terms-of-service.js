import React from "react"
import loadable from "@loadable/component"
// import Layout from "components/Layout"
import TermsInner from "assets/images/banners/terms-inner.svg"
// import SEO from "components/Seo"
import { Link } from "gatsby"

const Layout = loadable(() => import("../components/Layout"))
const SEO = loadable(() => import("../components/Seo"))

// const Layout = lazy(() => import("../components/Layout"))

const Terms = () => (
  // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
  <Layout>
    <SEO
      title="Terms of Service | MathFactLab"
      description="Learn about our terms of service at MathFactLab, a strategy-based math fact fluency website."
      keywords={["Math Fact Families Math Fact Fluency", "Math Facts Lab"]}
      lang="en-us"
      locales={["en-us"]}
      robots="index, follow"
    />

    <section className="mfl-spotlightInner-section section-background-3 section">
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
            <h1 className="spotlightInner-title">Terms of Service</h1>
          </div>
          <div className="spotlightInner-image">
            <img src={TermsInner} alt="TermsInner" className="spotlightInner-img" />
          </div>
        </div>
      </div>
    </section>

    <section className="mfl-innerPages-section section">
      <div className="container">
        <h3 className="title">Terms of Service</h3>
        <div className="contentWrapper">
          {/* welcome */}
          <div className="section-title">Welcome to Terms of Service for MathFactLab.</div>
          <div className="content-20">
            These Terms of Service govern all use of MathFactLab services and website located at www.mathfactlab.com,
            including all associated webpages and interactive resources (such as user profiles, blogs, and forum
            discussions as applicable) (our services and website are referred to together as the “Site”). The Site is
            created and operated by Oakledge Mathematics Consulting, LLC doing business as MathFactLab (“MathFactLab,”
            “we,” “us,” or “our”). Please read these Terms of Service carefully as they contain important information
            regarding your legal rights and obligations.
          </div>
          {/* scope */}

          <div className="section-title">Scope of these Terms of Service.</div>
          <div className="content-20">
            By using the Site, you agree to be bound by and comply with the terms and conditions in these Terms of
            Service. We reserve the right to modify, add to, or delete from these Terms of Service at our sole
            discretion at any time by posting a revised version of these Terms of Service on this page. Each version of
            these Terms of Service will indicate at the top of this page the date the Terms of Service were last
            revised. Your continued use of the Site after any revised version of these Terms of Service is posted
            constitutes your acceptance of the revised Terms of Service. Because these Terms of Service may change from
            time to time, it is important that you regularly review these Terms of Service to ensure that you are
            updated as to any changes. These Terms of Service, including any posted revisions, shall remain in full
            force and effect while you use the Site.
          </div>
          <div className="content-20">
            PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING THE SITE. If you do not understand these or any
            future Terms of Service or if you do not or cannot agree to these or any future Terms of Service, do not use
            (or continue to use) the Site.
          </div>
          <div className="content-20">
            When we refer to the "use" of the Site, we mean any actual or attempted access to or use of the Site,
            including, without limitation, any access to, transmission with, exchange of information with, use of, or
            communication associated with the Site. As used in these Terms of Service, a “user” is anyone who uses the
            Site.
          </div>
          <div className="content-20">
            The terms and conditions in these Terms of Service, together with any other policies, rules, or provisions
            that are described, linked, or otherwise referred to and form a part of these Terms of Service, including,
            without limitation the{" "}
            <Link
              target="_blank"
              href="/privacy-policy/"
              rel="noreferrer"
              className="link-border"
              title="MathFactLab ts1"
            >
              Privacy Policy
            </Link>
            , constitute the entire agreement between you and us, superseding any and all prior or inconsistent
            understandings, representations, or agreements regarding the Site.
          </div>
          <div className="content-20">
            If any new aspects or components of the Site become available, they will be considered a part of the Site,
            and your use of them will be governed by these Terms of Service unless we notify you that different terms
            and conditions apply. You must comply with any additional terms that apply to third-party content, material,
            information, software, or other services.
          </div>

          {/* account  */}
          <div className="section-title">Account Information, User Name, IDs. </div>
          <div className="content-20">
            You must provide valid and accurate account information (together, “Account Information”), and you must keep
            your Account Information up to date, particularly your email and mailing addresses.
          </div>
          <div className="content-20">
            You are not permitted to transfer your account to anyone without first getting our written permission.
          </div>
          <div className="content-20">
            If you select a username that infringes the rights of a third party (such as when a trademark owner
            complains), we reserve the right to remove or reclaim it if we believe it appropriate.
          </div>
          <div className="content-20">
            Your email, password, and any additional codes or passwords are collectively referred to herein as "IDs.”
            Your IDs are personal to you. You agree that you will not allow another person to use your IDs to access and
            use the Site under any circumstances. You agree that you will be solely responsible to us for all activities
            that occur under your account. If you become aware of any unauthorized use of your IDs, you agree to notify
            us immediately by contacting us as provided in the Contact Us section below. You are solely responsible for
            maintaining the strict confidentiality of your IDs and for any charges, damages, liabilities, or losses
            incurred or suffered as a result of your failure to do so. We are not liable for any harm caused by or
            related to the theft of your IDs, your disclosure of your IDs, or your authorization to allow another
            person(s) to access and use the Site using your IDs. You agree to immediately notify us if you become aware
            of any unauthorized use of your IDs or other need to deactivate an ID due to security concerns.
          </div>
          <div className="content-20">
            We have no liability for, and you bear the sole and exclusive risk associated with, use of or reliance on
            the accuracy, quality, completeness, reliability, or usefulness of any data, information, or material in
            connection with any of your IDs.
          </div>

          {/* rules */}
          <div className="section-title">Rules of Engagement. </div>
          <div className="content-20">
            We do our best to keep the Site a safe and welcoming space, but we cannot guarantee it. We need your help to
            make this happen. You agree to use the Site solely for lawful purposes, in compliance with all applicable
            laws. By way of example and not as a limitation, you agree that, when using the Site, you will not:
          </div>

          <div className="mfl-accordions-answer">
            <ol className="mfl-bullet-list">
              <li className="mfl-bullet-list-item">
                Send or otherwise post unauthorized commercial communications (such as spam).
              </li>
              <li className="mfl-bullet-list-item">
                Advertise or offer to sell or buy any goods or services for any business purpose.{" "}
              </li>
              <li className="mfl-bullet-list-item">
                Solicit for any open jobs or positions, either temporary or permanent, or make any other type of
                solicitation that we in our sole discretion deem to be inappropriate.
              </li>
              <li className="mfl-bullet-list-item">Level D: Doubles</li>
              <li className="mfl-bullet-list-item">
                Engage in political campaigning, recruiting votes, or soliciting support for legislative or other
                initiatives,
              </li>
              <li className="mfl-bullet-list-item">
                Collect users' content or information, or otherwise access the Site, using automated means (such as
                harvesting bots, robots, spiders, or scrapers) without our permission.
              </li>
              <li className="mfl-bullet-list-item">
                Engage in unlawful multi-level marketing, such as a pyramid scheme or chain letters.
              </li>
              <li className="mfl-bullet-list-item">
                Upload files that contain viruses, corrupted files, malicious code, or other similar software or
                programs that may damage the operation of another’s computer.
              </li>
              <li className="mfl-bullet-list-item">
                Upload files that contain software or other material protected by intellectual property laws (or by
                rights of privacy or publicity) unless you own or control the rights thereto or have received all
                necessary consents.
              </li>

              <li className="mfl-bullet-list-item">
                Defame, abuse, harass, stalk, threaten, intimidate, or otherwise violate the legal rights of any other
                person.
              </li>

              <li className="mfl-bullet-list-item">
                Publish, post, upload, distribute, or otherwise disseminate any content that is inappropriate, profane,
                defamatory, obscene, indecent, unlawful, hateful, threatening, pornographic, or that contains nudity or
                graphic or gratuitous violence.
              </li>
              <li className="mfl-bullet-list-item">
                Develop or operate a third-party application containing, or advertise or otherwise market alcohol or
                tobacco-related or other mature content without appropriate age-based restrictions.
              </li>
              <li className="mfl-bullet-list-item">
                Offer any contest, giveaway, or sweepstakes ("promotion") on the Site.
              </li>
              <li className="mfl-bullet-list-item">
                Use the Site to do anything unlawful, misleading, malicious, or discriminatory.
              </li>
              <li className="mfl-bullet-list-item">
                Do anything that could disable, overburden, or impair the proper working of the Site, such as a
                denial-of-service attack.
              </li>
              <li className="mfl-bullet-list-item">
                Facilitate or encourage any violations of these Terms of Service.
              </li>
              <li className="mfl-bullet-list-item">
                Post anyone's identification documents or sensitive financial information on the Site.
              </li>
              <li className="mfl-bullet-list-item">
                Interfere with or disrupt the integrity or performance of the Site, any portion or contents thereof, or
                related systems or networks.
              </li>
              <li className="mfl-bullet-list-item">
                Use the Site in any way that degrades its reliability, speed, or operation, or underlying hardware or
                software.
              </li>

              <li className="mfl-bullet-list-item">
                Restrict or inhibit any other user from using and enjoying the Site.
              </li>
              <li className="mfl-bullet-list-item">Violate any applicable laws or regulations.</li>
            </ol>{" "}
          </div>

          <div className="content-20">
            You agree that, if you collect information from any Site users, you will: obtain their consent, make it
            clear that you (and not we) are the one collecting their information, and post a privacy policy in
            compliance with applicable law explaining what information you collect and how you will use it.
          </div>
          <div className="content-20">
            We have the right to investigate occurrences that may involve such violations and may involve, provide
            information to, and cooperate with, law enforcement authorities in prosecuting users who are involved in
            such violations.
          </div>
          <div className="content-20">
            You are solely responsible and liable for any activity, behavior, use, and/or conduct that breaches any
            terms or conditions of these Terms of Service. You agree we have no responsibility to you or to any third
            party for any breach of your obligations under these Terms of Service or for the consequences (including any
            loss or damage that we may suffer) of any such breach.
          </div>
          <div className="content-20">
            Persons found in violation of any of these rules or any aspect of these Terms of Service, as decided by us
            in our sole discretion, may have their access to the Site blocked. Violations of system or network security
            or these Terms of Service may result in civil or criminal liability.
          </div>

          <div className="section-title">Third Party Applications and Sites.</div>
          <div className="content-20">
            <b>Integration with Third Party Applications.</b> The Site may contain features designed to interoperate
            with Third-Party Applications (as defined below). If you wish to use such features, you may be required to
            obtain access to such Third-Party Applications from their providers. If the provider of any such Third-Party
            Application ceases to make the Third-Party Application available for interoperation with the Site, we may
            cease making such Third-Party Applications available on the Site. You acknowledge and agree that we are not
            the provider of the Third-Party Applications and that we disclaim any and all liability arising out of your
            use of the Third-Party Applications. For purposes of these Terms of Service, “Third-Party Application” shall
            mean online applications and offline software products that are provided by entities or individuals other
            than us, and that interoperate with the Site, including without limitation the hosting services provided by
            Amazon Web Services or any other company used by us for cloud hosting services for the Site.
          </div>

          <div className="content-20">
            <b>Links to Third Party Sites.</b>The Site may provide links to other websites or resources (the “Linked
            Sites”). The Linked Sites are not under our control, and we are not responsible for the contents of any
            Linked Site, including without limitation any link contained in a Linked Site, any advertising, products,
            services, or other materials on or otherwise made available via such Linked Sites. We are not responsible
            for webcasting or any other form of transmission received from any Linked Site. We are providing these links
            to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the Linked
            Site or any association with its operators. You acknowledge and agree that we shall not be responsible or
            liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection
            with use of or reliance on any such content, products, or services made available on or through any Linked
            Site.
          </div>

          <div className="section-title">Intellectual Property Rights.</div>
          <div className="content-20">
            You are permitted to use Content and Trademarks, but only as provided in these Terms of Service. Please keep
            in mind that you have no rights in or to any Content or Trademarks, and you are not permitted to use any
            Content or Trademarks, except as specifically permitted under these Terms of Service. This means that you
            may not do, or allow anyone else to do, anything with Content or Trademarks that is not specifically
            permitted under these Terms of Service. Any rights not expressly granted in these Terms of Service are
            reserved.
          </div>
          <div className="content-20">
            <b>Content.</b>The information and materials displayed, provided, or otherwise made available through the
            Site, directly or indirectly, including without limitation any and all data, text, photographs, graphics,
            images, materials, music, audio and video clips, logos, icons, software, and links (collectively, the
            “Content”) are intended to educate, inform, and entertain you. The Site is owned and operated by us, and the
            Content (and any intellectual property and other rights relating thereto) is and will remain our property
            and the property of our licensors and suppliers, as applicable, except as otherwise provided in these Terms
            of Service. You acknowledge that you do not acquire any ownership rights by using the Site or the Content.
          </div>
          <div className="content-20">
            The Content and the selection, compilation, collection, arrangement, and assembly of any Content are
            protected by U.S. and international copyright, trademark, and other laws, and you acknowledge that these
            rights are valid and enforceable. You are permitted to use Content solely to the extent necessary for your
            authorized use of the Site, as provided in these Terms of Service, or as expressly authorized in writing by
            us. Unless otherwise specifically set forth in these Terms of Service or we give you written permission, you
            are permitted to use, access, download, and/or copy the Content (and print a single copy) only for your
            personal and non-commercial use, and you will not alter, erase, or otherwise obscure our copyright,
            trademark, proprietary, or other notices on the Content. Modification of the Content or use of the Content
            for any purpose other than as permitted in these Terms of Service is a violation of our copyright and other
            proprietary rights, and is strictly prohibited.
          </div>

          <div className="content-20">
            You acknowledge and agree that the Content: is made available for your personal informational, educational,
            and entertainment purposes only without representation or warranty of any kind; is not a substitute for
            legal advice or your judgment; and should not be construed as an endorsement by or representation of our
            opinions. Your reliance upon any Content obtained by you on or through the Site is solely at your own risk.
            You agree to comply with all notices and requirements accompanying third-party material. We may change the
            Site or delete Content or features at any time, in any way, for any or no reason, at our sole discretion.
          </div>

          {/* trademark */}
          <div className="section-title">Trademarks</div>
          <div className="content-20">
            <div className="mfl-accordions-answer">
              <ol className="mfl-bullet-list">
                <li className="mfl-bullet-list-item">
                  The term “Trademarks” means any and all registered and common law trademarks, service marks, trade
                  names, trade dress, logos, brands, brand names, Internet domain names, and other indications of origin
                  owned by us, whether currently or in the future..
                </li>
                <li className="mfl-bullet-list-item">
                  The look and feel of the Site as well as all page headers, graphics, button icons, and scripts, is our
                  proprietary trade dress and may not be copied, imitated, or used, in whole or in part, without our
                  prior written consent.
                </li>
                <li className="mfl-bullet-list-item">
                  Nothing contained herein grants or shall be construed to grant you any rights or license to use any
                  Trademarks, including without limitation as a domain name or part of a domain name or as a meta tag,
                  keyword, or other type of programming code.
                </li>
                <li className="mfl-bullet-list-item">
                  All other trademarks, service marks, logos and the like that are used or appear on the Site are the
                  property of their respective owners. Reference on the Site to any product or service by name on the
                  Site does not constitute or imply our endorsement, sponsorship, or recommendation of the product or
                  service, unless expressly so stated.
                </li>
                <li className="mfl-bullet-list-item">
                  The Trademarks may not be used in connection with any product or service that does not belong to us,
                  or in any manner that is likely to cause confusion among customers, or in any manner that may
                  disparage or discredit us.
                </li>
                <li className="mfl-bullet-list-item">
                  You may not use any of the Trademarks to create a link to the Site without our prior written consent.
                </li>
              </ol>{" "}
            </div>
          </div>
          {/* copyright */}
          <div className="section-title">Copyrights</div>

          <div className="mfl-accordions-answer">
            <ol className="mfl-bullet-list">
              <li className="mfl-bullet-list-item">
                Except as otherwise provided in these Terms of Service, the Content as well as the underlying
                programming code to create the Site is owned by us, is protected under U.S. and international copyright
                law and other intellectual property law, and may not be copied, reproduced, distributed, modified, or
                publicly displayed without our prior written permission. You may request permission by contacting us as
                provided in the Contact Us section below.
              </li>
              <li className="mfl-bullet-list-item">
                Nothing contained herein grants or shall be construed to grant you any rights to use any of the Content
                or its underlying programming code.
              </li>
              <li className="mfl-bullet-list-item">
                We respect other people's rights, and expect you to do the same. By way of example, you will not post
                content or take any action on the Site that infringes or violates someone else's rights, including their
                copyrights, or otherwise violates the law
              </li>
              <li className="mfl-bullet-list-item">
                We reserve the right to remove any content or information you post on the Site if we believe, in our
                sole discretion, that it violates these Terms of Service.
              </li>
              <li className="mfl-bullet-list-item">
                If you infringe other people's intellectual property rights, we may disable your account when deemed
                appropriate by us in our sole discretion.
              </li>
              <li className="mfl-bullet-list-item">
                All contents of the Site: © 2021 Oakledge Mathematics Consulting LLC and/or our Affiliates. All rights
                reserved.
              </li>
              <li className="mfl-bullet-list-item">
                <b>Copyright Complaints.</b> We respect the intellectual property rights of others. We may, under
                appropriate circumstances and at our sole discretion, disable and/or terminate access to or use of the
                Site for those users who may be infringing the intellectual property rights of others. If you believe
                that your work has been copied in a manner that constitutes copyright infringement, please provide our
                copyright agent with the information specified below:
              </li>
            </ol>
          </div>
          <div className="content-20">
            <div className="mfl-accordions-answer sub-item-list">
              <ol className="mfl-bullet-list" type="a">
                <li className="mfl-bullet-list-item">
                  An electronic or physical signature of the person authorized to act on behalf of the owner of the
                  copyright interest;
                </li>
                <li className="mfl-bullet-list-item">
                  A description of the copyrighted work that you claim has been infringed upon;
                </li>
                <li className="mfl-bullet-list-item">
                  A description of where the material that you claim is infringing is located on the Site;
                </li>
                <li className="mfl-bullet-list-item">Your address, telephone number, and e-mail address;</li>
                <li className="mfl-bullet-list-item">
                  A statement by you that you have a good-faith belief that the disputed use is not authorized by the
                  copyright owner, its agent, or the law;
                </li>
                <li className="mfl-bullet-list-item">
                  A statement by you, made under penalty of perjury, that the above information in your notice is
                  accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.
                </li>
              </ol>
            </div>
          </div>
          <div className="content-20">
            <b>Feedback.</b>You acknowledge and agree that if you submit any comments, feedback, ideas, or related
            materials to us about the Site, including possible developments (together, “Feedback”), we make no
            assurances or warranties that such Feedback will be treated as confidential or proprietary. By submitting
            Feedback, you are waiving any and all rights that you may have in and to the Feedback, and you are
            representing and warranting to us that the Feedback is wholly original with you, that to the best of your
            knowledge no one else has any rights in the Feedback, and that we are free to implement the Feedback if we
            so desire, as provided or as modified by us, without obtaining permission or license from any third party.
          </div>

          <div className="content-20">
            <b>Unsolicited Ideas Submission.</b>Note that we do not accept or consider unsolicited submissions
            concerning our business or operations, including, but not limited to, original ideas for new advertising
            campaigns, promotions, products, services, technologies, processes, materials, marketing plans, or new
            product/service names. Please do not send us such submissions. The purpose of this policy is to avoid
            potential misunderstandings or disputes when our services, products, or marketing strategies appear similar
            to ideas submitted to us. All such submissions to us are considered our property. We do not have an
            obligation to protect the confidentiality of any such submission. We will exclusively own all known or
            later-existing rights to such submission worldwide, and we will be entitled to the unrestricted use of any
            such submission for any purpose, without compensation to you or any third-party provider of such submission.
          </div>
          <div className="section-title">Right to Restrict or Terminate Use.</div>
          <div className="content-20">
            We reserve the right to block, restrict, disable, suspend, or terminate your access to all or part of the
            Site at any time in our sole discretion, without cause, without prior notice, and without liability to you
            or to any third party.
          </div>

          <div className="section-title">Termination of Terms of Service. </div>
          <div className="content-20">
            These Terms of Service are effective unless and until terminated by either you or us. We may terminate these
            Terms of Service, including restricting, suspending, or terminating your access to and use of the Site,
            immediately and without notice or liability, with or without cause, in our sole discretion, and it will not
            limit any other rights or remedies that are available to us. You may terminate these Terms of Service at any
            time by ceasing to use or access the Site. Termination, including cessation of your use of and access to the
            Site, is your sole right and exclusive remedy if you are not satisfied with the Site. Upon the effective
            date of any such termination, your right to access and use the Site shall immediately cease. You acknowledge
            and agree that upon termination, you may be prevented from accessing the Site, your account details, or any
            files or other content contained in your account.
          </div>
          <div className="section-title">Supplementation of Terms of Service.</div>
          <div className="content-20">
            You acknowledge that we may establish day-to-day operational practices that supplement these Terms of
            Service, and we may implement and change these operational practices from time to time, with or without
            notice. Such practices may include, for example, periodic deletion of information posted or logging off
            users who are inactive for an extended period of time during a login session. If there are any conflicts
            between these operational practices and any terms in these Terms of Service, these Terms of Service will
            apply.
          </div>
          <div className="section-title">Disclaimers</div>
          <div className="content-20">
            We make no representation that your use of the Site will comply with applicable laws. We do not control the
            information and/or data posted by any users of the Site, and we do not vouch for the accuracy, integrity, or
            quality of any such information and/or data. We do not endorse any opinions expressed by any users of the
            Site. We do not guarantee that any third-party content has been posted with the permission of the copyright
            or proprietary owner or is otherwise in compliance with these Terms of Service. You understand and agree
            that you must evaluate, and that you bear all risks associated with, the use of any Content, including any
            reliance on the accuracy, completeness, or usefulness of such Content. You acknowledge and agree that we
            have no responsibility for the storage or deletion, or the failure to store or delete, of any information or
            data.
          </div>
          <div className="content-20">
            You agree that under no circumstance will we, our directors, officers, shareholders, employees, consultants,
            agents, representatives, advisers, affiliates, subsidiaries or our third-party partners be liable in any way
            in connection with: (a) any information or data posted by any users of the Site, including without
            limitation errors or omissions in such information or data; (b) any loss or damage of any kind incurred as a
            result of the use by you or a third party of any such information or data; or (c) any failure to correct or
            remove any information or data.
          </div>

          <div className="content-20">
            <b>Disclaimer of Warranty.</b> WE TRY TO KEEP THE SITE UP, BUG-FREE, AND SAFE, BUT YOUR USE OF THE SITE IS
            AT YOUR OWN RISK. THE SITE IS PROVIDED "AS IS" AND AS AVAILABLE AND WITHOUT WARRANTY OF ANY KIND, WHETHER
            EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND/OR NON-INFRINGEMENT, OR ANY WARRANTIES ARISING BY COURSE OF DEALING OR CUSTOM OF
            TRADE. WE ARE NOT RESPONSIBLE FOR THE ACTIONS, CONTENT, INFORMATION, OR DATA OF ANY THIRD PARTIES. NONE OF
            US, OUR DIRECTORS, OFFICERS, SHAREHOLDERS, EMPLOYEES, CONSULTANTS, AGENTS, REPRESENTATIVES, ADVISERS,
            AFFILIATES, SUBSIDIARIES, OR THIRD-PARTY PARTNERS IS OR WILL BE LIABLE TO YOU FOR ANY HARM ARISING OUT OF OR
            RELATED TO YOUR ACCESS TO OR USE OF OR OUT OF YOUR INABILITY TO ACCESS OR USE THE SITE. WE, OUR DIRECTORS,
            OFFICERS, SHAREHOLDERS, EMPLOYEES, CONSULTANTS, AGENTS, REPRESENTATIVES, ADVISERS, AFFILIATES, SUBSIDIARIES,
            AND THIRD-PARTY PARTNERS MAKE NO REPRESENTATION OR WARRANTY THAT ANY MATERIAL, CONTENT, PRODUCTS, OR
            SERVICES DISPLAYED ON OR OFFERED THROUGH THE SITE ARE ACCURATE, COMPLETE, APPROPRIATE, RELIABLE, OR TIMELY.
            WE, OUR DIRECTORS, OFFICERS, SHAREHOLDERS, EMPLOYEES, CONSULTANTS, AGENTS, REPRESENTATIVES, ADVISERS,
            AFFILIATES, SUBSIDIARIES, AND THIRD-PARTY PARTNERS ALSO MAKE NO REPRESENTATIONS OR WARRANTIES THAT THE SITE
            WILL MEET YOUR REQUIREMENTS AND/OR THAT YOUR ACCESS TO OR USE OF THE SITE WILL BE UNINTERRUPTED OR
            ERROR-FREE, FREE OF VIRUSES, MALICIOUS CODE, OR OTHER HARMFUL COMPONENTS, OR OTHERWISE SECURE. SOME
            JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. ACCORDINGLY, SOME OF THE ABOVE EXCLUSIONS
            MAY NOT APPLY TO YOU.
          </div>

          <div className="section-title">Limitation of Liability; Release. </div>
          <div className="content-20">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE, OUR DIRECTORS, OFFICERS, SHAREHOLDERS,
            EMPLOYEES, CONSULTANTS, AGENTS, REPRESENTATIVES, ADVISERS, AFFILIATES, SUBSIDIARIES, AND THIRD-PARTY
            PARTNERS BE LIABLE TO YOU FOR ANY DIRECT, LOST PROFITS, INCIDENTAL, CONSEQUENTIAL, INDIRECT, SPECIAL,
            PUNITIVE DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA, OR
            PROFITS, ARISING OUT OF OR IN ANY WAY RELATED TO OR CONNECTED WITH THE USE OF THE SITE, THE DELAY OR
            INABILITY TO USE THE SITE, THE PROVISION OF OR FAILURE TO PROVIDE SITE, OR FOR ANY INFORMATION, SOFTWARE,
            PRODUCTS, SERVICES, CONTENT, OR RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE
            USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, EVEN IF WE,
            OUR DIRECTORS, OFFICERS, SHAREHOLDERS, EMPLOYEES, CONSULTANTS, AGENTS, REPRESENTATIVES, ADVISERS,
            AFFILIATES, SUBSIDIARIES, OR THIRD-PARTY PARTNERS HAVE BEEN ADVISED OF THE POSSIBILITY OF DAMAGES.
            APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY OR INCIDENTAL OR CONSEQUENTIAL
            DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU. IN SUCH CASES, OUR LIABILITY WILL BE
            LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE
            SITE, OR WITH ANY OF THESE TERMS OF SERVICE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE
            SITE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN THE EVENT YOU HAVE ANY DISPUTE WITH ONE OR MORE
            THIRD PARTIES AS A RESULT OF YOUR USE OF THE CONTENT OR THE SITE, OR ARE IN ANY WAY DAMAGED AS A RESULT OF
            ANY THIRD PARTY IN CONNECTION THEREWITH, YOU HEREBY RELEASE AND COVENANT NOT TO SUE OR OTHERWISE MAKE A
            CLAIM, DEMAND, OR FILE ANY LEGAL ACTION OR INSTITUTE ANY LEGAL OR REGULATORY PROCEEDINGS AGAINST US, OUR
            DIRECTORS, OFFICERS, SHAREHOLDERS, EMPLOYEES, CONSULTANTS, AGENTS, REPRESENTATIVES, ADVISERS, AFFILIATES,
            SUBSIDIARIES, AND OUR THIRD-PARTY PARTNERS FOR ANY CLAIMS, ACTIONS, DEMANDS, OR DAMAGES (WHETHER DIRECT,
            INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL), OF WHATEVER KIND OR NATURE, KNOWN OR UNKNOWN, SUSPECTED OR
            UNSUSPECTED, WHETHER FORESEEABLE OR NOT, DISCLOSED OR UNDISCLOSED. IF YOU ARE A CALIFORNIA RESIDENT, YOU
            WAIVE CALIFORNIA CIVIL CODE SECTION 1542, WHICH STATES, IN PART: “A GENERAL RELEASE DOES NOT EXTEND TO
            CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE
            RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR.” YOU
            ACKNOWLEDGE AND AGREE THAT WE WOULD NOT HAVE PROVIDED THE SITE BUT FOR THESE DISCLAIMERS OF LIABILITY, AND
            YOU AGREE THAT THE TERMS ARE REASONABLE.
          </div>

          <div className="section-title">Indemnification </div>
          <div className="content-20">
            You agree to indemnify, defend, and hold harmless us, our directors, officers, shareholders, employees,
            consultants, agents, representatives, advisers, affiliates, subsidiaries, and our third-party partners from
            and against any loss, liability, claim, demand, damages, costs, and expenses (including attorneys' fees and
            all related costs and expenses of litigation, or at trial or on appeal, if any, whether or not litigation is
            instituted), arising in any manner out of, related to, or in connection with: (i) your use of or access to
            the Site; (ii) the use of the Site by any other person using your IDs; (iii) your violation of any provision
            of these Terms of Service; (iv) your violation of any third-party right, including without limitation any
            copyright, property right, or privacy right; and/or (v) any claim that your content caused damage to any
            third party. We may, if necessary, participate in the defense of any such claim or action and any
            negotiations for its settlement or compromise. No settlement that may adversely affect our rights or
            obligations shall be made without our prior written approval. We reserve the right, at our own expense and
            on notice to you, to assume exclusive defense and control of any such claim or action. This defense and
            indemnification obligation will survive termination of these Terms of Service and your use of the Site.
          </div>

          <div className="section-title">Requirements for use of the Site.</div>
          <div className="content-20">
            <b>Intended for use by U.S. residents only.</b> The Site is owned, controlled, and operated by Oakledge
            Mathematics Consulting, a Vermont limited liability company doing business as MathFactLab, in the United
            States of America, and is not intended to subject MathFactLab to the laws or jurisdiction of any country or
            territory other than the United States of America. The Site, including any information provided on the Site
            or posted on or through the Site, is designed to comply with the laws of the United States, and it is
            intended for access and use only by U.S. residents. Access to and use of the Site may not be legal by
            certain persons or in certain countries. If you use or access the Site, including any information provided
            through the Site, outside of the United States, you do so on your own initiative, and you are solely
            responsible for compliance with the laws and regulations of your jurisdiction as well as these Terms of
            Service. The Site may contain links to other websites, some of which may be outside the United States. Those
            other websites may have information that is appropriate only to the particular originating country or region
            where such other website is based. You should not construe anything on the Site as a promotion of or
            solicitation for any product or service or for the use of any product or service that is not authorized by
            the laws and regulations of the United States. MathFactLab makes no representation that materials on the
            Site are appropriate or available for use in other locations.
          </div>
          <div className="content-20">
            <b>Special Provisions Relating to Users Outside of the United States.</b> The following provisions apply to
            users outside the United States:
          </div>
          <div className="mfl-accordions-answer">
            <ol className="mfl-bullet-list">
              <li className="mfl-bullet-list-item">
                You consent to having your personal data transferred to and processed in the United States.
              </li>
              <li className="mfl-bullet-list-item">
                If you are located in a country embargoed by the United States, or are on the U.S. Treasury Department's
                list of Specially Designated Nationals, you are not permitted to engage in commercial activities on the
                Site (such as advertising or payments).
              </li>
            </ol>
          </div>
          <div className="section-title">General Provisions.</div>
          <div className="content-20">
            <div className="mfl-accordions-answer">
              <ol className="mfl-bullet-list">
                <li className="mfl-bullet-list-item">
                  These Terms of Service, together with any agreements incorporated by reference, including but not
                  limited to the Privacy Policy, constitute the entire agreement between you and us relating to the
                  subject matter hereof, and they supersede any prior agreements between you and us relating to the
                  same. .
                </li>
                <li className="mfl-bullet-list-item">
                  Our failure to exercise or enforce any right or provision of these Terms of Service shall not
                  constitute a waiver of such right or provision in that or any other instance. If any provision of
                  these Terms of Service is held invalid, the remainder of the Terms of Service shall continue in full
                  force and effect. If any provision of these Terms of Service shall be deemed unlawful, void, or for
                  any reason unenforceable, then that provision shall be deemed severable from these Terms of Service
                  and shall not affect the validity and enforceability of any remaining provisions.
                </li>
                <li className="mfl-bullet-list-item">
                  Any amendment to or waiver of this Statement must be made in writing and signed by us.
                </li>
                <li className="mfl-bullet-list-item">
                  You will not transfer any of your rights or obligations under these Terms of Service to anyone else
                  without our written consent. All of our rights and obligations under these Terms of Service are freely
                  assignable by us in connection with a merger, acquisition, or sale of assets, or by operation of law
                  or otherwise.
                </li>
                <li className="mfl-bullet-list-item">
                  Nothing in these Terms of Service shall prevent us from complying with the law.
                </li>
                <li className="mfl-bullet-list-item">
                  These Terms of Service do not confer any third-party beneficiary rights.
                </li>
                <li className="mfl-bullet-list-item">
                  Headings used in these Terms of Service are for reference purposes only and in no way define or limit
                  the scope of the section.
                </li>
                <li className="mfl-bullet-list-item">
                  These Terms of Service and the relationship between you and us shall be governed by the laws of the
                  State of Vermont, USA, without regard to its conflict of laws provisions. Any dispute arising out of
                  or in connection with these Terms of Service shall be heard exclusively by the state or federal courts
                  sitting in Chittenden County, Vermont, USA. You hereby submit to the personal jurisdiction of those
                  courts and waive any objection as to venue or the convenience of those courts.
                </li>
                <li className="mfl-bullet-list-item">
                  If you have an account (as applicable), any legal notice relating to these Terms of Service shall be
                  sent to the email address associated with your account, and you agree that this constitutes adequate
                  and sufficient notice. Any legal notice to us shall be sent to the contact for legal matters available
                  in the Contact Us section below.
                </li>
                <li className="mfl-bullet-list-item">
                  Any claim with respect to your use of the Site or these Terms of Service must be brought within one
                  (1) year of the date that such claim arises. In the event we need to enforce our rights against you,
                  in addition to any other remedies, you agree to pay our reasonable costs, including attorneys’ fees
                  and costs of suit. You agree that any dispute resolution proceedings will be conducted only on an
                  individual basis and not in a class, consolidated, or representative action. You waive any right to a
                  jury trial.
                </li>
              </ol>
            </div>
          </div>
          <div className="section-title">CONTACT US</div>
          <div className="content-20">
            <b>Content, Account Information, and General Matters.</b> To provide Feedback, obtain information about your
            account, or obtain other information about the Site:
          </div>
          <div className="content-20 ml-24">
            <b>Email us at:</b>{" "}
            <a href="mailto:contact@mathfactlab.com" className="link" title="MathFactLab ts2" rel="canonical">
              contact@mathfactlab.com
            </a>
            <br />
            <b> Write us at:</b> Oakledge Mathematics Consulting, LLC, 300 Redrock Drive, Burlington, VT 05401
          </div>
          <div className="content-20">
            <b>Legal matters.</b> For any legal matters, including questions or comments about these Terms of Service,
            notices of violations of these Terms of Service, or claims of copyright infringement:
          </div>
          <div className="content-20 ml-24">
            <b>Email us at:</b>{" "}
            <a href="mailto:contact@mathfactlab.com" className="link" title="MathFactLab ts3" rel="canonical">
              contact@mathfactlab.com
            </a>
            <br />
            <b> Write us at:</b> Oakledge Mathematics Consulting, LLC, 300 Redrock Drive, Burlington, VT 05401
          </div>
        </div>
      </div>
    </section>
  </Layout>
  // </Suspense>
)

export default Terms
