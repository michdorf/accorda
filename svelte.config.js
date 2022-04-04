import autoAdapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const is_vercel = typeof process.env.IS_VERCEL !== "undefined" ? process.env.IS_VERCEL : false;
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: is_vercel ? autoAdapter() : adapter({
			fallback: '200.html'
		}),

		paths: {
			base: (dev && !is_vercel) ? '' : '/chords',
		}, 

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},

		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		appDir: 'internal',

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
