import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Icons from 'unplugin-icons/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3015,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    Icons({
      // experimental
      autoInstall: true,
      compiler: 'jsx',
    }),
    // VitePWA(),
  ],
});
