import { writable, get } from "svelte/store";

type nomiPercorsi = 'home' | 'canzoni' | 'canzone' | 'aggiungi';
interface Percorso {
    uri: nomiPercorsi,
    params: Params
}
interface Params {
    [key: string]: any
}

let storageKey = 'accorda-percorso';

const initialState: Percorso = {uri: 'home', params: {}};
export const percorsoStore = writable<Percorso>(initialState);

class Percorsatore {
    constructor() {
        this.carica();

		percorsoStore.subscribe((percorso) => this.salva(percorso));
    }

    naviga(uri: string, params?: Params) {
        percorsoStore.update((percorso) => {
            percorso.uri = uri; 
            window.location.hash = uri;
            if (typeof params !== 'undefined') {
                percorso.params = params;
            } 
            return percorso
        });
    }

    carica() {
		const db = localStorage.getItem(storageKey);
		const percorso = JSON.parse(db || JSON.stringify(initialState));
		
		percorsoStore.set(percorso);
	}

    salva(percorso: Percorso) {
		localStorage.setItem(storageKey, JSON.stringify(percorso));
	}
}

export default new Percorsatore();