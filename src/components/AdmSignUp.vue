<template>
  <div class="signup-box">
    <h1 class="signup__title">
      Cadastro <br />
      de <br />
      Administrador
    </h1>
    <input type="text" class="input-geral" placeholder="Nome completo" />
    <input type="email" class="input-geral" placeholder="E-mail" />
    <input type="text" class="input-geral" placeholder="Senha" />
    <input
      type="text"
      class="input-geral"
      placeholder="Digite novamente a senha"
    />
    <button class="sign__btn" type="submit">Cadastrar</button>
  </div>
</template>

<script>
export default {
  name: "AdmSignUp",
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
@import "/src/style/components.scss";

.signup-box {
  background-color: #ffffffe7;
  border-radius: 20px;
  box-shadow: 2px 2px 20px 1px;
  width: 340px;
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.signup__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.signup__title {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}
</style>