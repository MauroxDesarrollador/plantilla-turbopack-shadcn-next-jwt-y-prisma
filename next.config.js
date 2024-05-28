module.exports = {
    experimental: {
      turbo: {
        // Enable Turbopack
        enabled: true,
  
        // Configure module resolution using aliases
        resolveAlias: {
          // Example: Map 'my-module' to a specific file or directory
          'my-module': './src/my-module.js',
          // Example: Map 'react' to a specific version
          'react': './node_modules/react/index.js'
        },
  
        // Configure file extensions to be resolved
        resolveExtensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
  
    // Other Next.js configuration options
    //...
  }