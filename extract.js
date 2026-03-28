const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../Mason_AWS_CV.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('cv.txt', data.text);
    console.log("PDF extraction successful!");
}).catch(function(error) {
    console.error("Error reading PDF: ", error);
});
