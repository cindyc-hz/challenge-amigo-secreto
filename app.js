let listaAmigos = []

function agregarAmigo() {
    let input = document.getElementById('amigo');
    // Usuario no puede agregar solo espacios
    let valorDeUsuario = input.value.trim();

    console.log(listaAmigos);
    if (valorDeUsuario === "") {
        // Si el campo está vacio, mostrar alerta
        alert ('Por favor, inserte un nombre');
    } else {
        // Si no está vacío, agregar el nombre a la lista
        listaAmigos.push(valorDeUsuario);
        mostrarAmigos();
    }
    limpiarCaja();
}

function mostrarAmigos() {

    // Llamar a la lista en HTML
    let listaEnHTML = document.getElementById('listaAmigos')
    // limpiar la lista
    listaEnHTML.innerHTML = "";
    // Recorrer el array en bucle
    for (let i = 0; i < listaAmigos.length; i++) {
        // Agregar los elementos a la lista
        const amigo = listaAmigos[i];
        const nuevoElementoLista = document.createElement('li');
        nuevoElementoLista.textContent = amigo;
        listaEnHTML.appendChild(nuevoElementoLista);
    }
}

// Vaciar el campo de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}