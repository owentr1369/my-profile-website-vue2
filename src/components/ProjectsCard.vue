<template>
  <div class="blog-card">
    <img
      :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Posted on: {{ post.blogDate }}</h6>
      <a class="link" target="_blank" :href="`${post.blogGithubLink}`">
        Explore on Github<Arrow class="arrow" />
      </a>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "ProjectsCard",
  props: ["post"],
  components: { Arrow },
  computed: {
    editPost() {
      return this.$store.state.editPosts;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #ecedfc;
  min-height: 420px;
  overflow-x: hidden;

  &:hover {
    transform: rotateZ(-2deg) scale(1.01);
    box-shadow: 0 8px 12px -2px rgba($color: #000000, $alpha: 0.1),
      0 4px 8px -2px rgba($color: #000000, $alpha: 0.06);
  }
  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 34px 16px;
    color: #000;
    font-weight: 500;

    h4 {
      padding-bottom: 8px;
      font-size: 24px;
      color: #000;
      min-height: 70px;
    }

    h6 {
      font-size: 16px;
      padding-bottom: 16px;
      color: #000;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: 30px;
      padding-top: 10px;
      font-size: 14px;
      font-weight: 500;
      padding-bottom: 4px;
      transition: 0.5 ease-in all;

      &:hover {
        color: rgba(48, 48, 48, 0.8);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
</style>