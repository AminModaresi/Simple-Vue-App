<template>
  <section class="container">
    <router-link to="/weather">
      <div class="item">
        <img src="./assets/images/img_498862.png" alt="" />
      </div>
    </router-link>
    <router-link to="/crypto">
      <div class="item">
        <img
          src="./assets/images/free-cryptocurrency-coin-icon-2422-thumb.png"
          alt=""
        />
      </div>
    </router-link>
  </section>
  <section>
    <router-view></router-view>
  </section>
</template>
<script>
// import NavBar from "./Components/NavBar/NavBar.vue";
export default {
  components: {
    // NavBar,
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
.container a {
  width: calc(calc(100% / 2) - 0.5rem);
  margin: 0 0.25rem;
  min-height: 100px;
}
.item {
  box-shadow: 0px 0px 20px 2px #0000001c;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.item img {
  width: 50px;
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