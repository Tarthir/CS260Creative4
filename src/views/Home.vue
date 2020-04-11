<template>
  <div>
    <h1>Welcome to The Little Bakery</h1>
    <img src="/images/bakery2.jpg"/>
  </div>
</template>

<script>
//import ProductList from "../components/ProductList.vue"
export default {
  name: 'About',
  components: {
    //ProductList
  },

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
  height: 100%;
  width: 100%;
  border-bottom: 2px solid #f18904;
}

</style>