import App from './App.svelte';

import caricaCanzoniDefault from './js/canzoni-default';

const app = new App({
	target: document.body,
	/* props: {
		name: 'world'
	} */
});

setTimeout(caricaCanzoniDefault,3000);

export default app;