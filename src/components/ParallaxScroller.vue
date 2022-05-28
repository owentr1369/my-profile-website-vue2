<template>
  <div class="parallax-wrapper" v-on:scroll="parallaxScroll">
    <section>
      <img src="../assets/images/stars.png" id="stars" alt="" />
      <img src="../assets/images/moon.png" id="moon" alt="" />
      <img
        src="../assets/images/mountains_behind.png"
        id="mountains_behind"
        alt=""
      />
      <h2 id="text">Tran Tam</h2>
      <a href="#sec" id="btn">Explore</a>
      <img
        src="../assets/images/mountains_front.png"
        id="mountains_front"
        alt=""
      />
    </section>
    <div class="sec" id="sec">
      <h2>Welcome</h2>
      <ProfileComp />
    </div>
  </div>
</template>

<script>
import ProfileComp from "./ProfileComp.vue";
export default {
  name: "ParallaxScroller",
  components: { ProfileComp },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let stars = document.getElementById("stars");
      let moon = document.getElementById("moon");
      let mountains_behind = document.getElementById("mountains_behind");
      let text = document.getElementById("text");
      let btn = document.getElementById("btn");
      let mountains_front = document.getElementById("mountains_front");
      let header = document.querySelector("header");

      window.addEventListener("scroll", function handleScroll() {
        let value = this.window.scrollY;
        stars.style.left = value * 0.25 + "px";
        moon.style.top = value * 1.05 + "px";
        mountains_behind.style.top = value * 0.5 + "px";
        mountains_front.style.top = value * 0 + "px";
        text.style.marginRight = value * 4 + "px";
        text.style.marginTop = value * 1.5 + "px";
        btn.style.marginTop = value * 1.5 + "px";
        header.style.top = value * 0.5 + "px";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Source+Sans+Pro&family=Source+Serif+Pro:wght@200&display=swap");

.parallax-wrapper {
  min-height: 100vh;
  background: linear-gradient(#2b1055, #7597de);
  overflow-x: hidden;
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 1000;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
  img#moon {
    mix-blend-mode: screen;
  }
  img#mountains_front {
    z-index: 10;
  }
}
#text {
  position: absolute;
  right: -350px;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
  font-weight: 700;
}

#btn {
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 40px;
  background: #fff;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
}
.sec {
  position: relative;
  padding: 100px;
  background-color: #1c0522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3.5rem;
    margin-bottom: 10px;
    color: #fff;
  }
  p {
    font-size: 1.2em;
    color: #fff;
  }
}
</style>