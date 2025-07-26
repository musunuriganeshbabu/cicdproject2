import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';


export default defineConfig({
  base: '/hello-world-vite-app/', // VERY IMPORTANT!
  plugins: [react()],
});