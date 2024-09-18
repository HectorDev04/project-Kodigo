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

// Funciones para la página de juegos (games.html) 
const games = [
    {
        title: "Ghost of Tsushima",
        description: "Voces: Español Textos: Español Peso del Juego: 60 GB Requerido en Consola: 120 GB instalación: 1 Consola",
        gender: "Aventura de acción",
        platform: "PS4",
        src: "https://juegosdigitaleselsalvador.com/files/images/productos/1629507318-ghost-of-tsushima-directors-cut-ps4-pre-orden.jpg",
        price: 80
    },
    {
        title: "Star Wars Outlaws PS5",
        description: "Voces: Español Textos: Español Peso del Juego: 61 GB Requerido en Consola: 120 GB Instalación: 1 Consola",
        gender: "Acción",
        platform: "PS5",
        src: "https://storegameselsalvador.com/files/images/productos/1725379761-star-wars-outlaws-ps5-0.webp",
        price: 50
    },
    {
        title: "Star Wars Outlaws PS5",
        description: "Voces: Español Textos: Español Peso del Juego: 61 GB Requerido en Consola: 120 GB Instalación: 1 Consola",
        gender: "Acción",
        platform: "PS5",
        src: "https://storegameselsalvador.com/files/images/productos/1725379761-star-wars-outlaws-ps5-0.webp",
        price: 50
    }
];

// Función para mostrar todos los juegos
function renderGames(games) {
    const gameContainer = document.getElementById("game-container");
    if (gameContainer) {
        gameContainer.innerHTML = '';

        games.forEach(item => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('col-md-4', 'mb-4');

            const card = document.createElement('div');
            card.classList.add('card', 'h-100');

            const imageElement = document.createElement('img');
            imageElement.src = item.src;
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

            const genderElement = document.createElement('p');
            genderElement.classList.add('card-text');
            genderElement.textContent = `Género: ${item.gender}`;

            const platformElement = document.createElement('p');
            platformElement.classList.add('card-text');
            platformElement.textContent = `Plataforma: ${item.platform}`;

            const priceElement = document.createElement('p');
            priceElement.classList.add('card-text');
            priceElement.textContent = `Precio: $${item.price}`;

            cardBody.appendChild(titleElement);
            cardBody.appendChild(descriptionElement);
            cardBody.appendChild(genderElement);
            cardBody.appendChild(platformElement);
            cardBody.appendChild(priceElement);

            card.appendChild(cardBody);
            itemContainer.appendChild(card);

            gameContainer.appendChild(itemContainer);
        });
    }
}

// Función para actualizar la tienda
function updateGame() {
    renderGames(games);
}

// Inicializa la tienda solo si estamos en la página de juegos
if (document.getElementById('game-container')) {
    updateGame();
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
