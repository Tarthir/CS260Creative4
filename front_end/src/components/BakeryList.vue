<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="info">
          <h1>{{ product.name }}</h1>
          <p>In Stock: {{ product.inStock }}</p>
        </div>
        <div class="image">
          <img :src="'/images/products/' + product.image" />
        </div>
        <div class="price">
          <h2>{{ product.price }}</h2>
          <button @click="addToCart(product)" class="auto">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: Array
  },
  methods: {
    addToCart(product) {
      if (product.inStock) {
        this.$root.$data.cart.push(product);
      }
      /*if (!this.$root.$data.cart.has(product)){
        debugger
        this.$root.$data.cart = this.$root.$data.cart.set(product,1);
        //console.log(this.$root.$data.cart);
      }
      else{
        var d = this.$root.$data.cart.get(product);
        this.$root.$data.cart = this.$root.$data.cart.set(product,d+1);
        //console.log(this.$root.$data.cart);
      }*/
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  border-radius: 25px;
  background-color: #f49f05;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.product img {
  border: 2px solid #f49f05;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #f49f05;
  color: white;
  font-family: "Bangers", cursive;
  padding: 10px 30px;
  height: 80px;
  border-radius: 25px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}

.price {
  display: flex;
  font-family: "Bangers", cursive;
}

button {
  height: 50px;
  background: #f26897;
  color: white;
  border: none;
  font-family: "Bangers", cursive;
}

.auto {
  margin-left: auto;
}
</style>
