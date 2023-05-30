<template>
  <div class="content">
    <section class="main-contain">
      <CompanySignUp />
    </section>
  </div>
</template>

<script>
import CompanySignUp from "/src/components/CompanySiginUp.vue";

export default {
  name: "NewCompany",
  components: {
    CompanySignUp,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
</style>
