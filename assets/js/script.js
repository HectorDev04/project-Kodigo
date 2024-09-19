// Crear un array para las opciones del menú
const menuItems = [
    { text: 'Home', url: 'index.html' },
    { text: 'Games', url: 'games.html' },
    { text: 'Contact', url: 'contact.html' },
];

// Crear y agregar la navbar
const createNavbar = () => {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav');

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = item.url;
        a.textContent = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    const togglerButton = document.createElement('button');
    togglerButton.classList.add('navbar-toggler');
    togglerButton.type = 'button';
    togglerButton.setAttribute('data-bs-toggle', 'collapse');
    togglerButton.setAttribute('data-bs-target', '#navbarNav');
    togglerButton.setAttribute('aria-controls', 'navbarNav');
    togglerButton.setAttribute('aria-expanded', 'false');
    togglerButton.setAttribute('aria-label', 'Toggle navigation');

    const togglerIcon = document.createElement('span');
    togglerIcon.classList.add('navbar-toggler-icon');
    togglerButton.appendChild(togglerIcon);

    const collapseDiv = document.createElement('div');
    collapseDiv.classList.add('collapse', 'navbar-collapse');
    collapseDiv.id = 'navbarNav';
    collapseDiv.appendChild(ul);

    navbar.appendChild(togglerButton);
    navbar.appendChild(collapseDiv);

    document.getElementById('header-container').appendChild(navbar);
};

// Función para renderizar las noticias
function renderNews(news) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    news.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('col-md-4', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');

        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.classList.add('card-img-top');
        card.appendChild(imageElement);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const titleElement = document.createElement('h5');
        titleElement.classList.add('card-title');
        titleElement.textContent = item.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('card-text');
        descriptionElement.textContent = item.description;

        const dateElement = document.createElement('p');
        dateElement.classList.add('card-text');
        dateElement.textContent = `Fecha: ${item.date}`;

        cardBody.appendChild(titleElement);
        cardBody.appendChild(descriptionElement);
        cardBody.appendChild(dateElement);

        card.appendChild(cardBody);
        itemContainer.appendChild(card);

        newsContainer.appendChild(itemContainer);
    });
}

// Datos de noticias
const news = [
    {
        title: "Nuevo lanzamiento de PS5",
        description: "Sony ha anunciado un nuevo modelo de PS5 con mejoras significativas en rendimiento.",
        image: "https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png",
        date: "2024-09-18"
    },
    {
        title: "Actualización de Xbox Series X",
        description: "La última actualización de Xbox Series X incluye nuevas funciones de sistema y mejoras en la interfaz.",
        image: "https://www.radioshackla.com/media/catalog/product/f/d/fd9cc3cc-3533-4eec-a87d-e6abcc77aae7.0e7d395789bb5e75eb627b80cfe78b13_svrheuzogcmhtvzt.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
        date: "2024-09-17"
    },
    {
        title: "Tendencias en videojuegos 2024",
        description: "Un análisis de las principales tendencias en videojuegos para este año.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUmOUvwQzf0Zw_82dkfCo40ZO4whjzzp6sA&s",
        date: "2024-09-16"
    }
];

// Inicializar la navbar
createNavbar();

// Renderizar las noticias solo en la página de inicio
if (document.getElementById('news-container')) {
    renderNews(news);
}

// Función para mostrar mensajes de retroalimentación
function showMessage(message, type = 'success') {
    const feedbackMsg = document.getElementById('feedback-msg');
    if (feedbackMsg) {
        feedbackMsg.textContent = message;
        feedbackMsg.className = `alert alert-${type}`;
        setTimeout(() => feedbackMsg.textContent = '', 3000);
    }
}




//footer
const footer = document.getElementById("footer");
footer.innerHTML = "<h4>Made by Hector Rodriguez and Hector Maldonado Group-10  - Copyright 2024</h4>"

