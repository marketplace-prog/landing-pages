import { defineCustomElement } from 'vue'
import MeuWidget from './app/components/dia-do-cliente.ce.vue'

const WidgetElement = defineCustomElement(MeuWidget)

customElements.define('dia-do-cliente', WidgetElement)