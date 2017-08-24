var submit=document.getElementById('submit_btn');

submit.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange=function(){
     
     if (request.readystate === XMLHttpRequest.Done) {
         
         if(request.status === 200) {
            var names = request.responseText;
            names=JSON.parse(names);
            var list="";
            span.innerHTML=counter.toString();
         }
         for(var i=0;i<names.length;i++){
             list='<li>'+names[i]+'</li>';
             
         }
          var ul = document.getElementById('namelist');
          ul.innerHTML=list;
     }

    };
    
    request.open('GET','http://pradeepsaba.imad.hasura-app.io/names/:name',true)
    request.send(null);
    
};