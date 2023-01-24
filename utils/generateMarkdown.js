// function to generate markdown for README
function generateMarkdown(data) {
  let myMarkdown = `# ${data.title}  
  
  `;
  
  switch (data.license) {
    case "MIT":
      myMarkdown += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      myMarkdown += "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case "Apache 2.0 License":
      myMarkdown += "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;      
    case "The Unlicense":
      myMarkdown += "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      break;     
  }
  
  myMarkdown +=`  


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
      
  ## License
  
  ${data.license}
  
  ## How to Contribute

  ${data.contributing}
  
  ## Tests
  
  ${data.test}

  ## Questions

  Check my [GitHub](https://github.com/${data.gitHub})  
  Or write me on ${data.email}

  ---
`;

  return myMarkdown;
};

module.exports = generateMarkdown;
