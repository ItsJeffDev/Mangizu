const ilaw_active = document.getElementById('ilaw');
let active = true;

document.addEventListener('click', function(event) {

    const menuToggle = document.getElementById('menu-toggle');
  
    const hamburger = document.querySelector('.hamburger');
  

    // Check if the click was outside the hamburger and the menu
    if (!hamburger.contains(event.target) && !menuToggle.contains(event.target)){
        menuToggle.checked = false;
    }
  });

ilaw_active.addEventListener('click', () => {
    if (active){
        document.body.style.backgroundColor = 'white';
        active = false;
        console.log(active);
    } else if (!active){
        document.body.style.backgroundColor = '#03081a';
        active = true;
        console.log(active);
    }
})


 let names = ["jeff", "kolin", "miranda"];

 let sortedNames = names.sort()

 let input = document.getElementById('search');
 

 input.addEventListener('keyup', (e) => {
    for (let i of sortedNames){
        if (i.toLowerCase().startsWith(input.ariaValueMax.toLowerCase()) && input.value != ""){
            
        }
    }
 })
/*

    document.body.toggleAttribute(active = true);

    if (active) {
        document.body.classList.toggle('change-color');
    }
    console.log(active);

*/