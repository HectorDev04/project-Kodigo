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
function Game({game}) {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar el contenido

    for (let i = 0; i < game.length; i++) {
        const item = game[i];

        // Crear el contenedor para cada elemento del artículo o juego
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('col-md-12', 'mb-12');

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

        // Agregar los elementos al contenedor del ítem
        cardBody.appendChild(titleElement);
        cardBody.appendChild(descriptionElement);
        cardBody.appendChild(genderElement);
        cardBody.appendChild(platformElement);
        cardBody.appendChild(priceElement);

        card.appendChild(cardBody);
        itemContainer.appendChild(card);

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
        game.splice(currentIndex, 1); // Elimina el ultimo artículo de la lista 
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

// Obtener el modal
const cartModalElement = document.getElementById('cartModal');


