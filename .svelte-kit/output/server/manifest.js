export const manifest = {
	appDir: "internal",
	assets: new Set([".htaccess","canzoni/Dance Monkey.pro","canzoni/Elefantens Vuggevise.pro","canzoni/Hallelujah Italiano.pro","canzoni/Julies Sprog - Melodi Benny Holst - Tekst Benny Holst.pro","canzoni/Kald det Kærlighed.pro","canzoni/Livstræet - Hans HolmErik Lindebjerg.pro","canzoni/Magi i luften.pro","canzoni/Ninna Nanna degli Animaletti.pro","canzoni/Papirsklip.pro","canzoni/Regnvejrsdag i November.pro","canzoni/Rolling in the Deep.pro","canzoni/Sig du kan li mig.pro","canzoni/Tusind stykker.pro","favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-f3fa2666.js","js":["start-f3fa2666.js","chunks/index-5db440d4.js","chunks/index-2e263ff2.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "aggiungi",
				pattern: /^\/aggiungi\/?$/,
				names: [],
				types: [],
				path: "/aggiungi",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "canzone/[canzoneId]",
				pattern: /^\/canzone\/([^/]+?)\/?$/,
				names: ["canzoneId"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
