<template>
  <div class="about-wrap">
    <img src="../assets/images/stars.png" id="stars" alt="" />
    <div class="container">
      <h3>About me</h3>
      <!-- <div class="blog-cards">
        <ProjectsCard
          :post="post"
          v-for="(post, index) in sampleBlogCards"
          :key="index"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-wrap {
  transition: 0.5s ease all;
  min-height: 100vh;
  background: linear-gradient(#2b1055, #7597de);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}
</style>