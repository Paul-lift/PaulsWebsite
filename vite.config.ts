import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/PaulsWebsite/", // 👈 Setze den Repository-Namen hier ein
  plugins: [react()],
});
