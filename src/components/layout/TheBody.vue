<template>
  <main>
    <section>
      <h3>Markdown editor</h3>
      <textarea name="editor" id="editor" cols="60" rows="25"></textarea>
    </section>
    <section>
      <h3>Markdown preview</h3>
      <textarea name="preview" id="preview" cols="60" rows="25"></textarea>
    </section>
  </main>
</template>


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