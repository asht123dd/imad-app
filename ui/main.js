console.log('Loaded!');
//Change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';
//Move the image
var img=document.getElementById('madi');
var marginLeft=0;
function marginRight()
{
        marginLeft+=10;
        img.style.marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(movRight,100);
};