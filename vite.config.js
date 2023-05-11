// import legacy from '@vitejs/plugin-legacy'

// export default {
//   // root: './src',
//   // build: {
//   //   manifest: true,
//   // },
//   // base: '/VITE-FINAL/',
//   plugins: [
//     legacy({
//       polyfills: ['es.promise.finally', 'es/map', 'es/set'],
//       modernPolyfills: ['es.promise.finally'],
//     })
//   ]
// }


import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		legacy({
      polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      modernPolyfills: ['es.promise.finally']
		})
	],
	build: {
		manifest: true,
	},
	base: '/VITE-FINAL/',
});
// 
// 
// 