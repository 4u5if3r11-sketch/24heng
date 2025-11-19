import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Note: If you deploy to https://<USERNAME>.github.io/<REPO>/
  // you should uncomment the line below and replace <REPO> with your repository name
  // base: '/your-repo-name/',
})