<template>
  <div id="blog">
    <div>
      <vue-headful
        v-bind:title="contentProject.title"
        v-bind:description="contentProject.blogTitle"
      />
    </div>
    <header class="header-area">
      <div class="navigation fixed-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/profile">
                  <img src="../assets/logo.svg" alt="Logo" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a href="/profile">Home</a>
                    </li>
                    <li class="nav-item active">
                      <a>{{$route.params.id }}</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="contentProject.pageBanner"
        class="page-banner bg_cover"
        :style="{'background-image': 'url(' + contentProject.pageBanner + ')'}"
        data-overlay="4"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-banner-content text-center">
                <h2 class="page-title">{{contentProject.name}}</h2>
                <ul class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item">
                    <a href="/profile">Home</a>
                  </li>
                  <li class="breadcrumb-item">{{contentProject.type}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="single-blog-page pt-80 pb-130">
      <div class="container">
        <div class="row">
          <div class="single-blog-post mt-50">
            <div class="blog-content">
              <h3 class="blog-title">{{contentProject.blogTitle}}</h3>
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni-calendar"></i>
                    {{contentProject.createdAt}}
                  </a>
                </li>
              </ul>

              <div class="pt-20" v-for="(item, index) in contentProject.content" v-bind:key="index">
                <div v-html="item" />
              </div>
              <slider
                animation="fade"
                v-model="sliderValue"
                stopOnHover="true"
                :duration="10000"
                :speed="1000"
                style="height: 500px;"
              >
                <slider-item
                  v-for="(i, index) in contentProject.blogImages"
                  :key="index"
                  :style="sliderStyle"
                >
                  <img
                    style="height:500px"
                    v-bind:src="contentProject.blogImages[index]"
                    alt="Blog Details"
                  />
                </slider-item>
              </slider>
              <div class="pt-10" v-html="contentProject.blogImageDescription" />
              <div
                class="pt-20"
                v-for="(item, index) in contentProject.contentNext"
                v-bind:key="index"
              >
                <div v-html="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import _ from "lodash";
import { contentProjects } from "./data";
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "MyProjects",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      displaySlider: false,
      sliderStyle: {
        backgroundColor: "#eee",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      },
      sliderValue: 0,
      contentProject: _.find(
        contentProjects,
        i => i.type === this.$route.params.id
      )
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.displaySlider = true;
      this.sliderValue = 1;
    }, 1000);
  }
};
</script>



<style src="../library/unfold-free-lite/assets/css/bootstrap.min.css"></style>
<style src="../library/unfold-free-lite/assets/css/LineIcons.css"></style>
<style src="../library/unfold-free-lite/assets/css/magnific-popup.css"></style>
<style src="../library/unfold-free-lite/assets/css/slick.css"></style>
<style src="../library/unfold-free-lite/assets/css/default.css"></style>
<style src="./Home.css"></style>