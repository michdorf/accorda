import Memo from 'moduli/memo/memo'

const canzone = {
    formato: 'chords-pro',
    plain: 'Te[Em]st',
    creato: new Date()
}

let memo = new Memo('accorda', ['canzoni']);
memo.suPronto(() => {
    memo.inserisci('canzoni', canzone, () => {
        alert("Insertet!");
    });
})

export default memo;