<template>
  <div class="content">
    <section class="main-contain">
      <AdmSignUp />
    </section>
  </div>
</template>

<script>
import AdmSignUp from "/src/components/AdmSignUp.vue";

export default {
  name: "NewCompany",
  components: {
    AdmSignUp,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
</style>
