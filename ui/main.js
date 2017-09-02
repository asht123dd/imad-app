//Counter code
var button=document.getElementById('counter');

button.onclick=function(){
    //Create a request object
    var request =new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status===200)
            {
            var counter=request.responseText;
            var span=document.getElementById('count');
    span.innerHTML=counter.toString();
            }
        }
        //Not done yet
    };
    
   //Make the request
    request.open('GET','http://asht123dd.imad.hasura-app.io/counter',true);
    request.send(null);
};
//Submit name

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //Make a request to the server and send a name
//Capture a lsit of names and render it as a list.
var request =new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status===200)
            {
     //Capture a list of names and render it as a list
     var names=request.responseText;
     names=JSON.parse(names);
     var list='';
     for(var i=0;i<names.length;i++)
     {
         list+='<li>'+names[i]+'</li>';
     }
            var ul=document.getElementById('namelist');
            ul.innerHTML=list;
                
            }
        }
        //Not done yet
    };
    
   //Make the request
   var nameInput=document.getElementById('name');
var name=nameInput.value;
    request.open('GET','http://asht123dd.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
    
};
var submit2=document.getElementById('submit_btn2');
submit2.onclick=function(){
    //Make a request to the server and send a comment
//Capture a lsit of comments and render it as a list.
var request =new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status===200)
            {
     //Capture a list of names and render it as a list
                var comments=request.responseText;
                comments=JSON.parse(comments);
                 var list='';
                 for(var i=0;i<comments.length;i++)
                 {
                     list+='<li>'+comments[i]+'</li>';
                 }
                var ul=document.getElementById('commentlist');
                ul.innerHTML=list;
                
            }
        }
        //Not done yet
};
    
   //Make the request
   var nameInput=document.getElementById('comment');
var name=nameInput.value;
    request.open('GET','http://asht123dd.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
    
};