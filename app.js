const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo() {
    if (inputAmigo.value.trim() !== "") {  // Verificar que no esté vacío
        listaAmigos.push(inputAmigo.value.trim());
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value.trim()}</li>`;
        inputAmigo.value = "";  // Limpiar el input después de agregar
    }
}
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        ulResultado.innerHTML = `<li>No hay amigos en la lista. Agrega algunos primero.</li>`;
        return;
    }
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}




  



