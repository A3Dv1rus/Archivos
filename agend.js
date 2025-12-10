let btn = document.getElementById("btnAgendar");
let ok = document.getElementById("mensajeOk");
let vacio = document.getElementById("mensajeVacio");

let campos = [
    document.getElementById("nom"),
    document.getElementById("masc"),
    document.getElementById("fecha"),
    document.getElementById("hora"),
    document.getElementById("servicios"),
    document.getElementById("animal"),
    document.getElementById("raza")
];
btn.onclick = () => {
    try {
        campos.forEach(campo => {
            if (campo.value.trim() === "") {
                throw "Debes llenar todos los campos";
            }
        });
        ok.innerText = "Tu cita ha sido agendada correctamente";
        vacio.innerText = "";
        alert("La cita se ha agendado correctamente");
        campos.forEach(campo => campo.value = "");
    } catch (error) {
        vacio.innerText = "Debes llenar todos los campos";
        ok.innerText = "";
    }
};
