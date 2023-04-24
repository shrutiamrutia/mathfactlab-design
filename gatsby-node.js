const path = require("path")
const axios = require("axios")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const username = "5133bdd5-87eb-4310-a80d-33156301c514"

  const ENDPOINT = `https://api.dropinblog.com/v1/json/?b=${username}`

  const result = await axios.get(`${ENDPOINT}`)
  // * Posts
  const postTemplate = path.resolve("./src/components/blog/index.js")

  result &&
    result.data.data.posts.length &&
    result.data.data.posts.forEach(post => {
      createPage({
        component: postTemplate,
        path: `/math-facts-journal/${post.slug}`,
        context: { slug: post.slug },
      })
    })
}
