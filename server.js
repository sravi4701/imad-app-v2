var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
	'article-one' : {
		title: 'Article-one | superman',
		heading: 'Article 1 Begins',
		date: 'Feb 5, 2017',
		content: `
				<p>
	                this is content of paragraphs this is content of paragraphs this is content of paragraphs this is content of paragraphs
	                this is content of paragraphs this is content of paragraphs this is content of paragraphs this is content of paragraphs
	            </p>
	            <p>
	                this is content of paragraphs this is content of paragraphs this is content of paragraphs this is content of paragraphs
	                this is content of paragraphs this is content of paragraphs this is content of paragraphs this is content of paragraphs
	            </p>
	            <p>
	                this is content of paragraphs this is content of paragraphs this is content of paragraphs this is content of paragraphs
	                this is content of paragraphs this is content of paragraphs this is content of paragraphs this is content of paragraphs
	            </p>`
	},
	'article-two' : {
		title: 'Article-two | batman',
		heading: 'Article 2 Begins',
		date: 'Feb 10, 2017',
		content: `
			<p>
				Contents of article two. 
	        </p>
		`
	},
	'article-three': {
		title: 'Article-Three | ironman',
		heading: 'Article 3 Begins',
		date: 'Feb 15, 2017',
		content:`
			<p>
				Contents of article three. 
	        </p>
		`
	}
}
function createTemplate(data){
	var title = data.title;
	var head = data.heading;
	var content = data.content;
	var date = data.date;
	var html_template = `
	<!DOCTYPE html>
	<html>
	    <head>
	       <title>
	       		${title}
	       </title>
	       <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    </head>
	    <body>
	        <div>
	            <a href="/">Home</a>
	        </div>
	        <hr/>
	        <h3>
	        	${head}
	        </h3>
	        <div>
	            ${date}
	        </div>
	        <div>
	        	${content}
	        </div>
	    </body>
	</html>
	`;
	return html_template;
}

app.get('/:articleName', function(req, res){  // :articleName look for the names from req and expand it.
	var articleName = req.params.articleName;
   	res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var counter = 0;
app.get('/counter', function(req, res){
   counter = counter + 1;
   res.send(counter.toString());
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
