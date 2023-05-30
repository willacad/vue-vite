<template>
  <div class="content">
    <DemandComponent />
  </div>
</template>

<script>
import DemandComponent from "../components/DemandComponent.vue";
export default {
  name: "DemandView",
  components: {
    DemandComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
</style>
