import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from 'vitepress-demo-preview-plugin'

export default defineConfig({
  title: 'Vitepress-Demo-Component',
  description: 'Just playing around.',
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
