<template>
  <div>
    <the-header></the-header>
    <the-body></the-body>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheBody from './components/layout/TheBody.vue'

export default {
  name: "App",
  components: {
    TheHeader,
    TheBody
  },
  mounted() {
    let testLibrary = document.createElement("script");
    testLibrary.setAttribute(
      "src",
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
    );
    document.head.appendChild(testLibrary);
    let markedLibrary = document.createElement("script");
    testLibrary.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.1/marked.js"
    );
    document.head.appendChild(markedLibrary);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
}
</style>
