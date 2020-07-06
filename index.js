console.log('hello');

//in order to access the html building blocks you have let the page load first
//once aware of that you can access and manupilate to your liking 
document.addEventListener('DOMContentLoaded', function(e){
    console.log('loaded');
   handleChange()
})

//use queryselectorall to access all the inputs you want to manipulate 

const allInputs = document.querySelectorAll('.controls input')


function handleChange(){
    console.log('in handleChange')
    //grab the database onject that contains the value px 
    const suffix = this.database.sizing ||'';
    //using the setproperty method of style to manipulate the ccs properties of the inputs
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

//add eventlisteners to the inputs so that user can interact with them

