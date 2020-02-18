<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Terminal />
  </div>
</template>

<script>
// @ is an alias to /src
import Terminal from "../components/Terminal";

export default {
  name: "Home",
  components: {
    Terminal
  }
};
</script>
