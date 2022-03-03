import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';


const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		}),
		appDir: '_app',
		files: {
			assets: 'static'
		}
	}
};

export default config;
