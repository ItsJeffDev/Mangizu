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

/*

    document.body.toggleAttribute(active = true);

    if (active) {
        document.body.classList.toggle('change-color');
    }
    console.log(active);

*/