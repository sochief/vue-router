<template>
  <h1>Car id {{ id }}</h1>
</template>

<script>
export default {
  data() {
    return {
      //id: this.$router.currentRoute.params["id"],
      id: this.$route.params["id"],
    };
  },
  watch: {
    //eslint-disable-next-line
    $route(toR, fromR) {
      this.id = toR.params["id"];
    },
  },
};
</script>

<style scoped></style>