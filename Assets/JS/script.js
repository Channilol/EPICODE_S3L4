const arrayIndiceNumeri = []
const arrayNumeriEstratti = []

for (let i = 0; i < 76; i++) {
    arrayIndiceNumeri.push(i)
}

const creazioneTabellaTombola = () => {
    const contenitoreTabellaNumeri = document.getElementById('contenitoreTombola')
    for (let i = 0; i < arrayIndiceNumeri.length; i++) {
        const divNumero = document.createElement('div')
        divNumero.id = [i]
        const valoreNumero = document.createElement('h3')
        valoreNumero.innerText = i + 1
        divNumero.appendChild(valoreNumero)
        contenitoreTabellaNumeri.appendChild(divNumero)
    }
}

const clickBottone = () => {
    const bottoneGeneraNumero = document.querySelector('button')
    bottoneGeneraNumero.addEventListener('click', generazioneNumeroRandom)
}

/* const generazioneNumeroRandom = () => {
    let numeroGenerato = Math.floor(Math.random() * 76) + 1
    const indiceNumeroGenerato = numeroGenerato - 1

    if (!arrayNumeriEstratti.includes(numeroGenerato)) {
        arrayNumeriEstratti.push(numeroGenerato)
        const numeroSelezionato = document.getElementById(indiceNumeroGenerato)
        numeroSelezionato.style.backgroundColor = 'blueviolet'
    } else {
        console.log("ciao")
    }
} */

const generazioneNumeroRandom = () => {
    let numeroGenerato;
    let indiceNumeroGenerato;

    do {
        numeroGenerato = Math.floor(Math.random() * 76) + 1;
        indiceNumeroGenerato = numeroGenerato - 1;
    } while (arrayNumeriEstratti.includes(numeroGenerato));

    arrayNumeriEstratti.push(numeroGenerato);
    const numeroSelezionato = document.getElementById(indiceNumeroGenerato);
    numeroSelezionato.classList.add('selected')
    const testoNumero = document.getElementById('testoNumeroGenerato')
    testoNumero.innerText = `Il numero pescato è ${numeroGenerato}`
}


const creazioneSchedaPersonale = () => {
    const contenitoreScheda = document.getElementById('contenitoreSchedaPersonale')
    for (let i = 0; i < 24; i++) {
        const divNumero = document.createElement('div')
        divNumero.id = [i]
        const valoreNumero = document.createElement('h3')
        valoreNumero.innerText = Math.floor(Math.random() * 76) + 1;
        divNumero.appendChild(valoreNumero)
        contenitoreScheda.appendChild(divNumero)
    }
}


creazioneTabellaTombola()
clickBottone()
creazioneSchedaPersonale()