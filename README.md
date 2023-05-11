# INICIAR CON VITE

```git
   npm create vite@latest
```

## Configurar Vite ( vite.config.js )

Crear en la raiz del proyecto el archivo `vite.config.js`
Debe considerar que para el uso del plugins debe instalar la dependencia `@vitejs/plugin-legacy` y además debe instalar `terser`.

```git
    npm i @vitejs/plugin-legacy
    npm add -D terser
```
### Mayor información

[ REFERENCIA https://github.com/vitejs/vite/tree/main/packages/plugin-legacy ](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

```javascript

    // Llamamos a la dependencia
    import legacy from '@vitejs/plugin-legacy';
    // Sacamos el metodo defineConfig
    import { defineConfig } from 'vite';
    // Dejamos que la función sea exportable
    export default defineConfig({
        // Se configura el plugin para retro compatibilidad
        plugins: [
            legacy({
            polyfills: ['es.promise.finally', 'es/map', 'es/set'],
            modernPolyfills: ['es.promise.finally']
            })
        ],
        // Se agrega la base carpeta donde se encuentra el proyecto
        base: '/VITE-FINAL/',
    });

```

## Crear las acciones para que se realice el Deploy

Debe crear en la raiz del proyecto la carpeta `.github` y la sub carpeta `workflows`. En la sub carpeta debe crear el archivo `master.yml` ( El nombe del archivo debe ser el mismo de la rama )

~~~
	-.github/
        |workflows
            |– master.yml       
~~~

### Mayor información

[ REFERENCIA https://vitejs.dev/guide/static-deploy.html ](https://vitejs.dev/guide/static-deploy.html)

```yml

    # Simple workflow for deploying static content to GitHub Pages
    name: Deploy static content to Pages

    on:
    # Runs on pushes targeting the default branch
    push:
        branches: ['master']

    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:

    # Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
    permissions:
    contents: read
    pages: write
    id-token: write

    # Allow one concurrent deployment
    concurrency:
    group: 'pages'
    cancel-in-progress: true

    jobs:
    # Single deploy job since we're just deploying
    deploy:
        environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
        - name: Checkout
            uses: actions/checkout@v3
        - name: Set up Node
            uses: actions/setup-node@v3
            with:
            node-version: 18
            cache: 'npm'
        - name: Install dependencies
            run: npm install
        - name: Build
            run: npm run build
        - name: Setup Pages
            uses: actions/configure-pages@v3
        - name: Upload artifact
            uses: actions/upload-pages-artifact@v1
            with:
            # Upload dist repository
            path: './dist'
        - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v1

```