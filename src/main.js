import { createApp } from 'vue'
import { marked } from 'marked'
import highlight from 'highlight.js'
import "highlight.js/styles/monokai-sublime.css";
import App from './App.vue'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  headerIds: false,
  breaks: true,
  smartLists: true,
  smartypants: true
})

const markedMixin = {
  methods: {
    md: function (input) {
      return marked(input, {
        highlight(md) {
          return highlight.highlightAuto(md).value
        }
      });
    }
  }
}

const app = createApp(App)
app.mixin(markedMixin).mount('#app')
