
# Il Carcere di Gotham City

  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:

  - I dati anagrafici delle guardie 
  - I dati anagrafici dei detenuti 
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso
  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti.
  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
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
        nome: 'Antonina', 
        cognome: "Topolina", 
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
        cognome: "Pluto", 
        eta: 34,
        tipo: 'guardia',
        data_assunzione: '17-05-2020',
        descrizione: 'agente'
    }

    var guardia2 = {
        nome: 'Mattia', 
        cognome: "Paperino", 
        eta: 32,
        tipo: 'guardia',
        data_assunzione: '01-01-2018',
        descrizione: 'agente'
    }

esempio fascicolo:
    fascicolo = [guardia1, detenuto1, guardia2, detenuto2]
