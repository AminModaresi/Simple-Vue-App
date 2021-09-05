<template>
  <section class="container">
    <input :class="{ invalid: inValid }" type="text" v-model="city" />
    <p v-if="inValid">Please Enter City In Input</p>
    <button @click="getWeather()">Get Weather</button>
  </section>
  <section class="container text-center" v-if="ShowContaienr">
    <h1>Today Temperature</h1>
    <h2>{{ SharchCity }}</h2>
    <h2>
      {{ getCity.temperature }}
    </h2>
    <h4>
      {{ getCity.wind }}
    </h4>
    <h5>
      {{ getCity.description }}
    </h5>
  </section>
  <section class="container text-center" v-else>
    <h1 v-if="!wait">Please Enter Right Name</h1>
    <h1 v-if="wait">please wait</h1>
  </section>
</template>
<script>
export default {
  data() {
    return {
      city: "",
      getCity: [],
      inValid: false,
      ShowContaienr: false,
      SharchCity: "",
      wait: false,
    };
  },
  methods: {
    getWeather() {
      if (this.city !== "") {
        this.inValid = false;
        fetch(
          `https://goweather.herokuapp.com/weather/${this.city.toLowerCase()}`
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw Error("Reload Page");
            }
          })
          .then((data) => {
            this.getCity = data;
            if (this.getCity.temperature !== "") {
              this.ShowContaienr = true;
            } else {
              this.ShowContaienr = false;
            }
          })
          .catch((erorr) => {
            return erorr;
          });

        this.SharchCity = this.city;
        this.city = "";
      } else {
        this.inValid = true;
      }
    },
  },
};
</script>
<style scoped>
.container {
  width: 40rem;
  margin: 1rem auto;
  padding: 1rem 10rem;
  box-shadow: 0px 0px 20px 2px #0000001c;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
}
input {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #333;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  outline: 0;
}
input:focus {
  border: 1px solid #333;
}
button {
  border: 1px solid #543252;
  padding: 0.5rem 0;
  background: #543252;
  color: #fff;
  border-radius: 0.5rem;
}
.invalid {
  border-color: rgb(255, 110, 84);
}
p {
  margin-bottom: 1rem;
}
.text-center {
  text-align: center;
}
.text-center h2,
.text-center h4,
.text-center h5 {
  margin-top: 1rem;
}
</style>