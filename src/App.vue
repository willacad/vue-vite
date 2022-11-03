<template>
  <Navbar />
  <Home />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Home,
    Footer,
  },
};
</script>

<style  lang="scss">
@import "/src/style/variables.scss";

@font-face {
  font-family: Oswald;
  src: url("../style/font/Oswald-VariableFont_wght.ttf");
}

* {
  font-family: Oswald;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.content {
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 45px;
  color: $title-color;
  margin-bottom: 30px;
}
</style>
