<template>
  <header>
    <div class="container">
      <div class="logo">LOGO</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<style lang="scss">
header {
  height: 64px;
  background: #409EFF;
  color: #fff;
  .container {
    height: 100%;
    padding: 0 12px;
    display: flex;
    align-items: center;
    .logo {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: .5px;
    }
  }
}
</style>