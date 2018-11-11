var fs = require('fs');

// Delete file - sync
// fs.unlink('dtext.txt', function() {});

// Create dir & sync
// fs.mkdirSync('upload', function() {});
// Create dir & async
fs.mkdir('upload', function() {
    fs.writeFile('./upload/index.js', '', function() {
        console.log('done!');
    });
});

// Remove dir & sync
// fs.rmdirSync('upload', function() {});
// Remove dir & async
// fs.rmdir('upload', function() {});