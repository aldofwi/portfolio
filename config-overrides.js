const webpack = require('webpack');
/*
const nodeExternals = require('webpack-node-externals');

    {
    target: 'node';
    externals: {
        express: 'express',
        },
    }
*/

module.exports = function override(config) {

		const fallback = config.resolve.fallback || {}; 
		
        Object.assign(fallback, { 
    	    "crypto":   require.resolve("crypto-browserify"), 
            "stream":   require.resolve("stream-browserify"),
            "path":     require.resolve("path-browserify"), 
            "assert":   require.resolve("assert"), 
            "http":     require.resolve("stream-http"), 
            "https":    require.resolve("https-browserify"),
            "zlib":     require.resolve("browserify-zlib"),
            "os":       require.resolve("os-browserify"), 
            "url":      require.resolve("url"),
            "fs":           false,
            "async_hooks":  false,
            "target":   'node',
            })

        config.resolve.fallback = fallback; 
        config.plugins = (config.plugins || []).concat([ 
   	        new webpack.ProvidePlugin({ 
    	        process: 'process/browser', 
                Buffer: ['buffer', 'Buffer'] 
            }) 
        ]) 

   return config; 
}

