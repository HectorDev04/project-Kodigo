// Crear un array para las opciones del menú
const menuItems = ['Home', 'Projects', 'Contact'];

// Crear navbar y agregar clase
const navbar = document.createElement('nav');
navbar.classList.add('navbar');

// Crear ul y agregar clase
const ul = document.createElement('ul');
ul.classList.add('menu-navbar');

// Crear li y a para cada opción del menú
menuItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('nav-item');

    const a = document.createElement('a');
    a.classList.add('nav-link')

    // Asignar enlaces segun el valor del item
    a.href = item === 'Home' ? 'https://www.google.com' :
        item === 'Projects' ? 'https://academy.kodigo.org/course/view.php?id=98#' :
            item === 'Contact' ? 'https://academy.kodigo.org/' : '#';

    a.textContent = item;

    // Insertar a en li y li en ul
    li.appendChild(a);
    ul.appendChild(li);

});

// Insertar ul en navbar y navbar en el contenedor del header
navbar.appendChild(ul);
document.getElementById('header-container').appendChild(navbar);
