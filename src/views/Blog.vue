<template>
  <div id="blog">
    <header class="header-area">
      <div class="navigation fixed-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand">
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
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="nav-item active">
                      <a>Blog</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        class="page-banner bg_cover"
        style="background-image: url(assets/images/page-banner.jpg)"
        data-overlay="2"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-banner-content text-center">
                <h2 class="page-title">single blog post</h2>
                <ul class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">Single Blog Post</li>
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
            <div class="blog-thumb">
              <img
                src="../library/unfold-free-lite/assets/images/blog/bolg-detailes/bolg-detailes.jpg"
                alt="Blog Details"
              />
            </div>
            <div class="blog-content">
              <h3 class="blog-title">Nobody Knows What’s Gonna Happen & Make something</h3>
              <ul class="meta">
                <li>
                  <a href="#">
                    <i class="lni-calendar"></i> 25 June, 2022
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lni-heart"></i> 50 Likes
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lni-comment"></i> 25 Comments
                  </a>
                </li>
              </ul>
              <p class="pt-15">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enlquis nostrud
                exercitation ullam lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                <br />
                <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
              <blockquote class="blockquote">
                <p>
                  <img
                    class="quote-left"
                    src="../library/unfold-free-lite/assets/images/blog/bolg-detailes/quote-left.png"
                    alt="quote"
                  />Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim.
                  <img
                    class="quote-right"
                    src="../library/unfold-free-lite/assets/images/blog/bolg-detailes/quote-right.png"
                    alt
                  />
                </p>
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./Blog.js"></script>
<style src="../library/unfold-free-lite/assets/css/bootstrap.min.css"></style>
<style src="../library/unfold-free-lite/assets/css/LineIcons.css"></style>
<style src="../library/unfold-free-lite/assets/css/magnific-popup.css"></style>
<style src="../library/unfold-free-lite/assets/css/slick.css"></style>
<style src="../library/unfold-free-lite/assets/css/default.css"></style>
<style src="./Home.css"></style>