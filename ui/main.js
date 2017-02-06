// counter code
button  = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    counter = counter + 1;
    data = document.getElementById('count');
    data.innerHTML = counter;
};