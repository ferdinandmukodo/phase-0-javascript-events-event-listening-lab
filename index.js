const input = document.getElementById('button')
input.addEventListener('click', clickAlert)
function addingEventListener(){
    function clickAlert(){
        alert("I was clicked")
    }
    const input = document.getElementById('button')
    input.addEventListener('click', clickAlert)
    // function clickAlert(){
    //     alert("I was clicked")  
    
   
}