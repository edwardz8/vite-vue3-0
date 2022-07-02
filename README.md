# vite-vue3-0

Vue 3 in Vite.

// api/pokemon.js
export const pokeapi  = 'https://pokeapi.co/api/v2/pokemon'

const state = reactive({
    pokemon: [],
    urlIdLookup: {}
})

fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        state.pokemon = data.results
        <!-- 
        state.urlIdLookup = data.results.reduce((acc, cur, idx ) => acc = { ...acc, [cur.name]:idx+1 }, {} )
         -->
    })


To retrieve single pokemon / using setup()

const route = useRoute()
const state = reactive({
    pokemon: null
})

fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        state.pokemon = data
    })

    return { ...toRefs(state) }


1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
