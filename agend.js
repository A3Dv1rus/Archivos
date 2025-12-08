let btn = document.getElementById("btnAgendar");
let ok = document.getElementById("mensajeOk");
let Vacio = document.getElementById("mensajeVacio");

document.querySelectorAll('.VolverPrincipal').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});

let campos = [
    document.getElementById("nom"),
    document.getElementById("masc"),
    document.getElementById("fecha"),
    document.getElementById("hora"),
    document.getElementById("servicios"),
]

btn.onclick = () => {
    ok.innerText = "Tu cita ha sido agendada correctamente";
};

btn.onclick = () => {
    try {
        campos.forEach(campo => {
            if (campo.value.trim() === "") {
                throw "Debes llenar todos los campos";
            }
        });
        ok.innerText = "Tu cita ha sido agendada correctamente";
        Vacio.innerText = "";

    } catch (error) {
        Vacio.innerText = "Debes llenar todos los campos";
        ok.innerText = "";
    }
};