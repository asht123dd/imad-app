var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
    title:'Article One | Ashutosh Singh',
    heading:'Article One',
    date:'Aug 19, 2017',
    content:
            ` <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
            </p>
            <input type="text" id="comment2" placeholder="comment2"></input>
            <input type="submit" value="Submit" id="submit_btn3"></input>
            <ul id="commentlist2">
                
            </ul>
            `
    
},
'article-two':{title:'Article Two | Ashutosh Singh',
    heading:'Article Two',
    date:'Sep 8, 2017',
    content:
            ` <p>
                This is the content for my second article.            </p>
            <input type="text" id="comment3" placeholder="comment3"></input>
            <input type="submit" value="Submit" id="submit_btn4"></input>
            <ul id="commentlist3">
                
            </ul>
            `
    
},
'article-three':{title:'Article Three | Ashutosh Singh',
    heading:'Article Three',
    date:'Sep 13, 2017',
    content:
            ` <p>
                This is the content for my third article.            </p>
            <input type="text" id="comment4" placeholder="comment4"></input>
            <input type="submit" value="Submit" id="submit_btn5"></input>
            <ul id="commentlist4">
                
            </ul>
            `}

};
function createTemplate(data)
{
 var title=data.title;
 var date=data.date;
 var heading=data.heading;
 var content=data.content;
 

var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=devicde-width,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
         ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
    
    
    
    
    
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter+=1;
    res.send(counter.toString());
   // res.send(createTemplate(comments));
});
 var names=[];
  app.get('/submit-name',function(req,res){//URL: /submit-name?name=?????
      //Get the name from the request
      var name=req.query.name;
      names.push(name);
      //JSON:Javascript Object Notation
      res.send(JSON.stringify(names));//TODO
  });
app.get('/:articleName',function(req,res)
//articleName==article-one
//articles[articleName]=={} content object for article 4one
{
 var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
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



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
