import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ตั้งค่า base เป็น './' เพื่อให้ไฟล์สามารถรันได้บน GitHub Pages หรือ Folder ย่อย
  base: './',
})
