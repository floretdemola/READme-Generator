// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, username, repo) {
  if (!license){
  return '';
  } 
  return `![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${username}/${repo}?style=flat&logo=appveyor)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return '';
    } 
    return `\n* [${license}](https://shields.io/)\n`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
    } 
    return `## License
    
  This project is licensed under the ${license} license.`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  let draftToC = `## Table of Contents`;

  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftToC += `
  * [Tests](#tests)` };

  let draftMarkdown =
   `# ${userResponses.title}


   ${renderLicenseBadge(userResponses.license, userResponses.username, userResponses.repo)}

   Check out the badges hosted by ${renderLicenseLink(userResponses.license)}.
   
  
   ## Description 
   
   *The what, why, and how:* 
   
   ${userResponses.description}
   `
 
   // Add Table of Contents to markdown
   draftMarkdown += draftToC;

   draftMarkdown += `
   * [License](#license)`;
 
   if (userResponses.installation !== '') {
   
   draftMarkdown +=
   `
   
   ## Installation
   
   *Steps required to install project and how to get the development environment running:*
   
   ${userResponses.installation}`
   };
   
   // Usage section
   if (userResponses.usage !== '') {
   
   draftMarkdown +=
   
   `
   
   ## Usage 
   
   *Instructions and examples for use:*
   
   ${userResponses.usage}`
   };
   
   
   // Contributing section
   if (userResponses.contributing !== '') {
 
   draftMarkdown +=
     
   `
   
   ## Contributing
   
   *If you would like to contribute it, you can follow these guidelines for how to do so.*
   
   ${userResponses.contributing}`
   };
   
 
   // Tests section
   if (userResponses.tests !== '') {
   
   draftMarkdown +=
   `
   
   ## Tests
   
   *Tests for application and how to run them:*
   
   ${userResponses.tests}`
   };
 
   // License section is required
   draftMarkdown += renderLicenseSection(userResponses.license);
 
 
   // Questions / About Developer section
   
   let draftDev =

   `
   ---
   
   ## Questions?   
   For any questions, please contact me with the information below:
  
   GitHub: [@${userInfo}](https://github.com/${userInfo})
   Email: ${userInfo}@gmail.com`;
 
   // Add developer section to markdown
   draftMarkdown += draftDev;
 
   // Return markdown
   return draftMarkdown;
   
 }

module.exports = generateMarkdown;
