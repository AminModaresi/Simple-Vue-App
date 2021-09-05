<template>
  <li>
    <div class="left">
      <span class="text-rank">
        {{ index + 1 }}
      </span>
      <div class="left-item">
        <img :src="image" alt="" />
        <div class="left-item-text">
          <h5>
            {{ name }}
          </h5>
          <span>
            {{ symbol }}
          </span>
        </div>
      </div>
    </div>
    <div class="right">
      <h4>
        {{ parseFloat(pirce).toFixed(3) }}
      </h4>
    </div>
  </li>
</template>
<script>
export default {
    props:['index','image','name','symbol','pirce']
}
</script>
<style scoped>
.left {
  display: flex;
  align-items: center;
}
.left-item {
  display: flex;
  align-items: center;
}
.left-item img {
  width: 30px;
  margin: 0 0.7rem;
}
.left-item-text h5 {
  margin-bottom: 00.5rem;
}
.left-item-text span {
  font-size: 0.7rem;
  color: #ccc;
}
.text-rank {
  font-size: 0.7rem;
  font-weight: bold;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #ccc;
}

li {
  transition: all 0.3s linear;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
}
li:hover {
  background-color: #f1f1f1f1;
}
</style>