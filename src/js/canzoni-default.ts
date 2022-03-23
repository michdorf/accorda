import Canzoni, { canzoniStore } from "./canzoni";
/**
 * Carica una canzone dalla cartella di canzoni default
 * @param fn Without extension
 */
function caricaCanzone(fn: string) {
    return fetch(new Request(`/canzoni/${fn}.pro`)).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${ response.status }`);
        }

        response.text().then((testo) => {
            if (!essisteCanzone(testo)) {
                Canzoni.agg({
                    formato: 'chords-pro',
                    plain: testo,
                    creato: new Date()
                });
            } else {
                console.log(`Canzone ${testo.substring(0,40)} essiste gia'`);
            }
        });
    })
}

let tuttiCanzoni = [];
canzoniStore.subscribe((canzoni) => {tuttiCanzoni = canzoni});
function essisteCanzone(testo: string) {
    return tuttiCanzoni.map((canzone) => canzone.plain).filter((testoCanzone) => testoCanzone.substring(0,25) == testo.substring(0,25)).length > 0;
}

export default async function caricaCanzoniDefault() {
    const nomiFile = ['Dance Monkey', 'Elefantens Vuggevise'];

    for (let i = 0; i < nomiFile.length; i++) {
        await caricaCanzone(nomiFile[i]);
    }
}