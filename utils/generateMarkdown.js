// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)  
  - [Tests](#tests) 
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  //![alt text](assets/images/screenshot.png)
      
  ## License
  
  ${data.license}
  
  ## How to Contribute

  ${data.contributing}
  
  
  ## Tests
  
  ${data.test}

  ## Questions

  ${data.question}

  ---
`;
}

module.exports = generateMarkdown;
