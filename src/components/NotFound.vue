<template>
  <div class="root">
    <h1>404</h1>
    <div class="text">
      <h2>This page could not be found
        <!-- -->.
      </h2>
    </div>
  </div>
</template>
<style scoped>
.root {
  color: #000;
  background: #fff;
  height: 80vh;
  margin: 0px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

h1 {
  display: inline-block;
  border-right: 1px solid rgba(0, 0, 0, .3);
  margin: 0;
  margin-right: 20px;
  padding: 10px 23px 10px 0;
  font-size: 24px;
  font-weight: 500;
  vertical-align: sub
}

h2 {
  font-size: 14px;
  font-weight: normal;
  line-height: inherit;
  margin: 0;
  padding: 0
}

.text {
  display: inline-block;
  text-align: left;
  line-height: 49px;
  height: 49px;
  vertical-align: middle
}
</style>
<script>
export default {}
</script>