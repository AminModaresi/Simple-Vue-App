<template>
  <NavBar/>
  <section>
    <router-view></router-view>
  </section>
</template>
<script>
import NavBar from "./Components/NavBar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  width: 40rem;
  margin: 1rem auto;
  display: flex;
  border-radius: 0.5rem;
}
.router-enter-from {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s linear;
}
.router-enter-to {
  opacity: 1;
}
.router-leave-from {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s linear;
}
.router-leave-to {
  opacity: 0;
}
</style>