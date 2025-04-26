const ilaw_active =  document.getElementById('ilaw');
const ilaw_li =  document.querySelectorAll('.nav-links a');

ilaw_active.addEventListener('click' , () => {
    document.body.classList.toggle('change-color');

    ilaw_li.forEach(link => {
        link.classList.toggle('nav-links-dark');
    });
})