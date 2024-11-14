function cambiarDescripcion(button) {

    
    const descripcion = button.getAttribute("data-descripcion");
    console.log(button.textContent);

    const tech1= `<i class="fa-brands fa-angular" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-js" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-node" style="color: #ffffff;"></i>
                        <i class="fa-solid fa-database" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-html5" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-css3" style="color: #ffffff;"></i>
`
    const tech2= `<h1>hola2</h1>`
    const tech3= `<i class="fa-brands fa-angular" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-js" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-node" style="color: #ffffff;"></i>
                        <i class="fa-solid fa-database" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-html5" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-css3" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-react" style="color: #ffffff;"></i>
                        <i class="fa-brands fa-python" style="color: #ffffff;"></i>

`




    if (button.textContent == "Alfa GL - 2024") {

        document.getElementsByClassName('technologies')[0].innerHTML = tech1;
    } else if (button.textContent == "Teleperformance - 2020") {
        document.getElementsByClassName('technologies')[0].innerHTML = tech2;
    } else if (button.textContent == "Freelance - Currently") {
        document.getElementsByClassName('technologies')[0].innerHTML = tech3;
    }
    
    
    
    
    document.getElementById("descripcion").textContent = descripcion;
    
    const buttons = document.querySelectorAll(".experience");
    
    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
}


//animaciones

function animateOnScroll(myClass,animation) {
    
const elements = document.querySelectorAll(myClass);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Añade las clases de animación cuando el elemento entra en el viewport
            entry.target.classList.add('animate__animated', animation);
        } else {
            // Elimina las clases de animación cuando el elemento sale del viewport
            entry.target.classList.remove('animate__animated', animation);
        }
    });
}, { threshold: 0.1 }); 

elements.forEach(element => {
    observer.observe(element);
});
    
}

function animateOnScrollWelcome(myClass,animation) {
    
    const elements = document.querySelectorAll(myClass);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade las clases de animación cuando el elemento entra en el viewport
                entry.target.classList.add('animate__animated', animation);
            } 
        });
    }, { threshold: 0.01 }); 
    
    elements.forEach(element => {
        observer.observe(element);
    });
        
    }


animateOnScrollWelcome('.welcome','animate__zoomInDown');
animateOnScroll('.about','animate__fadeInRight');
animateOnScroll('.work','animate__fadeInLeft');
animateOnScroll('.proyects','animate__fadeInRight');
animateOnScroll('.habilities_container','animate__fadeInLeft');
animateOnScroll('.contact','animate__fadeInRight');

