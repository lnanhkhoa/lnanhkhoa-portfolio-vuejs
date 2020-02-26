<template>
  <div id="resume">
    <article class>
      <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
        <header class="resume-header pt-4 pt-md-0">
          <div class="media flex-column flex-md-row">
            <img class="mr-3 img-fluid picture mx-auto" src="../assets/profile.jpg" alt />
            <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
              <div class="primary-info">
                <h1
                  class="name mt-0 mb-1 text-white text-uppercase text-uppercase"
                >Le Nguyen Anh Khoa</h1>
                <div class="title mb-3">Full Stack Developer</div>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="mailto:lnanhkhoa303@gmail.com">
                      <i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>lnanhkhoa303@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+84399964550">
                      <i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-3"></i>039 996 4550
                    </a>
                  </li>
                </ul>
              </div>
              <!--//primary-info-->
              <div class="secondary-info ml-md-auto mt-2">
                <ul class="resume-social list-unstyled">
                  <li class="mb-3">
                    <a href="http://linkedin.com/in/lnanhkhoa">
                      <span class="fa-container text-center mr-2">
                        <i class="fab fa-linkedin-in fa-fw"></i>
                      </span>linkedin.com/in/lnanhkhoa
                    </a>
                  </li>
                  <li class="mb-3">
                    <a href="http://github.com/lnanhkhoa">
                      <span class="fa-container text-center mr-2">
                        <i class="fab fa-github-alt fa-fw"></i>
                      </span>github.com/lnanhkhoa
                    </a>
                  </li>
                  <li class="mb-3">
                    <a href="http://facebook.com/lnanhkhoa">
                      <span class="fa-container text-center mr-2">
                        <i class="fab fa-facebook fa-fw"></i>
                      </span>facebook.com/lnanhkhoa
                    </a>
                  </li>
                  <li>
                    <a href="http://lnanhkhoa.com">
                      <span class="fa-container text-center mr-2">
                        <i class="fas fa-globe"></i>
                      </span>lnanhkhoa.com
                    </a>
                  </li>
                </ul>
              </div>
              <!--//secondary-info-->
            </div>
            <!--//media-body-->
          </div>
          <!--//media-->
        </header>
        <div class="resume-body p-5">
          <section class="resume-section summary-section mb-5">
            <h2
              class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
            >Career Summary</h2>
            <div class="resume-section-content">
              <p class="mb-0">
                I am interested in full-stack/backend developer and seeking to
                pursue a successful career path in software development.
              </p>
            </div>
          </section>
          <!--//summary-section-->

          <div class="row">
            <div class="col-lg-9">
              <section class="resume-section experience-section mb-5">
                <h2
                  class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
                >Work Experience</h2>
                <div class="resume-section-content">
                  <div class="resume-timeline position-relative">
                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3
                            class="resume-position-title font-weight-bold mb-1"
                          >{{resumeContent.experience[0].title}}</h3>
                          <div
                            class="resume-company-name ml-auto"
                          >{{resumeContent.experience[0].companyName}}</div>
                        </div>
                        <!--//row-->
                        <div class="resume-position-time">{{resumeContent.experience[0].time}}</div>
                      </div>
                      <!--//resume-timeline-item-header-->
                      <div class="resume-timeline-item-desc">
                        <p>{{resumeContent.experience[0].content}}</p>
                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                        <p>{{resumeContent.experience[0].achievements}}</p>
                        <ul>
                          <li>- Loyalty App: The Mobile App for Customer Services.</li>
                          <li>- Pos Web: Point of Sale in website environment.</li>
                          <li>- Deposit App: The Mobile App for sale and delivery.</li>
                          <li>- Year End Promotion: The Year End Promotion plann in Dec 2019, it run in website environment.</li>
                          <li>- Promotion Centralized: The gateway Promotion centralized for create and manage promotion planning.</li>
                          <li>- Bitopia: The Mobile App for Biti's Staff.</li>
                        </ul>
                        <h4
                          class="resume-timeline-item-desc-heading font-weight-bold"
                        >Technologies used:</h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">NodeJS</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">Strapi.io</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">Mysql</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">Mongo</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">React</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">Redux</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">Saga</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">Ant Design</span>
                          </li>
                        </ul>
                      </div>
                      <!--//resume-timeline-item-desc-->
                    </article>
                    <!--//resume-timeline-item-->

                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3
                            class="resume-position-title font-weight-bold mb-1"
                          >{{resumeContent.experience[1].title}}</h3>
                          <div
                            class="resume-company-name ml-auto"
                          >{{resumeContent.experience[1].companyName}}</div>
                        </div>
                        <!--//row-->
                        <div class="resume-position-time">{{resumeContent.experience[1].time}}</div>
                      </div>
                      <!--//resume-timeline-item-header-->
                      <div class="resume-timeline-item-desc">
                        <p>{{resumeContent.experience[1].content}}</p>
                        <h4
                          class="resume-timeline-item-desc-heading font-weight-bold"
                        >Responsibility</h4>
                        <ul>
                          <li>- Like interactive Channel for Hardware team and Software team.</li>
                          <li>- Build React Native Apps.</li>
                          <li>- Support Hardware team to monitoring ElockerVN operating system</li>
                        </ul>
                        <h4
                          class="resume-timeline-item-desc-heading font-weight-bold"
                        >Technologies used:</h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">React Native</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">ReactJS</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">NodeJS/Express</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">MySQL</span>
                          </li>
                        </ul>
                      </div>
                      <!--//resume-timeline-item-desc-->
                    </article>
                    <!--//resume-timeline-item-->

                    <article class="resume-timeline-item position-relative pb-5">
                      <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                          <h3
                            class="resume-position-title font-weight-bold mb-1"
                          >{{resumeContent.experience[2].title}}</h3>
                          <div
                            class="resume-company-name ml-auto"
                          >{{resumeContent.experience[2].companyName}}</div>
                        </div>
                        <!--//row-->
                        <div class="resume-position-time">{{resumeContent.experience[2].time}}</div>
                      </div>
                      <!--//resume-timeline-item-header-->
                      <div class="resume-timeline-item-desc">
                        <p>{{resumeContent.experience[2].content}}</p>
                        <h4
                          class="resume-timeline-item-desc-heading font-weight-bold"
                        >Technologies used:</h4>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">TI MCU</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">Arduino</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">Python</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">C++</span>
                          </li>
                          <li class="list-inline-item">
                            <span class="badge badge-primary badge-pill">React Native</span>
                          </li>
                        </ul>
                      </div>
                      <!--//resume-timeline-item-desc-->
                    </article>
                    <!--//resume-timeline-item-->
                  </div>
                  <!--//resume-timeline-->
                </div>
              </section>
              <!--//experience-section-->
            </div>
            <div class="col-lg-3">
              <section class="resume-section education-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                <div class="resume-section-content">
                  <ul class="list-unstyled">
                    <li>
                      <div class="resume-degree font-weight-bold">HCM University of Technology</div>
                      <div class="resume-degree-time">2012 - 2017</div>
                      <div class="resume-degree-org">BE Electronics and Telecommunications</div>
                      <div class="resume-degree-org">GPA: 7.13</div>
                    </li>
                  </ul>
                </div>
              </section>
              <!--//education-section-->
              <section class="resume-section skills-section mb-5">
                <h2
                  class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
                >Skills &amp; Tools</h2>
                <div class="resume-section-content">
                  <div class="resume-skill-item">
                    <h4 class="resume-skills-cat font-weight-bold">Frontend</h4>
                    <ul class="list-unstyled mb-4">
                      <li class="mb-2">
                        <div class="resume-skill-name">ReactJS/VueJS</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 80%"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="90"
                          ></div>
                        </div>
                      </li>
                      <li class="mb-2">
                        <div class="resume-skill-name">React Native</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="90"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--//resume-skill-item-->

                  <div class="resume-skill-item">
                    <h4 class="resume-skills-cat font-weight-bold">Backend</h4>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <div class="resume-skill-name">NodeJS/Express/Strapi</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 90%"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="90"
                          ></div>
                        </div>
                      </li>
                      <li class="mb-2">
                        <div class="resume-skill-name">Python/Flask</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 60%"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="60"
                          ></div>
                        </div>
                      </li>
                      <li class="mb-2">
                        <div class="resume-skill-name">Mysql/Mongo</div>
                        <div class="progress resume-progress">
                          <div
                            class="progress-bar theme-progress-bar-dark"
                            role="progressbar"
                            style="width: 80%"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="80"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--//resume-skill-item-->

                  <div class="resume-skill-item">
                    <h4 class="resume-skills-cat font-weight-bold">Others</h4>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <span class="badge badge-light">Linux</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">Git</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">DevOps</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">Code Review</span>
                      </li>
                      <li class="list-inline-item">
                        <span class="badge badge-light">Unit Test</span>
                      </li>
                    </ul>
                  </div>
                  <!--//resume-skill-item-->
                </div>
                <!--resume-section-content-->
              </section>
              <!--//skills-section-->
              <!-- <section class="resume-section reference-section mb-5">
							<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
							<div class="resume-section-content">
								<ul class="list-unstyled resume-awards-list">
									<li class="mb-2 pl-4 position-relative">
										<i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
										<div class="resume-award-name">Award Name Lorem</div>
										<div class="resume-award-desc">Award desc goes here, ultricies nec, pellentesque eu, pretium quis,
											sem. Nulla consequat massa quis enim. Donec pede justo.</div>
									</li>
									<li class="mb-0 pl-4 position-relative">
										<i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
										<div class="resume-award-name">Award Name Ipsum</div>
										<div class="resume-award-desc">Award desc goes here, ultricies nec, pellentesque.</div>
									</li>
								</ul>
							</div>
              </section>-->
              <!--//interests-section-->
              <section class="resume-section language-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                <div class="resume-section-content">
                  <ul class="list-unstyled resume-lang-list">
                    <li class="mb-2">
                      <span class="resume-lang-name font-weight-bold">English</span>
                      <small class="text-muted font-weight-normal">(Elementary)</small>
                    </li>
                  </ul>
                </div>
              </section>
              <!--//language-section-->
              <section class="resume-section interests-section mb-5">
                <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                <div class="resume-section-content">
                  <ul class="list-unstyled">
                    <li class="mb-1">- Football</li>
                    <li class="mb-1">- Games</li>
                  </ul>
                </div>
              </section>
              <!--//interests-section-->
            </div>
          </div>
          <!--//row-->
        </div>
        <!--//resume-body-->
      </div>
    </article>

    <footer class="footer text-center pt-2 pb-5"></footer>
  </div>
</template>


<script>
import { resumeContent } from "./data";
export default {
  name: "Resume",
  data() {
    return {
      resumeContent: resumeContent
    };
  }
};
</script>

<style src="./Resume.css" scoped></style>
