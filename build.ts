await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  naming: '[name].mjs',
  minify: true,
  format: 'esm'
})
await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  naming: '[name].cjs',
  minify: true,
  format: 'cjs'
})