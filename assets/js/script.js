// Navbar dinámica
const createNavbar = () => {
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">DOM de Videojuegos</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="games.html">Games</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.getElementById('header-container').innerHTML = navbar;
};

// Noticias (Index Page)
function renderNews(news) {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return; // Evitar errores si el contenedor no está presente
    newsContainer.innerHTML = '';

    news.forEach(item => {
        const card = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text"><small class="text-muted">Fecha: ${item.date}</small></p>
                    </div>
                </div>
            </div>`;
        newsContainer.innerHTML += card;
    });
}

// Datos de noticias para la página de inicio
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

// Catálogo de Videojuegos (Games Page)
const games = [
    {
        title: "Ghost of Tsushima",
        description: "Aventura épica en un mundo abierto con combate y exploración en PS4.",
        gender: "Aventura",
        platform: "PS4",
        src: "https://juegosdigitaleselsalvador.com/files/images/productos/1629507318-ghost-of-tsushima-directors-cut-ps4-pre-orden.jpg",
        price: 80
    },
    {
        title: "Star Wars Outlaws",
        description: "Acción y aventura en el universo de Star Wars, disponible en PS5.",
        gender: "Acción",
        platform: "PS5",
        src: "https://storegameselsalvador.com/files/images/productos/1725379761-star-wars-outlaws-ps5-0.webp",
        price: 50
    }
];

// Función para renderizar los juegos en la página de catálogo
function renderGames(games) {
    const gameContainer = document.getElementById('game-container');
    if (!gameContainer) return; // Evitar errores si el contenedor no está presente
    gameContainer.innerHTML = '';

    games.forEach(item => {
        const card = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${item.src}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text"><strong>Género:</strong> ${item.gender}</p>
                        <p class="card-text"><strong>Plataforma:</strong> ${item.platform}</p>
                        <p class="card-text"><strong>Precio:</strong> $${item.price}</p>
                    </div>
                </div>
            </div>`;
        gameContainer.innerHTML += card;
    });
}

// Función para agregar un nuevo juego
document.getElementById('add-btn')?.addEventListener('click', () => {
    const title = document.getElementById('new-title').value;
    const description = document.getElementById('new-description').value;
    const gender = document.getElementById('new-gender').value;
    const platform = document.getElementById('new-platform').value;
    const src = document.getElementById('new-src').value;
    const price = document.getElementById('new-price').value;

    const newGame = {
        title,
        description,
        gender,
        platform,
        src,
        price: parseFloat(price)
    };

    games.push(newGame);
    renderGames(games);

    // Cerrar el modal
    const modalElement = document.getElementById('videojuegoModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
});

// Función para eliminar el último juego
document.getElementById('remove-btn')?.addEventListener('click', () => {
    games.pop();
    renderGames(games);
});

// Inicializar la navbar y los contenidos específicos de cada página
createNavbar();

// Renderizar contenido según la página en la que estamos
if (document.getElementById('news-container')) {
    renderNews(news); // Renderizar noticias en index.html
}
if (document.getElementById('game-container')) {
    renderGames(games); // Renderizar juegos en games.html
}
