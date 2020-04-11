<template>
  <div>
    <h1>About our Bakery!</h1>
    <div class="container">
      <div class="row">
        <div class="col item-text">
          <h2>Our Journey</h2>
          <p class="about-text">
            We started as a small family owned bakery in the foothills of Provo
            in 1908. We worked tirelessly to bring you the best bakery products
            in the valley. We have since grown into the largest chain of
            bakeries in Utah due to your support and love.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col item-text">
          <h2>Our Mission</h2>
          <p class="about-text">
            We strive every single day to bring you the best breads and deserts
            that remind you good times and family gatherings. We will not stop
            until every person is satisfied and has experienced the amazing food
            we have created. We know that you will neve regret stopping in at
            The Little Bakery!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col item-text">
          <h2>Our Promise to You</h2>
          <p class="about-text">
            We will ensure only have the best of experiences while at our
            bakery. And that you will love everything you taste! We intend to
            keep our promises to you and all of our customers!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col item-text">
          <h2>Our Guarentee</h2>
          <p class="about-text">
            We guarentee 100% fresh and regional ingredients in all our
            products. Not to mention 100% satisfaction! Come soon and often for
            the best bakery experience in all of Utah! We are excited for you
            visit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import ProductList from "../components/ProductList.vue"
export default {
  name: "About",
  components: {
    //ProductList
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color: #F49F05; */
}

li {
  float: left;
  border-right: 1px solid #bbb;
  font-family: "Bangers", cursive;
  font-size: 20px;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #f18904;
}

.active {
  background-color: #36688d;
}

#css2 {
  font-size: 20px;
}

#logo {
  height: 40px;
  width: 40px;
}

.navbar-brand {
  font-family: "Bangers", cursive;
}

h1 {
  border: 2px solid #f18904;
  padding: 10px;
  color: white;
  background-color: #f49f05;
  font-family: "Bangers", cursive;
  text-align: center;
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
.grey-background {
  background-color: grey;
}

#text-center {
  text-align: center;
}

.grid {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
}

.item {
  border: 2px solid #f18904;
  text-align: center;
  margin: 20px;
}
.item-text {
  border: 2px solid #f18904;
  text-align: center;
  padding: 10px;
  font-family: "Bangers", cursive;
}
.about-text {
  font-size: 20px;
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

footer {
  border: 2px solid #f18904;
  padding: 10px;
  color: white;
  background-color: #f49f05;
  font-family: "Bangers", cursive;
  text-align: center;
}
</style>
