// counter code
button  = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //create a request
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter  = request.responseText;
                data = document.getElementById('count');
                data.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://sravi4701.imad.hasura-app.io/counter', true);
    request.send(null);
};