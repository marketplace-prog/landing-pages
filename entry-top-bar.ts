import { defineCustomElement } from 'vue'
import globalCSS from './app/assets/css/main.css?inline'
import WebComponent from './app/components/top-bar.ce.vue'

WebComponent.styles = [
  globalCSS,
  ...(WebComponent.styles || []) // Mantém estilos que já existam no .ce.vue
]

const Element = defineCustomElement(WebComponent)

customElements.define('top-bar', Element)