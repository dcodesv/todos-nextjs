module.exports = {
    important: true,
    purge: {
      content: ['./pages/**/*.js']
    },
    theme: {},
    variants: {
      animation: ['responsive', 'motion-safe', 'motion-reduce']
    },
    plugins: [],
    future: {
      purgeLayersByDefault: true,
    },
  };