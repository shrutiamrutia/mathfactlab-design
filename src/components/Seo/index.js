import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ description, lang, robots, keywords, title, locales }) {
  // const metaDescription = description || site.siteMetadata.description
  const pageUrl = typeof window !== "undefined" ? window.location.href : ""

  const logoSchema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Oakledge Mathematics Consulting",
    url: "https://www.mathfactlab.com/",
    description:
      "MathFactLab is teacher-created, and we've taken the advice of the world's best researchers of mathematics education to build a math fact website that is based on reasoning strategies and sense making.",
    logo: "https://www.mathfactlab.com/static/logo-9ed7aa4b5d85e3b747ce75683a8d5228.svg",
    sameAs: [
      "https://www.facebook.com/Math-Fact-Lab-109909925142356/",
      "https://twitter.com/mathfactlab",
      "https://www.instagram.com/mathfactlab/",
      "https://www.mathfactlab.com/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "802-324-8722",
        contactType: "customer service",
      },
    ],
  }

  const businessSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Oakledge Mathematics Consulting",
    url: "https://www.mathfactlab.com/",
    image: "https://www.mathfactlab.com/static/weare-diff-image-4bff40ce5f5220b87ff2a42a89656fda.svg",
    description:
      "MathFactLab is teacher-created, and we've taken the advice of the world's best researchers of mathematics education to build a math fact website that is based on reasoning strategies and sense making.",
    pricerange: "$",
    telephone: "802-324-8722",
    email: "contact@mathfactlab.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "300 Redrock Drive",
      addressLocality: "Burlington",
      addressRegion: "Vermont",
      postalCode: "5401",
      addressCountry: "USA",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "700",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Oakledge Mathematics Consulting",
      },
    },
    sameAs: [
      "https://www.facebook.com/Math-Fact-Lab-109909925142356/",
      "https://twitter.com/mathfactlab",
      "https://www.instagram.com/mathfactlab/",
      "https://www.mathfactlab.com/",
    ],
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={
      //   title.startsWith(site.siteMetadata.title)
      //     ? ""
      //     : `%s  | ${site.siteMetadata.title}`
      // }

      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@albetrios",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `DC.title`,
          content: "MathFactLab - A Strategy-Based Approach to Math Fact Fluency",
        },
        {
          name: `geo.region`,
          content: "US-VT",
        },
        {
          name: `geo.placename`,
          content: "Burlington",
        },
        {
          name: `geo.position`,
          content: "39.78373;-100.445882",
        },
        {
          name: `ICBM`,
          content: "39.78373, -100.445882",
        },
        {
          name: `og:url`,
          content: "https://www.mathfactlab.com/",
        },
        {
          name: `og:image`,
          content: "https://www.mathfactlab.com/static/about-inner-09fc17c8e59d0e9144088f4577642c52.svg",
        },
        {
          name: `twitter:image`,
          content: "https://www.mathfactlab.com/static/about-inner-09fc17c8e59d0e9144088f4577642c52.svg",
        },
        {
          name: `p:domain_verify`,
          content: "8226276fb191d16c9ae0e514bab0d365",
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(
          robots
            ? {
                name: `robots`,
                content: robots,
              }
            : []
        )}
    >
      {locales &&
        locales.map(locale => {
          return <link rel="alternate" href={pageUrl} hrefLang={locale} key={locale} />
        })}
      {locales &&
        locales.map(locale => {
          return <link rel="canonical" href={pageUrl} key={locale} />
        })}

      <script type="application/ld+json">{JSON.stringify(logoSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>

      <script type="text/javascript">
        {`  
  (function(w,d,t,r,u)
  {
    var f,n,i;
    w[u]=w[u]||[],f=function()
    {
      var o={ti:" 187004155"};
      o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
    },
    n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
    {
      var s=this.readyState;
      s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
    },
    i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
  })
  (window,document,"script","//bat.bing.com/bat.js","uetq"),
  `}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
