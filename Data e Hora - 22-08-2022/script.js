let date = new Date();
        let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.write(date.toLocaleDateString('pt-BR', options));


setInterval(function horarioAtual() {

    let hora = new Date().toLocaleTimeString();
            
    document.getElementById("rel").innerHTML = hora;
            
    }, 1000)