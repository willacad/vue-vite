<template>
  <div class="content">
    <section class="main-contain">
      <FormLogin />
    </section>
  </div>
</template>

<script>
import FormLogin from "../components/FormLogin.vue";
export default {
  name: "LoginRequester",
  components: {
    FormLogin,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";

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
</style>
