var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/:submit-name', function (req, res) {
  var name=req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});


var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});

var articles={
    
    'article-one':{
    title:'Article-one Pradeep Saba',
    heading:'article-one',
    date:'22-08-2017',
    content: `<p>
             This is article-one This is article-one This is article-one This is article-one This is article-one
             This is article-oneThis is article-oneThis is article-oneThis is article-oneThis is article-one
        </p> 
        <p>
            This is content This is article-one This is article-one This is article-one This is article-one
            This is article-one This is article-one This is article-one This is article-one
            This is article-oneThis is article-one
        </p>
        <p>
            This is content This is article-one This is article-one This is article-one This is article-one
            This is article-one This is article-one This is article-one This is article-one
            This is article-oneThis is article-one
        </p>`
        
    },
    'article-two':{
    title:'Article-Two Pradeep Saba',
    heading:'article-two',
    date:'22-08-2017',
    content: `<p>
             This is article-one This is article-one This is article-one This is article-one This is article-one
             This is article-oneThis is article-oneThis is article-oneThis is article-oneThis is article-one
        </p> 
        <p>
            This is content This is article-one This is article-one This is article-one This is article-one
            This is article-one This is article-one This is article-one This is article-one
            This is article-oneThis is article-one
        </p>
        <p>
            This is content This is article-one This is article-one This is article-one This is article-one
            This is article-one This is article-one This is article-one This is article-one
            This is article-oneThis is article-one
        </p>`
        
    },
    'article-three':{
    title:'Article-Three Pradeep Saba',
    heading:'article-Three',
    date:'22-08-2017',
    content: `<p>
             This is article-one This is article-one This is article-one This is article-one This is article-one
             This is article-oneThis is article-oneThis is article-oneThis is article-oneThis is article-one
        </p> 
        <p>
            This is content This is article-one This is article-one This is article-one This is article-one
            This is article-one This is article-one This is article-one This is article-one
            This is article-oneThis is article-one
        </p>
        <p>
            This is content This is article-one This is article-one This is article-one This is article-one
            This is article-one This is article-one This is article-one This is article-one
            This is article-oneThis is article-one
        </p>`
        
    }
    
};

function createTemplate(data)
{
    
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <HTML>
<head>
    <TITLE>
            ${title}
    </TITLE>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
</head>
    <body>
        <div>
           <a href="/">HOME</a>
        </div> 
         <HR/>   
        <h3>
           ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div class="container">
           ${content}
        </div>
    </body>
</HTML>`
;
return htmlTemplate;
}


app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
    res.send(createTemplate(articles[articlename]));
});





app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/harin.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'harin.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
