<template>
  <div class="box">
    <h1 class="box__title">Cadastro de :</h1>
    <router-link class="box__btn" to="/NewUser">Empresa</router-link>
    <router-link class="box__btn" to="/">Administrador</router-link>
  </div>
</template>

<script>
export default {
  name: "WhatSign",
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
@import "/src/style/components.scss";

.box {
  background-color: #ffffffe7;
  border-radius: 20px;
  box-shadow: 2px 2px 20px 1px;
  width: 340px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box__title {
  font-size: 2em;
  font-weight: 700;
  margin: 10px;
}

.box__btn {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: $dominant-color;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  transition: 0.6s;
  margin: 15px 0;
  border: solid 1px #000;
}

.box__btn:hover {
  background-color: $persian-color;
  cursor: pointer;
}
</style>