import { defineCustomElement } from 'vue'
import globalCSS from './app/assets/css/main.css?inline'
import MeuWidget from './app/components/dia-do-cliente.ce.vue'

MeuWidget.styles = [
  globalCSS,
  ...(MeuWidget.styles || []) // Mantém estilos que já existam no .ce.vue
]

const WidgetElement = defineCustomElement(MeuWidget)

customElements.define('dia-do-cliente', WidgetElement)