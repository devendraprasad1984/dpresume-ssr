import {defineConfig, splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs/promises';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => ({
    plugins: [react(), splitVendorChunkPlugin()],
    server: {
        port: 4201

    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.vue'],
        alias: {
            'src': resolve(__dirname, 'src'),
        }
    },
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: "load-js-files-as-jsx",
                    setup(build) {
                        build.onLoad({filter: /src\/.*\.js$/}, async (args) => ({
                            loader: "jsx",
                            contents: await fs.readFile(args.path, "utf8"),
                        }));
                    },
                },
            ],
            loader: {
                '.js': 'jsx',
                '.ts': 'tsx'
            }
        }
    },
    //below avoids hash to be added in final production build
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/dpresume.js`,
                chunkFileNames: `assets/dpresumex.js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    }
}))
