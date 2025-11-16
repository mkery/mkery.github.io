import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  kit: {
    appDir: 'app', // Required as the default is _app
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
  },
  preprocess: vitePreprocess(),
}
