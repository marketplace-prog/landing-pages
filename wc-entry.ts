import { defineCustomElement } from 'vue'
import './app/assets/css/main.css'
import MeuWidget from './app/components/dia-do-cliente.ce.vue'

const WidgetElement = defineCustomElement(MeuWidget)

customElements.define('dia-do-cliente', WidgetElement)