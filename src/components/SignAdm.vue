<template>
  <div class="login">
    <h1 class="login__title">Cadastro Administrador</h1>
    <input type="text" class="input-geral" placeholder="Usuário" />
    <input type="text" class="input-geral" placeholder="Senha" />
    <button class="sign__btn" type="submit">Cadastrar</button>
  </div>
</template>

<script>
export default {
  name: "SignAdm",
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
@import "/src/style/components.scss";

.login {
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

.login__title {
  font-size: 2em;
  font-weight: 700;
}
</style>