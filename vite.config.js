import path from 'path';
import legacy from '@vitejs/plugin-legacy';
import { dirname } from 'node:path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	server: {
		port: 3000, // ставим нужный порт, например 3000
		strictPort: true, // если порт занят — Vite не будет искать другой, выдаст ошибку
		open: true, // автоматически откроет браузер
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [legacy()],
});
