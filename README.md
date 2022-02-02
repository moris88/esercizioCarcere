# Carcere di GothamCity

Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  fascicolo = array[{},{}]
  - I dati anagrafici delle guardie => nome, cognome, eta, tipo ={guardia, detenuto}
  - I dati anagrafici dei detenuti => nome, cognome, eta, tipo ={guardia, detenuto}
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale => ID numero
      - La data di carcerazione => data carcerazione
      - La data di scarcerazione => data scarcerazione
      - Il crimine commesso => stringa
  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti.
  Prevedi la possibilià di:
    - Assumere nuove guardie, detenuti => push array
    - Schedare nuovi carcerati => delete un oggetto dell'array
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali)
  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.
  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

esempio detenuto:
var detenuto1 = {
    nome: 'Giacomo',
    cognome: "Pippo",
    eta: 25,
    tipo: 'detenuto',
    data_carcerazione: '05-11-2019',
    data_scarcerazione: '05-11-2069',
    pena: 50,
    descrizione: 'omidicio',
    evaso: true,
    deceduto: false
}

var detenuto2 = {
    nome: 'Francesco', 
    cognome: "Totti", 
    eta: 45,
    tipo: 'detenuto',
    data_carcerazione: '25-10-2018',
    data_scarcerazione: '25-10-2038',
    pena: 20,
    crimine: 'truffa ai danni dello stato',
    evaso: false,
    deceduto: false
}

esempio guardia:
var guardia1 = {
    nome: 'Maurizio', 
    cognome: "Tolomeo", 
    eta: 34,
    tipo: 'guardia',
    data_assunzione: '17-05-2020',
    descrizione: 'agente'
}

var guardia2 = {
    nome: 'Giacomo', 
    cognome: "Sardo", 
    eta: 32,
    tipo: 'guardia',
    data_assunzione: '01-01-2018',
    descrizione: 'agente'
}

esempio fascicolo:
fascicolo = [guardia1, detenuto1, guardia2, detenuto2]
