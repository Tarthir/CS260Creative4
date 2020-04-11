<template>
  <div id="app">
    <div id="menu">
      <div id="left-side">
        <div class="menu-item browse">
          <router-link to="/login">Login</router-link>
        </div>
      </div>
      <div id="brand">
        <router-link to="/"> <img src="/images/logo.png"/></router-link>
      </div>
      <div id="side">
        <div class="menu-item browse">
          <router-link to="/brownies">Brownies</router-link>
        </div>
        <div class="menu-item browse">
          <router-link to="/cookies">Cookies</router-link>
        </div>
        <div class="menu-item browse">
          <router-link to="/about">About</router-link>
        </div>

        <router-link to="/cart">
          <div class="menu-item">
            <p>{{ numberOfItems }} Items</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer
  },
  computed: {
    numberOfItems() {
      return this.$root.$data.cart.length;
      /*var vals = this.$root.$data.cart.values();
      debugger
      let value, done, sum = 0;
      do {
        ({value, done} = vals.next());

        sum += value || 0;

      } while(!done)
    debugger
    return sum;
    //return 5;*/
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #b84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#left-side {
  font-size: 30px;
  display: flex;
  justify-content: space-evenly;
  font-family: "Bangers", cursive;
}
#side {
  font-size: 30px;
  grid-area: side;
  display: flex;
  justify-content: space-evenly;
  font-family: "Bangers", cursive;
}
#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
