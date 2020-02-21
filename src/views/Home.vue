<template>
  <div id="home">
    <!--====== HEADER PART START ======-->

    <header id="home1" class="header-area">
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
                    <li class="nav-item active">
                      <a class="page-scroll" href>Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#service">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="page-scroll" href="#experience">Experience</a>
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
                <h4 class="sub-title">Hello, I’m</h4>
                <h1 class="title">Le Nguyen Anh Khoa</h1>
                <p class="role">A Backend Developer</p>
                <a class="main-btn" href="#about">About Me</a>
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
                      <a href="https://www.github.com/lnanhkhoa/">
                        <i class="lni-github-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/lnanhkhoa/">
                        <i class="lni-facebook-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/lnanhkhoa/">
                        <i class="lni-linkedin-original"></i>
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

    <!--====== HEADER PART ENDS ======-->

    <!--====== ABOUT PART START ======-->

    <div id="terminal" class="row justify-content-center pt-125 pb-130">
      <div class="col-lg-10 col-md-10 col-sm-10 pl-30 pr-30">
        <div class="section-title text-center">
          <h2 class="title">Love Terminal</h2>
        </div>
        <!-- section title -->
        <terminal v-bind:commands="COMMANDS" v-bind:initialOutput="INITIAL_OUTPUT" />
      </div>
    </div>

    <!--====== HEADER PART ENDS ======-->

    <!--====== ABOUT PART START ======-->

    <section id="about" class="about-area pt-125 pb-130">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <h2 class="title">About Me</h2>
              <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
            </div>
            <!-- section title -->
          </div>
        </div>
        <!-- row -->
        <div class="row">
          <div class="col-lg-6">
            <div class="about-content mt-50">
              <h5 class="about-title">Hi There! I'm Mark Parker</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <ul class="clearfix">
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
                      <i class="lni-envelope"></i>
                    </div>
                    <div class="info-text">
                      <p>
                        <span>Email:</span> lnanhkhoa303@gmail.com
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
                        <span>Phone:</span> +84-39-996-4550
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
                  <h6 class="skill-title">HTML</h6>
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
                  <h6 class="skill-title">CSS</h6>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="60" v-bind:style="{width: '60%'}"></div>
                  </div>
                </div>
              </div>
              <!-- skill item -->
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">Photoshop</h6>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="50"></div>
                  </div>
                </div>
              </div>
              <!-- skill item -->
              <div class="skill-item mt-25">
                <div class="skill-header">
                  <h6 class="skill-title">Sketch</h6>
                </div>
                <div class="skill-bar">
                  <div class="bar-inner">
                    <div class="bar progress-line" data-width="90"></div>
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

    <!--====== EXPERIENCE PART START ======-->

    <section id="experience" class="work_experience_area pt-115">
      <road-map />
    </section>

    <!--====== EXPERIENCE PART END ======-->

    <!--====== BLOG PART START ======-->

    <section id="blog" class="blog-area pt-125 pb-130">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center pb-25">
              <h2 class="title">From The Blog</h2>
              <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
            </div>
            <!-- section title -->
          </div>
        </div>
        <!-- row -->
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-8 col-sm-9">
            <div class="single-blog mt-30">
              <div class="blog-image">
                <img src="../library/unfold-free-lite/assets/images/blog/b-1.jpg" alt="Blog" />
              </div>
              <div class="blog-content">
                <h4 class="blog-title">
                  <a href="/blog">Hired Releases 2023 Brand Health.</a>
                </h4>
                <span>July 26, 2022</span>
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
                  <a href="/blog">Hired Releases 2023 Brand Health.</a>
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
                  <a href="/blog">Hired Releases 2023 Brand Health.</a>
                </h4>
                <span>July 26, 2022</span>
              </div>
            </div>
            <!-- single blog -->
          </div>
        </div>
        <!-- row -->
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-more text-center mt-50">
              <a class="main-btn" href="#">More posts</a>
            </div>
            <!-- blog more -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>

    <!--====== BLOG PART ENDS ======-->

    <!--====== SERVICES PART START ======-->

    <section id="service" class="services-area gray-bg pt-125 pb-130">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center pb-30">
              <h2 class="title">My Services</h2>
              <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
            </div>
            <!-- section title -->
          </div>
        </div>
        <!-- row -->
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class="lni-code-alt"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#">Web Design</a>
                </h4>
                <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
              </div>
            </div>
            <!-- single service -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class="lni-color-pallet"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#contact">Graphic Design</a>
                </h4>
                <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
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
                  <a href="#">App Design</a>
                </h4>
                <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
              </div>
            </div>
            <!-- single service -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class="lni-vector"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#">Illustration Design</a>
                </h4>
                <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
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
                <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
              </div>
            </div>
            <!-- single service -->
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="single-service text-center mt-30">
              <div class="service-icon">
                <i class="lni-support"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">
                  <a href="#">Consultancy and Support</a>
                </h4>
                <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
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
  </div>
  <!--====== HEADER PART ENDS ======-->
</template>
<script src="./Home.js"></script>

<style src="../library/unfold-free-lite/assets/css/bootstrap.min.css"></style>
<style src="../library/unfold-free-lite/assets/css/LineIcons.css"></style>
<style src="../library/unfold-free-lite/assets/css/magnific-popup.css"></style>
<style src="../library/unfold-free-lite/assets/css/default.css"></style>
<style src="./Home.css"></style>