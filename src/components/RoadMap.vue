<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="section_title text-center pb-30">
          <h2 class="title">Work Experience</h2>
          <!-- <ul class="line">
            <li></li>
            <li></li>
            <li></li>
          </ul>-->
        </div>
      </div>
    </div>
    <div class="work_experience">
      <div class="row">
        <div class="col-lg-12">
          <div class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn">
            <div class="experience_title order-last">
              <h3 class="title">{{experience[0].title}}</h3>
              <p>{{experience[0].companyName}}</p>
              <span class="date">{{experience[0].time}}</span>
            </div>
            <div class="experience_number">
              <span>01</span>
            </div>
            <div class="experience_content order-first">
              <p>{{experience[0].content}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn">
            <div class="experience_title text-lg-right">
              <h3 class="title">{{experience[1].title}}</h3>
              <p>{{experience[1].companyName}}</p>
              <span class="date">{{experience[1].time}}</span>
            </div>
            <div class="experience_number">
              <span>02</span>
            </div>
            <div class="experience_content">
              <p>{{experience[1].content}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div
            class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn"
            data-wow-duration="1.3s"
            data-wow-delay="0.8s"
          >
            <div class="experience_title order-last">
              <h3 class="title">{{experience[2].title}}</h3>
              <p>{{experience[2].companyName}}</p>
              <span class="date">{{experience[2].time}}</span>
            </div>
            <div class="experience_number">
              <span>03</span>
            </div>
            <div class="experience_content order-first">
              <p>{{experience[2].content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resumeContent } from "../views/data";
export default {
  name: "RoadMap",
  props: {},
  data() {
    return {
      experience: resumeContent.experience
    };
  }
};
</script>

<style src="../library/freelancer-free-lite/assets/css/style.css"></style>
<style scoped>
.section_title .title {
  font-weight: 700;
  font-size: 45px;
  color: #000;
  padding-bottom: 20px;
}

@media (max-width: 767px) {
  .section_title .title {
    font-size: 30px;
  }
}
</style>