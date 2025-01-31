/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Type in your URL",
      name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL; 
    const qr_png = qr.image(url, { type: 'png' });

    // Save the QR code as a PNG file
    qr_png.pipe(fs.createWriteStream('generatedQRcode.png')); //create a stream
    
    fs.writeFileSync('url.txt', url);

    console.log("QR code saved as 'GeneratedQRcode.png' and URL saved as 'url.txt'.");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });


