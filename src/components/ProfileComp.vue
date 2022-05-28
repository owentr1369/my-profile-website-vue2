<template>
  <div class="profile-wrap">
    <div class="profile-left">
      <div class="avt">
        <img src="../assets/avt.png" alt="" />
      </div>
      <div class="name">
        <h2>Tran Tam</h2>
      </div>
      <h3>Frontend Developer</h3>
      <div class="social-media">
        <div>
          <a class="svg-icon" href="#"> <youTube /> </a>
        </div>
        <div>
          <a
            target="_blank"
            class="svg-icon"
            href="https://twitter.com/tamtamjs"
          >
            <twitter />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            class="svg-icon"
            href="https://www.instagram.com/tamtamjs/"
          >
            <instagram />
          </a>
        </div>
        <div>
          <a
            class="svg-icon"
            target="_blank"
            href="https://www.linkedin.com/in/thien-tam-tran-9a4725225/"
          >
            <linkedin />
          </a>
        </div>
      </div>
    </div>
    <div class="profile-right">
      <h1>Hello...</h1>
      <h2>Here's who I am and what I do</h2>
      <div class="profile-button">
        <a
          href="../assets/Tran Thien Tam Resume.pdf"
          download="TranThienTamResume"
        >
          <button>Resume</button></a
        >

        <router-link :to="{ name: 'Projects' }">
          <button>Projects</button>
        </router-link>
      </div>
      <h5>
        “Stay away from those people who try to disparage your ambitions. Small
        minds will always do that, but great minds will give you a feeling that
        you can become great too.”
      </h5>
      <h6>Mark Twain</h6>
    </div>
  </div>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
  components: {
    youTube,
    twitter,
    instagram,
    linkedin,
  },
};
</script>

<style lang="scss" scoped>
.profile-wrap {
  min-width: 750px;
  margin-top: 24px;
  width: 40%;
  display: flex;
  flex-direction: row;
  align-self: center;
  .profile-left {
    display: block;
    .avt {
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      object-fit: cover;
      img {
        width: 80%;
        min-width: 320px;
        height: 320px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .name,
    h3 {
      justify-content: center;
      text-align: center;
      margin-top: 12px;
    }
  }

  .social-media {
    display: flex;
    color: #fff;
    width: 100%;
    list-style: none;
    margin: 0;
    justify-content: center;
    margin-top: 12px;
    a {
      margin: 16px 6px;

      svg {
        color: #fff;
        height: 30px;
        width: 30px;
      }
    }
  }
  .profile-right {
    background: #ecedfc;
    color: #1c0522;
    border-radius: 12px;
    h1,
    h2 {
      font-size: 84px;
      color: #1c0522;
      margin-left: 8px;
    }
    h2 {
      color: #1c0522;
      margin-left: 12px;
      font-size: 20px;
    }
    .profile-button {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        margin: 12px 12px 10px 12px;
      }
    }

    h5,
    h6 {
      color: #1c0522;
      text-align: justify;
      padding: 16px 14px 20px;
      font-weight: 500;
    }
    h5 {
      font-size: 18px;
    }
    h6 {
      float: right;
      padding-top: 0;
      margin-right: 12px;
      font-size: 16px;
    }
  }
}
</style>