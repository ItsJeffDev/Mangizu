const ilaw_active = document.getElementById('ilaw');
let ilaw_box = document.querySelector('.Box');
let ilaw_box2 = document.querySelector('.Box-items');
let active = true;

ilaw_active.addEventListener('click', () => {
    if (active){
        document.body.style.backgroundColor = 'white';
        ilaw_box.style.backgroundColor = '#03081a';
        ilaw_box2.style.backgroundColor = '#03081a';
        active = false;
        console.log(active);
    } else if (!active){
        document.body.style.backgroundColor = '#03081a';
        ilaw_box.style.backgroundColor = 'white';
        ilaw_box2.style.backgroundColor = 'white';
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