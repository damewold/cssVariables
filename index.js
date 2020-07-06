console.log('hello');

//in order to access the html building blocks you have let the page load first
//once aware of that you can access and manupilate to your liking 
document.addEventListener('DOMContentLoaded', function(e){
    console.log('loaded');
   handleChange()
})

function handleChange(){
    console.log('in handleChange')
}