var util = require('util'),
	through = require('through'),
	exec = require('child_process').exec,
	markdownpdf = require("markdown-pdf"),
	glob = require('glob');
	 
function getCommandLine() {
   switch (process.platform) { 
      case 'darwin' : return 'open';
      case 'win32' : return 'start';
      case 'win64' : return 'start';
      default : return 'xdg-open';
   }
}

function addPageBreakBefore() {
    return through(function(data) {
        pageBreak = '\n\n<div style="page-break-before: always;"></div>\n\n'
        this.queue(data + pageBreak)
    })
}

var mdFiles = glob.sync('actions/**/*.md', { sync: true });
var bookPath = "out/oxygen-actions.pdf"

var options = {
	cssPath: "css/pdf.css",
	preProcessMd: addPageBreakBefore
 }

markdownpdf(options).concat
    .from(mdFiles)
    .to(bookPath, function() {
	    console.log("SUCCESS");
	    exec(getCommandLine() + ' ' + __dirname + '\\' + bookPath);
    })