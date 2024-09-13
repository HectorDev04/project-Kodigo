// Crear un array para las opciones del menú
const menuItems = ['Home', 'Projects', 'Contact'];

// Crear navbar y agregar clase
const navbar = document.createElement('nav');
navbar.classList.add('nav-container');

// Crear ul y agregar clase
const ul = document.createElement('ul');
ul.classList.add('ul-menu');

// Crear li y a para cada opción del menú
menuItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('nav-items');

    const a = document.createElement('a');
    a.href = `${item.toLowerCase().replace('', '-')}`;
    a.textContent = item;

    // Insertar a en li y li en ul
    li.appendChild(a);
    ul.appendChild(li);
});

// Insertar ul en navbar y navbar en el contenedor del header
navbar.appendChild(ul);
document.getElementById('header-container').appendChild(navbar);
