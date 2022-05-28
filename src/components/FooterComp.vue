<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >Contact</router-link
          >
          <ul>
            <li>
              <a href="#"> <youTube class="svg-icon" /></a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/tamtamjs"
                ><twitter class="svg-icon"
              /></a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/tamtamjs/"
                ><instagram class="svg-icon"
              /></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/thien-tam-tran-9a4725225/"
                ><linkedin class="svg-icon"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'About' }"
              >About me</router-link
            >
            <router-link class="link" :to="{ name: 'Projects' }"
              >Projects</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
  name: "footer-vue",
  components: {
    youTube,
    twitter,
    instagram,
    linkedin,
  },
};
</script>

<style lang='scss' scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #170b32;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      .header {
        font-size: 24px;
        color: #ecedfc;
        text-decoration: none;
        font-weight: 600;
        @media (max-width: 800px) {
          text-align: center;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
        color: #fff !important;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          color: #ecedfc !important;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
            }
          }
        }
      }
      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }
    p {
      margin-top: auto;
      color: #fff;
    }
  }
}
</style>