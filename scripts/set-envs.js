// fs es FileSystem
const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envFileContent = `
  export const environment = {
    mapbox_key: "${ process.env['MAPBOX_KEY'] }"
  };
`;
// recursive: true es para ver si existe lo sobreescribe
mkdirSync('./src/environments', { recursive: true });

writeFileSync( targetPath, envFileContent );
