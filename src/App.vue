<template>
  <div id="app">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="topbar">
		<TopBar />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";

export default {
  name: "app",
  components: {
	SideBar,
	TopBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
