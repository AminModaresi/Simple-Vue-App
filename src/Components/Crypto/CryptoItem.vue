<template>
  <li :class="bgColor">
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
      <span :class="lastvalue">
        {{ change.toPrecision(3) }}
      </span>
    </div>
  </li>
</template>
<script>
export default {
    props:['index','image','name','symbol','pirce','change'],
    data : () =>({
      bgColor : ""
    }),
    watch : {
      change(value){
       this.bgColor = value > 0 ? "BgGreen" : "BgRed"
      }
    },
    computed : {
      lastvalue(){
        return this.change > 0 ? "green" : "red"
      },
      bgChange(){
        return this.change > 0 ? "BgGreen" : "BgRed"
      }
    }
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
.right{
  text-align: right;
}
.right h4{
  margin-bottom: .5rem;
}
.right span {
  font-size: 0.7rem;
  padding: .3rem;
  border-radius: .8rem;
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
li *{
  cursor: default;
}
.BgGreen{
  animation: greenBg 2s;
}
.BgRed{
  animation: redBg 2s;
}
.green{
  color: rgb(255, 255, 255);
  background-color: rgb(88, 207, 98);
}
.red{
  color: rgb(255, 255, 255);
   background-color: rgb(218, 138, 138);
}
@keyframes greenBg {
  to{
   background-color: white;
    
  }
  from{
    background-color: rgba(136, 211, 136 , .5);
  }
}
@keyframes redBg {
  to{
   background-color: white;
    
  }
  from{
  background-color: rgba(218, 138, 138 , .5);
  }
}
</style>