<template>
  <div class="demand-container">
    <h1 class="demand__title">Solicitação de Pedido</h1>
    <div class="demand-content">
      <div class="demand-box">
        <p class="demand__text">Nome do produto</p>
        <input type="text" class="input-geral" />
      </div>
      <div class="demand-box">
        <p class="demand__text">Código do produto</p>
        <input type="text" class="input-geral" />
      </div>
      <div class="demand-box">
        <p class="demand__text">Quantidade</p>
        <input type="number" class="input-geral" />
      </div>
      <div class="demand-box">
        <p class="demand__text">Imagem</p>
        <input type="file" class="demand__img-box" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemandComponent",
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
@import "/src/style/components.scss";

.demand-container {
  background-color: #ffffffe7;
  border-radius: 20px;
  box-shadow: 2px 2px 20px 1px;
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.demand-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 900px;
  height: 400px;
  display: flex;
}

.demand-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
}

.demand__title {
  font-size: 3em;
}

.demand__text {
  font-size: 1.5em;
}
</style>