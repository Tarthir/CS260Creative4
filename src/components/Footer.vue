<template>
  <footer>
    <a href="https://github.com/ikokopuffsl/creative3-CS260">Github</a>
    <br />
    <span>Do you have any requests or comments for us?</span>
    <input type="text" v-model="msg" id="comments" />
    <button @click="submitRequest()" class="auto">Submit!</button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Your comment here"
    };
  },
  methods: {
    submitRequest() {
      //To be fleshed out in next lab
      document.getElementById("comments").value = "";
    }
  }
};
</script>

<style scoped>
footer {
  text-align: center;
  margin: 20px;
  font-size: 20px;
  background: #f49f05;
}
</style>
