//type js

var typed = new Typed('#element', {
  strings: ['The best code is no code at all', 'Good code is its own best documentation','Code never lies, comments sometimes do'],
  typeSpeed: 50,
  loop:true,
  fadeout:true,
  fadeOutClass: 'typed-fade-out',  
});


//form event handlers
//showing the prevoe of the forms
let inputBox =  document.getElementsByTagName('input');
Array.from(inputBox).forEach(e=>{
e.addEventListener('keyup',(option)=>{
if(option.target.id == 'url')
{
    document.getElementsByClassName(option.target.id)[0].innerText = e.value ;
}
})
});