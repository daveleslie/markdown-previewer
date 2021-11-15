<template>
  <main>
    <section>
      <h3>Markdown editor</h3>
      <textarea
        name="editor"
        id="editor"
        cols="70"
        rows="25"
        placeholder="Enter markdown here"
        v-model="markdownInput"
      ></textarea>
    </section>
    <section>
      <h3>Markdown preview</h3>
      <!-- <textarea
        name="preview"
        id="preview"
        cols="60"
        rows="25"
        v-html="markdownPreview"
      ></textarea> -->
      <div id="preview" v-html="markdownPreview"></div>
    </section>
  </main>
</template>

<script>
import test from "../../assets/test";
import markdown from "../../assets/markdown";

import highlight from "highlight.js";


import { marked } from "marked";

export default {
  data() {
    return {
      markdownInput: markdown.placeholder,
      testImport: test.test,
    };
  },
  computed: {
    markdownPreview() {
      // console.log(highlight)
      return this.md(this.markdownInput);
    },
    mdTest() {
      // console.log(highlight)
      return marked(this.testImport, {
        highlight(md) {
          return highlight.highlightAuto(md).value;
        },
      });
    },
  },
};
</script>

<style scoped>
main {
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

h3 {
  text-align: center;
}

#preview {
  border: 0.5px solid;
  background-color: aliceblue;
  width: 560px;
  padding: 0 1rem;
  min-height: 480px;
  overflow: auto;
}



textarea {
  background-color: aliceblue;
}
</style>
