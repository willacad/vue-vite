<template>
  <div class="signup-box">
    <h1 class="signup__title">Cadastro da Empresa</h1>
    <div class="signup__content">
      <input type="text" class="input-geral" placeholder="Razão Social" />
      <input type="text" class="input-geral" placeholder="Nome Fantasia" />
      <input type="text" class="input-geral" placeholder="CNPJ" />
      <input
        type="text"
        class="input-geral"
        placeholder="Nome do responsável"
      />
      <input type="email" class="input-geral" placeholder="E-mail" />
      <input type="fone" class="input-geral" placeholder="Telefone" />
      <input type="text" class="input-geral" placeholder="Endereço" />
      <input type="password" class="input-geral" placeholder="Senha" />
      <input
        type="password"
        class="input-geral"
        placeholder="Confirmar Senha"
      />
    </div>
    <button class="sign__btn" type="submit">Cadastrar</button>
  </div>
</template>

<script>
export default {
  name: "FormSignUp",
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
@import "/src/style/components.scss";

.signup-box {
  background-color: #ffffffe7;
  border-radius: 20px;
  box-shadow: 2px 2px 20px 1px;
  width: 80%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.signup__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.signup__title {
  font-size: 3em;
}
</style>