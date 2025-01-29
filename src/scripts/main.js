AOS.init();

const dataDoEvento = new Date("Jun 05, 2025 10:00:00");
const timeStampdDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = timeStampdDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMS);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMS) / horaEmMS);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMS) / minutoEmMS);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMS) / 1000);

    document.getElementById("counter").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if(distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("timerHeppy").innerHTML = "Evento expirado";
    }
}, 1000);