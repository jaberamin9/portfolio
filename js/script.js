let allSection = document.querySelectorAll('section');
let allnavigationLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    allSection.forEach(singelSection =>{
        let top = window.scrollY;
        console.log(top);
        let offset = singelSection.offsetTop - 150;
        let height = singelSection.offsetHeight;
        let id = singelSection.getAttribute('id');

        if(top>=offset && top < offset+height){
            allnavigationLink.forEach(link => {
                link.classList.remove('select');
                document.querySelector('header nav a[href*='+id+']').classList.add('select');
            });
        }
    });
}