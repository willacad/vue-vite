<template>
  <div class="content">
    <section class="main-contain">
      <FormSignUp />
    </section>
  </div>
</template>

<script>
import FormSignUp from "../components/FormSiginUp.vue";
export default {
  name: "NewUser",
  components: {
    FormSignUp,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
</style>
