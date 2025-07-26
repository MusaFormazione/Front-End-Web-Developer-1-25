#!/usr/bin/env node
const fs = require('fs')

// get the first cli command argument
const projectPath = process.argv[2]
if (!projectPath) {
  console.error('Please provide a project name as the first argument.')
  process.exit(1)
}
// projectname is the last part of the path, with dashes before Capital letters
const projectName = projectPath.split('/').pop()
  .replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

// if present the flag --description will be used to set the description in package.json
const descriptionIndex = process.argv.indexOf('--description')
let projectDescription = 'A React + Vite + Bootstrap project'
if (descriptionIndex !== -1 && process.argv[descriptionIndex + 1]) {
  projectDescription = process.argv[descriptionIndex + 1]
}

// copy the ./Template directory to the new project directory
fs.cpSync('./Template', projectPath, { recursive: true })

// replace the name in package.json with the project name (the last part of the path with this style "37/CardWitrhEffect" becomes 'card-with-effect')
const packageJsonPath = `${projectPath}/package.json`
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
packageJson.name = projectName

// replace the description in package.json with the project description
packageJson.description = projectDescription

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

// replace the name in index.html with the project name
const projectTitle = projectName.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
const indexHtmlPath = `${projectPath}/index.html`
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8')
indexHtml = indexHtml.replace(/<title>.*<\/title>/, `<title>${projectTitle}</title>`)
indexHtml = indexHtml.replace(/<meta name="description" content=".*">/, `<meta name="description" content="${projectDescription}">`)
fs.writeFileSync(indexHtmlPath, indexHtml)

// replace the name in App.jsx with the project name
const appJsxPath = `${projectPath}/src/App.jsx`
let appJsx = fs.readFileSync(appJsxPath, 'utf8')
// project Title must be replace projectName with spaces instead of dashes and capitalized
appJsx = appJsx.replace(/<h1>.*<\/h1>/, `<h1>${projectTitle}</h1>`)

fs.writeFileSync(appJsxPath, appJsx)
