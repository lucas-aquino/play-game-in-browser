const fs = require('fs-extra');
const path = require('path');

const headersContent = `

/src/juego/Build_v13/Build/Build_v13.loader.js
  Content-Type: application/javascript

/src/juego/Build_v13/Build/Build_v13.framework.js
  Content-Type: application/javascript

`;

fs.outputFile(path.join(__dirname, 'dist', '_headers'), headersContent, (err) => {
  if (err) {
    console.error('Error creating _headers file', err);
  } else {
    console.log('_headers file created successfully in the dist folder');
  }
});
