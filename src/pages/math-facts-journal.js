// // import React, { useEffect, useState } from "react"
// // import loadable from "@loadable/component"
// // // import Layout from "components/Layout"
// // import BlogInner from "assets/images/banners/blod-inner-1.svg"
// // import SEO from "components/Seo"
// // import axios from "axios"
// // import { Link } from "gatsby"

// // const Layout = loadable(() => import("../components/Layout"))
// // // const Layout = lazy(() => import("../components/Layout"))

// // const Blogs = () => {
// //   const [blogList, setBlogList] = useState([])
// //   const [isBlogLoading, setIsBlogLoading] = useState(true)

// //   useEffect(() => {
// //     setIsBlogLoading(true)
// //     const username = "5133bdd5-87eb-4310-a80d-33156301c514"

// //     const ENDPOINT = `https://api.dropinblog.com/v1/json/?b=${username}`
// //     axios
// //       .get(`${ENDPOINT}`)
// //       .then(res => {
// //         setIsBlogLoading(false)
// //         setBlogList(res.data.data.posts)
// //       })
// //       .catch(error => {})
// //   }, [])
// //   return (
// //     // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
// //     <Layout>
// //       <SEO
// //         title="Math Facts Journal: The blog of MathFactLab"
// //         description="MathFactLab helps students of all ages to develop fluency with basic addition, subtraction, division and multiplication facts. Read our blog to learn more!"
// //         keywords={["Math Fact Families Math Fact Fluency, Math Facts Lab"]}
// //         lang="en-us"
// //         robots="index, follow"
// //         locales={["en-us"]}
// //       />

// //       <section className="mfl-spotlightInner-section section-background-2 section classroom-spotlight">
// //         <div className="circle top">
// //           <span className="circle-green size-65"></span>
// //         </div>
// //         <div className="circle bottom">
// //           <span className="circle-green size-38"></span>
// //           <span className="circle-blue size-90"></span>
// //         </div>
// //         <div className="container">
// //           <div className="spotlightInner-content-wrapper">
// //             <div className="spotlightInner-content blog-content">
// //               <h1 className="spotlightInner-title blog-title">Math Facts Journal</h1>
// //               <p className="spotlightInner-subtitle blog-subtitle">
// //                 <i>The blog of MathFactLab</i>
// //               </p>
// //             </div>
// //             <div className="spotlightInner-image">
// //               <img src={BlogInner} alt="ClassroomInner" className="spotlightInner-img blog-spotlightInner-img" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {isBlogLoading ? (
// //         <div style={{ visibility: "hidden", height: "400px" }}></div>
// //       ) : (
// //         <div id="dib-posts">
// //           <div className="dib dib-platform-none" id="dib-template-3">
// //             <div className="dib-heading "></div>
// //             <div id="dib-posts-col">
// //               <div className="dib-post-wrap">
// //                 {!!blogList.length &&
// //                   blogList.map((blog, i) => {
// //                     return (
// //                       <div className={i ? "dib-post" : "dib-post dib-pinned"} key={i}>
// //                         <h2 className="dib-post-title dib-highlight">
// //                           <Link to={`/blog/${blog.slug}`} title="blog-title" rel="canonical">
// //                             {blog.title}
// //                           </Link>
// //                         </h2>

// //                         <p className="dib-post-featured-image">
// //                           <Link to={`/blog/${blog.slug}`} title="blog-image" rel="canonical">
// //                             <img
// //                               src={blog.featuredImage}
// //                               alt={blog.title}
// //                               data-lazy-load="https://io.dropinblog.com/uploaded/blogs/34247675/files/featured/Math_Facts_6x7.png"
// //                               loading="dib-lazy"
// //                               className="dib-lazy-loaded"
// //                             />
// //                           </Link>
// //                         </p>

// //                         <p className="dib-meta-text">
// //                           <span className="dib-meta-item dib-meta-date">{blog.publishedAt}</span>

// //                           <span className="dib-meta-item dib-meta-readtime">{blog.readtime}</span>
// //                         </p>

// //                         <p className="dib-post-content dib-highlight">
// //                           {blog.summary}...
// //                           <Link to={`/blog/${blog.slug}`} className="dib-more" title="blog-more" rel="canonical">
// //                             more »
// //                           </Link>
// //                         </p>
// //                       </div>
// //                     )
// //                   })}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </Layout>
// //     // </Suspense>
// //   )
// // }
// // export default Blogs

// import React, { useEffect } from "react"
// import loadable from "@loadable/component"
// // import Layout from "components/Layout"
// import BlogInner from "assets/images/banners/blod-inner-1.svg"
// // import SEO from "components/Seo"
// import axios from "axios"
// import { Link } from "gatsby"
// import { graphql, useStaticQuery } from "gatsby"

// const Layout = loadable(() => import("../components/Layout"))
// const SEO = loadable(() => import("../components/Seo"))

// // const Layout = lazy(() => import("../components/Layout"))

// const Blogs = () => {
//   // const [blogList, setBlogList] = useState([])
//   // const [isBlogLoading, setIsBlogLoading] = useState(true)

//   const data = useStaticQuery(graphql`
//     query {
//       allDibPosts(limit: 100) {
//         edges {
//           node {
//             title
//             summary
//             slug
//             publishedAt
//             readtime
//             featuredImage
//           }
//         }
//       }
//     }
//   `)

//   const blogList = data.allDibPosts.edges

//   useEffect(() => {
//     // setIsBlogLoading(true)
//     const username = "5133bdd5-87eb-4310-a80d-33156301c514"

//     const ENDPOINT = `https://api.dropinblog.com/v1/json/?b=${username}&limit=100`
//     axios
//       .get(`${ENDPOINT}`)
//       .then(res => {
//         console.log("🚀 ~ file: math-facts-journal.js ~ line 49 ~ useEffect ~ res", res)

//         // setIsBlogLoading(false)
//         // setBlogList(res.data.data.posts)
//       })
//       .catch(error => {})
//   }, [])
//   return (
//     // <Suspense fallback={<div style={{ visibility: "hidden", height: "100vh" }}></div>}>
//     <Layout>
//       <SEO
//         title="Math Facts Journal: The blog of MathFactLab"
//         description="MathFactLab helps students of all ages to develop fluency with basic addition, subtraction, division and multiplication facts. Read our blog to learn more!"
//         keywords={["Math Fact Families Math Fact Fluency, Math Facts Lab"]}
//         lang="en-us"
//         robots="index, follow"
//         locales={["en-us"]}
//       />

//       <section className="mfl-spotlightInner-section section-background-2 section classroom-spotlight">
//         <div className="circle top">
//           <span className="circle-green size-65"></span>
//         </div>
//         <div className="circle bottom">
//           <span className="circle-green size-38"></span>
//           <span className="circle-blue size-90"></span>
//         </div>
//         <div className="container">
//           <div className="spotlightInner-content-wrapper">
//             <div className="spotlightInner-content blog-content">
//               <h1 className="spotlightInner-title blog-title">Math Facts Journal</h1>
//               <p className="spotlightInner-subtitle blog-subtitle">
//                 <i>The blog of MathFactLab</i>
//               </p>
//             </div>
//             <div className="spotlightInner-image">
//               <img src={BlogInner} alt="ClassroomInner" className="spotlightInner-img blog-spotlightInner-img" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <div id="dib-posts">
//         <div className="dib dib-platform-none" id="dib-template-3">
//           <div className="dib-heading "></div>
//           <div id="dib-posts-col">
//             <div className="dib-post-wrap">
//               {blogList.map((blogDetails, i) => {
//                 const blog = blogDetails.node
//                 return (
//                   <div className={i ? "dib-post" : "dib-post dib-pinned"} key={i}>
//                     <h2 className="dib-post-title dib-highlight">
//                       <Link to={`/math-facts-journal/${blog.slug}`} title="blog-title" rel="canonical">
//                         {blog.title}
//                       </Link>
//                     </h2>

//                     <p className="dib-post-featured-image">
//                       <Link to={`/math-facts-journal/${blog.slug}`} title="blog-image" rel="canonical">
//                         <img
//                           src={blog.featuredImage}
//                           alt={blog.title}
//                           data-lazy-load="https://io.dropinblog.com/uploaded/blogs/34247675/files/featured/Math_Facts_6x7.png"
//                           loading="dib-lazy"
//                           className="dib-lazy-loaded"
//                         />
//                       </Link>
//                     </p>

//                     <p className="dib-meta-text">
//                       <span className="dib-meta-item dib-meta-date">{blog.publishedAt}</span>

//                       <span className="dib-meta-item dib-meta-readtime">{blog.readtime}</span>
//                     </p>

//                     <p className="dib-post-content dib-highlight">
//                       {blog.summary}...
//                       <Link
//                         to={`/math-facts-journal/${blog.slug}`}
//                         className="dib-more"
//                         title="blog-more"
//                         rel="canonical"
//                       >
//                         more »
//                       </Link>
//                     </p>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="learn-more-button" id="learn-more-button">
//         <Link to="/" title="MathFactLab Single  page Blogs" rel="canonical">
//           <button className="btn btn-primary">
//             <p style={{ marginBottom: "0px" }}>Learn About</p>
//             <p style={{ marginBottom: "0px" }}>MathFactLab</p>
//           </button>
//         </Link>
//       </div>
//     </Layout>
//     // </Suspense>
//   )
// }
// export default Blogs
