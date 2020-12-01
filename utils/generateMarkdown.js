// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

## Description:
${data.projectDescription}
## Usage: 
${data.usageinfo}
## Contribution guidelines:
${data.contributionGuidelines}
## Testing instructions:
${data.testingInstructions}
## Lincense Type:
${data.licenseType}
## GitHub User:
${data.ghUserName}

`;
}

module.exports = {
  generateMarkdown: generateMarkdown
}
