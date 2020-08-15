<template>
  <div>
    <div class="title">
      <icon name="chart-line" class="title-icon" scale="3"></icon>
      <b>Stock Viewer</b>
    </div>
    <b-nav vertical class="w-25 sidebar-items">
      <b-nav-item class="sidebar-item-link">
        <icon name="home" class scale="2"></icon><span>Home</span>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ["Home", "Stocks"]
    };
  }
};
</script>