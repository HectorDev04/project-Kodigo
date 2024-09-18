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

// Inicializar la navbar
createNavbar();

// Seleccionando el botón de agregar artículo y agregando el texto
const btnAddArt = document.getElementById("btnAddArt");
btnAddArt.innerText = "Agregar Artículo";

// Array inicial de artículos o videojuegos
let games = [
    {
        title: "Ghost of Tsushima",
        description: "Voces: Español Textos: Español Peso del Juego : 60 GB Requerido en Consola : 120 GB instalación : 1 Consola",
        gender: "Aventura de acción",
        platform: "PS4",
        src: "https://juegosdigitaleselsalvador.com/files/images/productos/1629507318-ghost-of-tsushima-directors-cut-ps4-pre-orden.jpg",
        price: 80
    },
    {
        title: "Star Wars Outlaws PS5",
        description: "Voces:  Español  Textos: Español  Peso del Juego : 61 GB  Requerido en Consola:  120 GB  Instalación: 1 Consola",
        gender: "Acción",
        platform: "PS5",
        src: "https://storegameselsalvador.com/files/images/productos/1725379761-star-wars-outlaws-ps5-0.webp",
        price: 50
    },
    {
        title: "Star Wars Outlaws PS5",
        description: "Voces:  Español  Textos: Español  Peso del Juego : 61 GB  Requerido en Consola:  120 GB  Instalación: 1 Consola",
        gender: "Acción",
        platform: "PS5",
        src: "https://storegameselsalvador.com/files/images/productos/1725379761-star-wars-outlaws-ps5-0.webp",
        price: 50
    }
];

// Función para mostrar todos los juegos
function renderGames(games) {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = '';

    games.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('game-item');

        const imageElement = document.createElement('img');
        imageElement.src = item.src;

        const titleElement = document.createElement('h4');
        titleElement.textContent = item.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;

        const genderElement = document.createElement('h5');
        genderElement.textContent = item.gender;

        const platformElement = document.createElement('span');
        platformElement.textContent = item.platform;

        const priceElement = document.createElement('h5');
        priceElement.textContent = "$" + item.price;

        itemContainer.appendChild(imageElement);
        itemContainer.appendChild(titleElement);
        itemContainer.appendChild(descriptionElement);
        itemContainer.appendChild(genderElement);
        itemContainer.appendChild(platformElement);
        itemContainer.appendChild(priceElement);

        gameContainer.appendChild(itemContainer);
    });
}

// Función para actualizar la tienda
function updateGame() {
    renderGames(games);
}

// Función para agregar un nuevo juego
function addGame(newGame) {
    games.push(newGame);
    updateGame();
}

// Función para eliminar el juego actual
function removeGame() {
    if (games.length > 0) {
        games.pop(); // Elimina el último juego
        updateGame();
    } else {
        showMessage('Debe haber al menos un juego en la lista.');
    }
}

// Función de controles para agregar y eliminar juegos
function initializeControls() {
    const newTitleInput = document.getElementById('new-title');
    const newDescriptionInput = document.getElementById('new-description');
    const newGenderInput = document.getElementById('new-gender');
    const newPlatformInput = document.getElementById('new-platform');
    const newSrcInput = document.getElementById('new-src');
    const newPriceInput = document.getElementById('new-price');
    const addBtn = document.getElementById('add-btn');
    const removeBtn = document.getElementById('remove-btn');

    addBtn.addEventListener('click', () => {
        const newGame = {
            title: newTitleInput.value,
            description: newDescriptionInput.value,
            gender: newGenderInput.value,
            platform: newPlatformInput.value,
            src: newSrcInput.value,
            price: Number(newPriceInput.value),
        };

        if (Object.values(newGame).every(value => value)) {
            addGame(newGame);
            showMessage('Juego agregado correctamente 🎉');
        } else {
            showMessage('Por favor, completa todos los campos', 'danger');
        }
    });

    removeBtn.innerText = "Eliminar último Juego";
    removeBtn.addEventListener('click', removeGame);
}

// Inicializa la tienda y los controles
updateGame();
initializeControls();

// Limpiar los campos del formulario y cerrar el modal
document.getElementById('add-btn').addEventListener('click', () => {
    document.querySelectorAll('#add-game-form input, #add-game-form textarea').forEach(input => input.value = '');
    const modal = bootstrap.Modal.getInstance(document.getElementById('videojuegoModal'));
    modal.hide();
});

// Filtrar juegos por plataforma
const filterPlatform = document.getElementById('filter-platform');
filterPlatform.addEventListener('change', (e) => {
    const platform = e.target.value;
    const filteredGames = games.filter(item => platform === 'all' || item.platform === platform);
    renderGames(filteredGames);
});

// Mostrar mensajes de retroalimentación
function showMessage(message, type = 'success') {
    const feedbackMsg = document.getElementById('feedback-msg');
    feedbackMsg.textContent = message;
    feedbackMsg.className = `alert alert-${type}`;
    setTimeout(() => feedbackMsg.textContent = '', 3000);
}
