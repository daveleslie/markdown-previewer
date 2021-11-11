<template>
  <main>
    <section>
      <h3>Markdown editor</h3>
      <textarea name="editor" id="editor" cols="60" rows="25" placeholder="Enter markdown here" v-model="markdownInput"></textarea>
    </section>
    <section>
      <h3>Markdown preview</h3>
      <textarea name="preview" id="preview" cols="60" rows="25" v-html="markdownInput"></textarea>
    </section>
  </main>
  <div>{{test}}</div>
</template>

<script>
import test from '../../assets/test'

export default {
  data() {
    return {
      markdownInput: '',
      testImport: test.test
    };
  },
  computed: {
    markdownPreview() {
      return this.markdownInput
    }
  }
}
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
</style>