<template>
  <section class="navbar">
    <div class="logo">
      <svg
        class="logo__svg"
        width="100px"
        height="60px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <path
          style="fill: #02c8a7"
          d="M510.694,230.012C497.671,100.833,388.611,0,256,0C114.615,0,0,114.615,0,256
	c0,118.613,80.673,218.368,190.14,247.431L510.694,230.012z"
        />
        <path
          style="fill: #02967d"
          d="M512,256c0-8.773-0.443-17.443-1.306-25.988l-71.042-71.043l-50.938-10.085l-71.496-71.496
	L72.348,385.639L190.14,503.432C211.157,509.011,233.228,512,256,512C397.385,512,512,397.384,512,256z"
        />
        <polygon
          style="fill: #b1eae5"
          points="133.565,419.617 72.348,385.639 72.348,218.289 155.826,218.289 "
        />
        <polygon
          style="fill: #40d2be"
          points="194.783,385.639 133.565,419.617 133.565,218.289 194.783,218.289 "
        />
        <polygon
          style="fill: #fef2cc"
          points="133.565,252.268 72.348,218.289 133.565,184.311 194.783,218.289 "
        />
        <polygon
          style="fill: #b1eae5"
          points="256,419.617 194.783,385.639 194.783,77.387 278.261,77.387 "
        />
        <polygon
          style="fill: #40d2be"
          points="317.217,385.639 256,419.617 256,77.387 317.217,77.387 "
        />
        <polygon
          style="fill: #fef2cc"
          points="256,111.364 194.783,77.387 256,43.409 317.217,77.387 "
        />
        <polygon
          style="fill: #b1eae5"
          points="378.435,419.617 317.217,385.639 317.217,158.968 400.696,158.968 "
        />
        <polygon
          style="fill: #40d2be"
          points="439.652,385.639 378.435,419.617 378.435,158.968 439.652,158.968 "
        />
        <polygon
          style="fill: #fef2cc"
          points="378.435,192.947 317.217,158.968 378.435,124.99 439.652,158.968 "
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
    <div class="btns">
      <a href="" class="btns__login">Login</a>
      <a href="" class="btns__register">Cadastre-se</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: $dominant-color;
}

.btns {
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btns__login,
.btns__register {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #fff;
  height: 40px;
  width: 150px;
  text-decoration: none;
  color: #fff;
}
</style>
