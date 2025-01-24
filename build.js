const esbuild = require('esbuild')
const vue = require('esbuild-plugin-vue3')
const fs = require('fs-extra')

async function build() {

  // Build Vue component
  await esbuild.build({
    entryPoints: ['src/vue/MyComponent.vue'],
    bundle: true,
    outfile: 'dist/vue.js',
    format: 'esm',
    plugins: [vue()],
    external: ['vue'],
    loader: {
      '.css': 'css'
    }
  })

  // Build React component  
  await esbuild.build({
    entryPoints: ['src/react/MyComponent.jsx'],
    bundle: true,
    outfile: 'dist/react.js', 
    format: 'esm',
    external: ['react', 'react-dom'],
    loader: {
      '.jsx': 'jsx',
      '.css': 'css'
    }
  })

  // Build CJS bundle
  await esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/index.js',
    format: 'cjs',
    platform: 'node',
    plugins: [vue()],
    loader: {
      '.css': 'css'
    }
  })

  // Build ESM bundle
  await esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/index.esm.js',
    format: 'esm',
    platform: 'node',
    plugins: [vue()],
    loader: {
      '.css': 'css'
    }
  })
}

build().catch(err => {
  console.error(err)
  process.exit(1)
}) 