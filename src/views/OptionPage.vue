<template>
  <div class="content">
    <section class="main-contain">
      <WhatSign />
    </section>
  </div>
</template>

<script>
import WhatSign from "../components/WhatSign.vue";
export default {
  name: "OptionPage",
  components: {
    WhatSign,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/style/variables.scss";
@import "/src/style/components.scss";
</style>