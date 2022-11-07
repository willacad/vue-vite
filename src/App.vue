<template>
  <div>
    <Navbar />
    <router-view> </router-view>
    <Footer />
  </div>
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
  background-image: url(./assets/image/industria.jpg);
  background-position: center bottom;
  background-size: cover;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-contain {
  background-color: #00000071;
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
