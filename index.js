console.log('hello');

//in order to access the html building blocks you have let the page load first
//once aware of that you can access and manupilate to your liking 
document.addEventListener('DOMContentLoaded', function(e){
    console.log('loaded');
  //use queryselectorall to access all the inputs you want to manipulate 

const inputs = document.querySelectorAll('.controls input')


function handleChange(){
    console.log('in handleChange')
    console.log(this.name)
    //grab the dataset onject that contains the value px 
    const suffix =this.dataset.sizing||'';
    console.log(this.dataset)
    //using the setproperty method of style to manipulate the ccs properties of the inputs
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

//add eventlisteners to the inputs so that user can interact with them
console.log(inputs)
inputs.forEach(input => input.addEventListener('change', handleChange))
inputs.forEach(input => input.addEventListener('mousemove', handleChange))
})


