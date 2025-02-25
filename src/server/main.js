const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../../dist')))

app.get('*', function (req, res){
    const pathToHtmlFile = path.resolve(__dirname, '../../dist/opttimusdev.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile)
});
const PORT = process.env.PORT || 9090;
app.listen(PORT, function () {
    console.log('Application is running on port '+PORT)
})