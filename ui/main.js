var button=document.getElementById('counter');
var counter=0;
button.onclick = function() {
    var request = new XMlHttpRequest();
    
    request.onreadystatechange=function(){
     
     if (request.readystate === XMlHttpRequest.Done) {
         
         if(request.status === 200) {
            var counter = request.responsetext;
            var span = document.getElementById('count');
            span.innerHTML=counter.toString();
         }
         
     }

    };
    
    request.open('GET','http://pradeepsaba.imad.hasura-app.io/counter',true)
    request.send(null);
    
};