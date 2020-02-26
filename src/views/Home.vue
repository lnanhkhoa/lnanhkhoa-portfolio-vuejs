<template>
  <div id="home">
    <!--====== HEADER PART START ======-->

    <header id="headerPart" class="header-area">
      <div class="navigation fixed-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/">
                  <img src="../assets/logo.svg" alt="Logo" />
                </a>
                <!-- Logo -->
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
                    <li
                      class="nav-item"
                      v-for="(item, index) in items"
                      v-bind:key="index"
                      v-bind:class="itemActived===item.type?'active': ''"
                      @click="itemActived=item.type"
                    >
                      <a class="page-scroll" v-bind:href="item.href">{{item.name}}</a>
                    </li>
                  </ul>
                </div>
                <!-- navbar collapse -->
              </nav>
              <!-- navbar -->
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </div>
      <!-- navigation -->

      <div id="parallax" class="header-content d-flex align-items-center">
        <div class="header-shape shape-one layer" data-depth="0.10">
          <img src="../library/unfold-free-lite/assets/images/banner/shape/shape-1.png" alt="Shape" />
        </div>
        <!-- header shape -->
        <div class="header-shape shape-tow layer" data-depth="0.30">
          <img src="../library/unfold-free-lite/assets/images/banner/shape/shape-2.png" alt="Shape" />
        </div>
        <!-- header shape -->
        <div class="header-shape shape-three layer" data-depth="0.40">
          <img src="../library/unfold-free-lite/assets/images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        <!-- header shape -->
        <div class="header-shape shape-fore layer" data-depth="0.60">
          <img src="../library/unfold-free-lite/assets/images/banner/shape/shape-2.png" alt="Shape" />
        </div>
        <!-- header shape -->
        <div class="header-shape shape-five layer" data-depth="0.20">
          <img src="../library/unfold-free-lite/assets/images/banner/shape/shape-1.png" alt="Shape" />
        </div>
        <!-- header shape -->
        <div class="header-shape shape-six layer" data-depth="0.15">
          <img src="../library/unfold-free-lite/assets/images/banner/shape/shape-4.png" alt="Shape" />
        </div>
        <!-- header shape -->
        <div class="header-shape shape-eight layer" data-depth="0.40">
          <img src="../library/unfold-free-lite/assets/images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        <!-- header shape -->
        <div class="header-shape shape-ten layer" data-depth="0.30">
          <img src="../library/unfold-free-lite/assets/images/banner/shape/shape-3.png" alt="Shape" />
        </div>
        <!-- header shape -->
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-5 col-lg-6">
              <div class="header-content-right">
                <h4 class="sub-title">Hi, I’m</h4>
                <h1 class="title">Le Khoa</h1>
                <p class="role">Software Developer</p>
                <a class="main-btn" href="/resume" target="_blank">My Resume</a>
              </div>
              <!-- header content right -->
            </div>
            <div class="col-lg-6 offset-xl-1">
              <div class="header-image d-none d-lg-block">
                <img src="../assets/myAvatar.png" alt="hero" />
              </div>
              <!-- header image -->
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- container -->
        <div class="header-social">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="header-social-icon">
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
                      <a href="/" target="_blank">
                        <i class="lni lni-text-align-justify"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- header social -->
              </div>
            </div>
            <!-- row -->
          </div>
          <!-- container -->
        </div>
        <!-- header social -->
      </div>
      <!-- header content -->
    </header>

    <!--====== ABOUT PART START ======-->

    <section id="about" ref="about" class="about-area gray-bg pt-60 pb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <h2 class="title">About Me</h2>
              <span>My full name's Le Nguyen Anh Khoa.</span>
              <span>I am interested in full-stack/backend developer and seeking to pursue a successful career path in software development.</span>
            </div>
            <!-- section title -->
          </div>
        </div>
        <!-- row -->
        <div class="row">
          <div class="col-lg-6">
            <div class="about-content mt-50">
              <h5 class="about-title">Contact</h5>
              <ul class="clearfix">
                <li>
                  <div class="single-info d-flex align-items-center">
                    <div class="info-icon">
                      <i class="lni-envelope"></i>
                    </div>
                    <div class="info-text">
                      <p>
                        <span>
                          Email:
                          <a
                            class="about-link"
                            href="mailto:lnanhkhoa303@gmail.com"
                          >lnanhkhoa303@gmail.com</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <!-- single info -->
                </li>
                <li>
                  <div class="single-info d-flex align-items-center">
                    <div class="info-icon">
                      <i class="lni-calendar"></i>
                    </div>
                    <div class="info-text">
                      <p>
                        <span>Date of birth:</span> April 4, 1994
                      </p>
                    </div>
                  </div>
                  <!-- single info -->
                </li>
                <li>
                  <div class="single-info d-flex align-items-center">
                    <div class="info-icon">
                      <i class="lni-phone-handset"></i>
                    </div>
                    <div class="info-text">
                      <p>
                        <span>
                          Phone:
                          <a class="about-link" href="tel:+84399964550">+84-39-996-4550</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <!-- single info -->
                </li>

                <li>
                  <div class="single-info d-flex align-items-center">
                    <div class="info-icon">
                      <i class="lni-map-marker"></i>
                    </div>
                    <div class="info-text">
                      <p>
                        <span>Location:</span> Ho Chi Minh City, VN
                      </p>
                    </div>
                  </div>
                  <!-- single info -->
                </li>
              </ul>
            </div>
            <!-- about content -->
          </div>
          <div class="col-xl-5 offset-xl-1 col-lg-6">
            <div class="about-skills pt-25">
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">NodeJS - Backend Dev</h6>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="80" v-bind:style="{width: '80%'}"></div>
                  </div>
                </div>
              </div>
              <!-- skill item -->
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">React Native - Mobile Dev</h6>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="75" v-bind:style="{width: '75%'}"></div>
                  </div>
                </div>
              </div>
              <!-- skill item -->
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">ReactJS/VueJS - Frontend Dev</h6>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="50" v-bind:style="{width: '50%'}"></div>
                  </div>
                </div>
              </div>
              <!-- skill item -->
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">Database</h6>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="60" v-bind:style="{width: '60%'}"></div>
                  </div>
                </div>
              </div>
              <!-- skill item -->
            </div>
            <!-- about skills -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>

    <!--====== ABOUT PART ENDS ======-->

    <!--====== SERVICES PART START ======-->

    <section id="skills" ref="skills" class="services-area pt-60 pb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center pb-30">
              <h2 class="title">My Skills</h2>
              <p></p>
            </div>
            <!-- section title -->
          </div>
        </div>
        <!-- row -->
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class="lni lni-cog"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#">Backend Developer</a>
                </h4>
                <div class="text-left">
                  <p>- Organize the logic of the system.</p>
                  <p>- Async handling.</p>
                  <p>
                    - Manage APIs resources base on
                    <a href="https://expressjs.com/">Express</a> và
                    <a href="https://strapi.io/">Strapi</a> Frameworks.
                  </p>
                </div>
              </div>
            </div>
            <!-- single service -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class="lni lni-database"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#">Database Schema Design</a>
                </h4>
                <div class="text-left">
                  <p>- Build Model-Relationship.</p>
                  <p>- Sql query, collect data.</p>
                  <p>- Knex, Bookshelf.js, Mongoose.</p>
                </div>
              </div>
            </div>
            <!-- single service -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class="lni-mobile"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#contact">React Native Developer</a>
                </h4>
                <div class="text-left">
                  <p>- Coding layout design.</p>
                  <p>- Manage State Component and Redux.</p>
                  <p>- Interface to Backend by Saga.</p>
                  <p>- Use Ignite resource - React Native boilerplates.</p>
                </div>
              </div>
            </div>
            <!-- single service -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class="lni-website"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#">Web Development</a>
                </h4>
                <div class="text-left">
                  <p>- Ant Design.</p>
                  <p>- React Boilerplate.</p>
                </div>
              </div>
            </div>
            <!-- single service -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <!-- <i class="lni-support"></i> -->
                <img
                  src="../assets/linux-svgrepo-com.svg"
                  v-bind:style="{color: '#00a78e'}"
                />
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#">Linux Experience</a>
                </h4>
                <div class="text-left">
                  <p> - Build and Deployment.</p>
                </div>
              </div>
            </div>
            <!-- single service -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class='lni lni-git'></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#">Management Tools</a>
                </h4>
                <div class="text-left">
                  <p>- Bitbucket, Github.</p>
                  <p>- Trello.</p>
                  <p>- Slack.</p>
                </div>
              </div>
            </div>
            <!-- single service -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>

    <!--====== SERVICES PART ENDS ======-->

    <!--====== EXPERIENCE PART START ======-->

    <section id="experience" ref="experience" class="work_experience_area pt-60 pb-60">
      <road-map />
    </section>

    <!--====== EXPERIENCE PART END ======-->

    <!--====== BLOG PART START ======-->

    <section id="projects" ref="projects" class="blog-area gray-bg pt-60 pb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center pb-25">
              <h2 class="title">My special projects</h2>
              <!-- <p>Thời gian làm dev, t trải một vài dự án đáng giá.</p> -->
            </div>
            <!-- section title -->
          </div>
        </div>
        <!-- row -->
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-8 col-sm-9">
            <div class="single-blog mt-30">
              <div class="blog-image">
                <img src="../assets/loyalty_main.jpg" alt="Blog" />
              </div>
              <div class="blog-content">
                <h4 class="blog-title">
                  <a href="/my-projects/loyalty" target="_blank">Loyalty Mobile Apps at Bitis</a>
                </h4>
                <span>April, 2019</span>
              </div>
            </div>
            <!-- single blog -->
          </div>
          <div class="col-lg-4 col-md-8 col-sm-9">
            <div class="single-blog mt-30">
              <div class="blog-image">
                <img src="../library/unfold-free-lite/assets/images/blog/b-2.jpg" alt="Blog" />
              </div>
              <div class="blog-content">
                <h4 class="blog-title">
                  <a
                    href="/my-projects/end-year-promotion"
                    target="_blank"
                  >End-year Promotion at Bitis</a>
                </h4>
                <span>December, 2019</span>
              </div>
            </div>
            <!-- single blog -->
          </div>
          <div class="col-lg-4 col-md-8 col-sm-9">
            <div class="single-blog mt-30">
              <div class="blog-image">
                <img src="../library/unfold-free-lite/assets/images/blog/b-3.jpg" alt="Blog" />
              </div>
              <div class="blog-content">
                <h4 class="blog-title">
                  <a href="/my-projects/elocker" target="_blank">Elocker App at Elocker Startup</a>
                </h4>
                <span>July 26, 2022</span>
              </div>
            </div>
            <!-- single blog -->
          </div>
          <div class="col-lg-4 col-md-8 col-sm-9">
            <div class="single-blog mt-30">
              <div class="blog-image">
                <img src="../library/unfold-free-lite/assets/images/blog/b-3.jpg" alt="Blog" />
              </div>
              <div class="blog-content">
                <h4 class="blog-title">
                  <a href="/my-projects/elocker" target="_blank">Elocker App at Elocker Startup</a>
                </h4>
                <span>July 26, 2022</span>
              </div>
            </div>
            <!-- single blog -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>

    <!--====== BLOG PART ENDS ======-->

    <!--====== FOOTER PART START ======-->

    <footer id="footer" class="footer-area pt-60">
      <div class="footer-copyright pb-20">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright-text text-center pt-20">
                <p>
                  Made by
                  <a href="#" class="footer-link">lnanhkhoa</a>
                  Copyright © 2020
                </p>
              </div>
              <!-- copyright text -->
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </div>
      <!-- footer widget -->
    </footer>

    <!--====== FOOTER PART ENDS ======-->
  </div>
  <!--====== HEADER PART ENDS ======-->
</template>
<script src="./Home.js"></script>

<style src="../library/unfold-free-lite/assets/css/bootstrap.min.css"></style>
<style src="../library/unfold-free-lite/assets/css/LineIcons.css"></style>
<style src="../library/unfold-free-lite/assets/css/magnific-popup.css"></style>
<style src="../library/unfold-free-lite/assets/css/default.css"></style>
<style src="./Home.css"></style>