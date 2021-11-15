<template>
  <div>
    <the-header></the-header>
    <the-body></the-body>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheBody from './components/layout/TheBody.vue'

// import marked from 'marked';

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

table {
  border-collapse: collapse;
}
td, th {
  border: 2px solid;
  padding-left: 5px;
  padding-right: 5px;
}

/* tr {
  border-bottom: solid 1px black;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
} */

code {
  background: white;
  display: inline-block;
}

pre {
  display: block;
}

img {
  display: block;
  max-width: 90%;
  margin: 2rem auto;
}
</style>
