var btn = document.getElementsByClassName("btn");
var info = document.getElementById("myinfo");
var count = 0;

btn[0].addEventListener("click",function(){
    var request = new XMLHttpRequest();
    request.open('GET','https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=');
    request.onload = function(){
        var data = JSON.parse(request.responseText);
        //console.log(request.responseText);
        //console.log(data.articles[0]);
        displaytext(data);
    };
    request.send();
    count++;
    if (count == 9){
        btn[0].disabled = true;
    }
});

function displaytext(data){
    info.insertAdjacentHTML('beforeend','<p>'+data.articles[count].author+'<br>'+data.articles[count].title+'<br>'+data.articles[count].description+'<br>'+data.articles[count].publishedAt+'</p><br>');    
}