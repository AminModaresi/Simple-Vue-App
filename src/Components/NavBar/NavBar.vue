<template>
  <section class="container">
    <router-link to="/weather">
      <div class="item">
        <img src="../../assets/images/img_498862.png" alt="" />
      </div>
    </router-link>
    <router-link to="/crypto">
      <div class="item">
        <img
          src="../../assets/images/free-cryptocurrency-coin-icon-2422-thumb.png"
          alt=""
        />
      </div>
    </router-link>
  </section>
</template>
<style scoped>
.container a {
  width: calc(calc(100% / 2) - 0.5rem);
  margin: 0 0.25rem;
  min-height: 100px;
}
.container .active{
  background: #f5f5f5;
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
</style>