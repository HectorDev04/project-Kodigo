// Crear un array para las opciones del menú
const menuItems = ['Home', 'Games', 'Contact'];

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

//seleccionando el boton agregar articulo y agregarle el texto
const btnAddArt = document.getElementById("btnAddArt");
btnAddArt.innerText = "Agregar Artículo"

// Array inicial de artículos o videojuegos
let game = [
    {
        title: "Ghost of Tsushima",
        description: "Voces: Español Textos: Español Peso del Juego : 60 GB Requerido en Consola : 120 GB instalacion : 1 Consola",
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
        title: "Ghost of Tsushima",
        description: "Voces: Español Textos: Español Peso del Juego : 60 GB Requerido en Consola : 120 GB instalacion : 1 Consola",
        gender: "Aventura de acción",
        platform: "PS4",
        src: "https://juegosdigitaleselsalvador.com/files/images/productos/1629507318-ghost-of-tsushima-directors-cut-ps4-pre-orden.jpg",
        price: 80
    }
];

// Índice que rastrea el artículo actual (si es necesario)
let currentIndex = 0;

// Función para mostrar todos los artículos usando un ciclo for
function Game({ game }) {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar el contenido

    for (let i = 0; i < game.length; i++) {
        const item = game[i];

        // Crear el contenedor para cada elemento del artículo o juego
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('game-item');

        // Crear la Imagen
        const imageElement = document.createElement('img');
        imageElement.src = item.src;

        // Crear el título
        const titleElement = document.createElement('h4');
        titleElement.textContent = item.title;

        // Crear la descripción
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;


        // Crear el genero del artículo
        const genderElement = document.createElement('h5');
        genderElement.textContent = item.gender;

        // Crear la plataforma del artículo
        const platformElement = document.createElement('spam');
        platformElement.textContent = item.platform;
        // Crear el precio del artículo
        const priceElement = document.createElement('h5');
        priceElement.textContent = "$" + item.price;
        // Agregar los elementos al contenedor del ítem
        itemContainer.appendChild(imageElement);
        itemContainer.appendChild(titleElement);
        itemContainer.appendChild(descriptionElement);
        itemContainer.appendChild(genderElement);
        itemContainer.appendChild(platformElement);
        itemContainer.appendChild(priceElement);

        // Agregar el ítem completo al contenedor principal de la tienda
        gameContainer.appendChild(itemContainer);
    }
}

// Función para actualizar la tienda
function updateGame() {
    Game({ game });
}

// Función para agregar un nuevo artículo
function addGame(newGame) {
    game.push(newGame); // Agrega el nuevo artículo al array
    updateGame(); // Actualiza la tienda para mostrar el nuevo contenido
}

// Función para eliminar el artículo actual
function removeGame() {
    if (game.length > 1) { // Asegura que haya al menos un artículo
        game.splice(currentIndex, 1); // Elimina el artículo actual
        currentIndex = currentIndex % game.length; // Ajusta el índice
        updateGame(); // Actualiza el contenido de la tienda después de eliminar
    } else {
        alert('Debe haber al menos un artículo en la tienda.');
    }
}

// Función de controles para agregar y eliminar artículos de la tienda
function Controls({ addGame, removeGame }) {
    const newTitleInput = document.getElementById('new-title');
    const newDescriptionInput = document.getElementById('new-description');
    const newGenderInput = document.getElementById('new-gender');
    const newPlatformInput = document.getElementById('new-platform');
    const newSrcInput = document.getElementById('new-src');
    const newPriceInput = document.getElementById('new-price');
    const addBtn = document.getElementById('add-btn');
    const removeBtn = document.getElementById('remove-btn');

    // Agregamos un Event listener para el botón de agregar
    addBtn.addEventListener('click', () => {
        const newGame = {
            title: newTitleInput.value,
            description: newDescriptionInput.value,
            gender: newGenderInput.value,
            platform: newPlatformInput.value,
            src: newSrcInput.value,
            price: newPriceInput.value,
        };

        if (newGame.title && newGame.description && newGame.gender && newGame.platform && newGame.src && newGame.price) {
            addGame(newGame); // Llama a la función para agregar el artículo
            alert('Artículo agregado correctamente 🎉');
        } else {
            alert('Por favor, completa todos los campos'); // Mensaje de error
        }
    });
    //Agregamos el titulo al boton eliminar
    removeBtn.innerText = "Eliminar ultimo Artículo"
    // Agregamos un Event listener para el botón de eliminar
    removeBtn.addEventListener('click', () => {
        removeGame(); // Llama a la función para eliminar el artículo de la tienda
        alert('Artículo eliminado con exito');
    });
}

// Inicializa la tienda y los controles
updateGame();
Controls({ addGame, removeGame });


//seleccionamos el add-btn para poder limpiar los campos a la hora de guardar el nuevo artículo.
document.getElementById('add-btn').addEventListener('click', function () {
    // Limpiar los inputs
    document.getElementById('new-title').value = '';
    document.getElementById('new-description').value = '';
    document.getElementById('new-gender').value = '';
    document.getElementById('new-platform').value = '';
    document.getElementById('new-src').value = '';
    document.getElementById('new-price').value = '';

    // Cerrar el modal
    let modal = bootstrap.Modal.getInstance(document.getElementById('videojuegoModal'));
    modal.hide();
});

//footer
const contenidoFooter = document.getElementById("footer");
contenidoFooter.innerHTML = "<h4>Made by Hector Rodriguez and Hector Maldonado  - Copyright 2024</h4>"