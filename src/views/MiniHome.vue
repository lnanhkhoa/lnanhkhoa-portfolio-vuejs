<template>
  <section class="hero is-fullheight gray-bg">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-3 is-flex">
            <div class="column-child sidebar shadow">
              <div class="sidebar-header has-text-centered">
                <img src="../assets/myAvatar.png" class="sidebar-image" />
                <h2 class="header-name">Khoa Le</h2>
                <h5>Software Developer</h5>
                <div class="social-icons">
                  <ul>
                    <li>
                      <a href="https://www.github.com/lnanhkhoa/" target="_blank">
                        <i class="lni-github-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/lnanhkhoa/" target="_blank">
                        <i class="lni-facebook-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/lnanhkhoa/" target="_blank">
                        <i class="lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="../assets/cv-lnanhkhoa.pdf">
                        <i class="lni-download"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/profile" target="_blank">
                        <i class='lni lni-code-alt'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="resume"></div>
              </div>
            </div>
          </div>
          <div class="column is-flex">
            <div class="column-child terminal shadow">
              <terminal v-bind:commands="COMMANDS" v-bind:height="'250px'" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Made by
          <a href="/profile" class="footer-link">lnanhkhoa</a>
          Copyright © 2020
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
import Terminal from "../components/Terminal";
import { COMMANDS } from "./data";
export default {
  name: "MiniHome",
  components: {
    Terminal
  },
  data() {
    return {
      COMMANDS
    };
  }
};
</script>

<style lang="stylus" scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css';
</style>
<style src="../library/unfold-free-lite/assets/css/LineIcons.css"></style>

<style src="./MiniHome.css" scoped></style>