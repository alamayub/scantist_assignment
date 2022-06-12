<template>
  <footer>
    <div class="container">
      footer content
    </div>
  </footer>  
</template>

<script>
export default {
  name: 'FooterComponent'  
}
</script>

<style lang="scss">
footer {
  padding: 30px 0;
  background: #409EFF;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}
</style>