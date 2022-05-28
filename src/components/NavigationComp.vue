<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >Tran Tam
        </router-link>
        <h1 v-show="!mobile" class="slash">|</h1>
        <p class="header">Frontend Developer</p>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'About' }"
            >About Me</router-link
          >
          <router-link class="link" :to="{ name: 'Projects' }"
            >Projects</router-link
          >
        </ul>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'About' }">About</router-link>
        <router-link class="link" :to="{ name: 'Projects' }"
          >Projects</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
export default {
  name: "NavigationComp",
  components: { menuIcon },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: #fff;
}
header {
  background-color: #260e4a;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
    0 4px 6px -1px rgba($color: #000000, $alpha: 0.06);
  z-index: 10;

  .link {
    font-weight: 500;
    padding: 0;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }
  p {
    margin-left: 8px;
    @media (max-width: 700px) {
      margin-left: 0;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;
    .branding {
      display: flex;
      align-items: center;
      @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
      }
      .header {
        font-weight: 600;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        margin-right: 8px;
        @media (max-width: 700px) {
          margin-left: 0;
        }
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      ul {
        margin-right: 40px;
        .link {
          margin-right: 12px;
          color: #fff;
          padding: 0 8px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
    color: #fff;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #260e4a;
    top: 0;
    left: 0;
    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>