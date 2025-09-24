// --- Referencias ---
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// --- Modal simple creado 100% desde JS (sin estilos) ---
function obtenerDialog() {
  let dlg = document.getElementById("cajaEmergente");
  if (!dlg) {
    dlg = document.createElement("dialog");
    dlg.id = "cajaEmergente";

    const p = document.createElement("p");
    p.id = "textoCaja";

    const form = document.createElement("form");
    form.setAttribute("method", "dialog");
    const btn = document.createElement("button");
    btn.textContent = "Cerrar";
    form.appendChild(btn);

    dlg.appendChild(p);
    dlg.appendChild(form);
    document.body.appendChild(dlg);
  }
  return dlg;
}

function mostrarCaja(mensaje) {
  const dlg = obtenerDialog();
  const p = dlg.querySelector("#textoCaja");
  p.textContent = mensaje;
  if (typeof dlg.showModal === "function") {
    dlg.showModal();
  } else {
    // Fallback por si el navegador no soporta <dialog>
    alert(mensaje);
  }
}

// --- Lógica ---
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  // Validaciones
  if (nombre.length === 0) {
    mostrarCaja("⚠️ Debes escribir un nombre antes de añadir");
    return;
  }

  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!soloLetras.test(nombre)) {
    mostrarCaja("⚠️ El nombre solo puede contener letras y espacios");
    return;
  }

  const existe = listaAmigos.some(
    (amigo) => amigo.toLowerCase() === nombre.toLowerCase()
  );
  if (existe) {
    mostrarCaja("⚠️ Este nombre ya se encuentra registrado");
    return;
  }

  // Agregar y confirmar
  listaAmigos.push(nombre);
  ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
  inputAmigo.value = "";
  mostrarCaja("✅ Nombre agregado correctamente");
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    mostrarCaja("⚠️ No hay amigos en la lista. Agrega algunos primero.");
    return;
  }

  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
  mostrarCaja(`🎉 El amigo secreto es: ${amigoSecreto}`);
}
