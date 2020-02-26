const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const markdownTemplate = path.resolve(`src/templates/markdownTemplate.tsx`)

  result = await graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            fields {
              pathToServe
            }
            frontmatter {
              alwaysopen
              weight
            }
            fileAbsolutePath
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    return createPage({
      path: node.fields.pathToServe,
      component: markdownTemplate,
      context: {
        parent: node.fields.parent,
        weight: node.frontmatter.weight,
      }, // additional data can be passed via context, can use as variable on query
    })
  })
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === 'Mdx') {
    // Use `createFilePath` to turn markdown files in our `content` directory into `/workers/`pathToServe
    const originalPath = node.fileAbsolutePath.replace(
      node.fileAbsolutePath.match(/.*content/)[0],
      ''
    )
    let pathToServe = createFilePath({
      node,
      getNode,
      basePath: 'content/',
    })
    let parentDir = path.dirname(pathToServe)
    if (pathToServe.includes('index')) {
      pathToServe = parentDir
      parentDir = path.dirname(parentDir) // "/" dirname will = "/"
    }
    pathToServe = pathToServe.replace(/\/+$/, '/') // always end the path with a slash
    // Creates new query'able field with name of 'pathToServe', 'parent'..
    // for allMdx edge nodes
    createNodeField({
      node,
      name: 'pathToServe',
      value: `/workers${pathToServe}`,
    })
    createNodeField({
      node,
      name: `parent`,
      value: `${parentDir}`,
    })
    createNodeField({
      node,
      name: `filePath`,
      value: `${originalPath}`,
    })
  }
}
