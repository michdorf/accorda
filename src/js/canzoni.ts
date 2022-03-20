import { browser } from "$app/env";
import {writable} from 'svelte/store'

const storageKey = "chords-canzoni"

export interface CanzoneInterfaccia {
	formato: "chords-pro" | "ultimate-guitar";
	plain: string;
	creato: Date;
}

export let canzoniStore = writable<CanzoneInterfaccia[]>([]);
class Canzoni {
	canzoni: CanzoneInterfaccia[] = [];

	constructor() {
		this.carica();

		canzoniStore.subscribe((canzoni) => this.salva());
	}

	agg(canzone: CanzoneInterfaccia) {
		this.canzoni = [...this.canzoni, canzone];
		canzoniStore.update((canzoni) => [...canzoni, canzone]);
	}

	trova(canzoneId: number) {
		if (canzoneId >= this.canzoni.length) {
			return undefined;
		}
		return this.canzoni[canzoneId];
	}

	carica() {
		if (!browser) {
			return; // localStorage not awailable on server
		}
		const db = localStorage.getItem(storageKey);
		this.canzoni = JSON.parse(db || "[]").map((item) => {
			item.creato = new Date(item.creato * 1000);
			return item;
		});
	}

	salva() {
		if (!browser) {
			return; // localStorage not awailable on server
		}
		
		const data = this.canzoni.map((item) => {
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