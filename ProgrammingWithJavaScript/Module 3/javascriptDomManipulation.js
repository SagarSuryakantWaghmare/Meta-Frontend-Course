// IN the tab of the console
// const h1=document.body.innerHTML="Sagar is so smart";
// console.log(h1);

// we can also set atrributes also to the h1
// h1.setAttribute('id','sub-heading')

// Javascript selector
// const h1=document.querySelector('h1');
// console.log(h1)

// const h2=document.querySelectorAll('p');
// console.log(h2)

// const h3=document.getElementById('h2');
// console.log(h3)

// const h4=document.getElementsByTagName('h5');
// console.log(h4)

// const p=document.getElementsByClassName('moto')
// console.log(p)

// Event handling
const target=document.querySelector('body');
function handleclick(){
    console.log('clicked the body')
}
target.addEventListener('click',handleclick)
