import {writable, get} from 'svelte/store'

const storageKey = "chords-canzoni"

export interface CanzoneInterfaccia {
	formato: "chords-pro" | "ultimate-guitar";
	plain: string;
	creato: Date;
}

export let canzoniStore = writable<CanzoneInterfaccia[]>([]);
class Canzoni {
	constructor() {
		this.carica();

		canzoniStore.subscribe((canzoni) => this.salva(canzoni));
	}

	agg(canzone: CanzoneInterfaccia) {
		// this.canzoni = [...this.canzoni, canzone];
		canzoniStore.update((canzoni) => [...canzoni, canzone]);
	}

	trova(canzoneId: number) {
		const canzoni = get(canzoniStore);
		if (canzoneId >= canzoni.length) {
			return undefined;
		}
		return canzoni[canzoneId];
	}

	carica() {
		const db = localStorage.getItem(storageKey);
		const canzoni = JSON.parse(db || "[]").map((item) => {
			item.creato = new Date(item.creato * 1000);
			return item;
		});
		
		canzoniStore.set(canzoni);
	}

	salva(canzoni: CanzoneInterfaccia[]) {
		const data = canzoni.map((item) => {
			if (typeof item.creato !== "number") {
				// @ts-ignore convert date to number when saving
				item.creato = Math.round(item.creato.getTime()/1000);
			}
			return item;
		});
		localStorage.setItem(storageKey, JSON.stringify(data));
	}
}

export default new Canzoni();