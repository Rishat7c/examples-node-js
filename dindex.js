var fs = require('fs');

// Delete file - sync
// fs.unlink('dtext.txt', function() {});

// Create dir & sync
fs.mkdirSync('upload', function() {});

// Remove dir & sync
fs.rmdir('upload', function() {});