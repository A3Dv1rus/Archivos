let btn = document.getElementById("btnAgendar");
let ok = document.getElementById("mensajeOk");

btn.onclick = () => {
    ok.innerText = "Tu cita ha sido agendada correctamente";
};