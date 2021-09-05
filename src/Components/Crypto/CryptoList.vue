<template>
  <ul class="container" v-if="notOk">
    <li class="input-li">
      <input type="text" v-model="SearchItem" />
    </li>
    <crypto-item
      v-for="(crypto, index) in searchCrypto"
      :key="crypto.id"
      :index="index"
      :image="crypto.image"
      :name="crypto.name"
      :symbol="crypto.symbol"
      :pirce="crypto.current_price"
    ></crypto-item>
  </ul>
  <div class="container" v-if="!notOk">
    <h1 class="h1">Please Reload Page</h1>
  </div>

</template>
<script>
import CryptoItem from "./CryptoItem.vue";
export default {
  components: {
    CryptoItem,
  },
  data() {
    return {
      cryptos: [],
      intervalData: "",
      SearchItem: "",
      notOk: 1,
    };
  },
  computed: {
    searchCrypto() {
      return this.cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(this.SearchItem.toLowerCase())
      );
    },
  },
  methods: {
    getCrypt() {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((response) => {
          if (response.ok) {
            this.notOk = true;
            return response.json();
          }
          else{
            this.notOk = false;
          }
        })
        .then((data) => {
          this.cryptos = data;
        });
    },
  },
  mounted() {
    this.intervalData = setInterval(this.getCrypt, 20000);
  },
  created() {
    this.getCrypt();
  },
};
</script>
<style scoped>
.container {
  box-shadow: 0px 0px 20px 2px #0000001c;
  list-style: none;
  overflow: hidden;
  display: block;
}
.h1 {
  padding: 1rem;
}
.input-li {
  padding: 2rem 2rem;
}
.input-li input {
  border: 1px solid #ccc;
  border-radius: 00.5rem;
  padding: 00.5rem;
  font-size: 1.5rem;
  width: 100%;
}
li:hover {
  background-color: #f1f1f1f1;
}
</style>