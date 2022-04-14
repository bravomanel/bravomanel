const finalDate = new Date('Apr 14 2022 17:00:00 GMT-0300').getTime();

const x = setInterval(function() {
    const now = new Date().getTime();

    const distance = finalDate - now;

    const hour = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));

    if (hour < 10) {
        Fhour = '0'+ hour;
    } else {Fhour = hour}

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    if (minutes < 10) {
        Fminutes = '0'+ minutes;
    } else {Fminutes = minutes}

    const seconds = Math.floor((distance % (1000 * 60) / 1000));

    if (seconds < 10) {
        Fseconds = '0'+ seconds;
    } else {Fseconds = seconds}

    document.getElementById("timer").innerHTML = Fhour + ':' + Fminutes + ':' + Fseconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = "00:00:00";
        alert("Emanuel está extremamente feliz neste momento")
    }
}, 1000)
