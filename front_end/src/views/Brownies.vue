<!--<template>
  <div>
    <h1>Brroowwnniieess</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col item">
          <img src="../../images/products/cheese_cake_brownies.jpg" />
          <p>Cheese Cake Brownies</p>
        </div>
        <div class="col item">
          <img src="../../images/products/Cookies-and-Cream-Oreo-Brownies4.jpg" />
          <p>Cookies&Cream Brownies</p>
        </div>
        <div class="col item">
          <img src="../../images/products/fudge_brownies.jpeg" />
          <p>Fudge Brownies</p>
        </div>
      </div>
      <div class="row">
        <div class="col item">
          <img src="../../images/products/keto_fudge_brownies.jpeg" />
          <p>Keto Fudge Brownies</p>
        </div>
        <div class="col item">
          <img src="../../images/products/nutty_caramel_brownie.jpeg" />
          <p>Nutty Caramel Brownies</p>
        </div>
        <div class="col item">
          <img src="../../images/products/vegan_cheesecake.jpeg" />
          <p>Vegan Cheesecake Brownies</p>
        </div>
      </div>
    </div>
  </div>
</template>
-->
<template>
  <div>
    <h1>Brroowwnniieess</h1>
    <div class="container-fluid text-size">
      <BakeryList :products="products" />
    </div>
  </div>
</template>

<script>
import BakeryList from "../components/BakeryList.vue"
export default {
  name: 'Brownies',
  components: {
    BakeryList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products[1];
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>
<style scoped>
h1 {
  border: 2px solid #f18904;
  padding: 10px;
  color: white;
  background-color: #f49f05;
  font-family: "Bangers", cursive;
  text-align: center;
}
img {
  height: 400px;
  width: 100%;
  border-bottom: 2px solid #f18904;
}

.col {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.item {
  border: 2px solid #f18904;
  text-align: center;
  margin: 20px;
}
p {
  color: #233c67;
  margin: 20px;
  font-size: 20px;
  font-family: "Bangers", cursive;
}
div > p {
  font-size: 35px;
}
</style>
