const webp=require('webp-converter');
const fs = require('fs');
const path = require("path");
const folder = 'images/';
const output = 'webp/';

fs.readdir(output, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(output, file), (err) => {
      if (err) throw err;
    });
  }
});

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    const fileWithoutFormat = file.split('.')[0];

    const result = webp.cwebp(folder + file, output + fileWithoutFormat + '.webp',"-q 70",logging="-v");
    result.then((response) => {
        console.log(response);
    });
  });
});
//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)

//cwebp(input,output,option)

const result = webp.cwebp("images/main-asset-1.jpg","webp/main-asset-1.webp","-q 92",logging="-v");
result.then((response) => {
  console.log(response);
});