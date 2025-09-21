let listaAmigos = []

function agregarAmigo() {
    let input = document.getElementById('amigo');

    console.log(listaAmigos);
    if (valorDeUsuario === "") {
        // Si el campo está vacio, mostrar alerta
        alert ('Por favor, inserte un nombre');
    } else {
        // Si no está vacío, agregar el nombre a la lista
        listaAmigos.push(valorDeUsuario);
    }
    limpiarCaja();
}

// Vaciar el campo de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}