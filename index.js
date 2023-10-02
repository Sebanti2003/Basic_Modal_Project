const button=document.querySelector('.but');
let modal=document.querySelector('.modal');
const cross=document.querySelector('.cross');
const others=document.querySelector('.myintro');
button.addEventListener('click',function(){
    console.log("clicked");
    modal.style.transform='scale(1)';
    modal.style.transition='transform 0.4s ease-in-out'
    others.style.opacity='0.5';
    others.style.transition='all 0.4s ease-in-out';

})
cross.addEventListener('click',function(){
    modal.style.transform='scale(0)';
    modal.style.transition='transform 0.4s ease-in-out';
    others.style.opacity='1';
    others.style.transition='all 0.4s ease-in-out';

})