<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="section_title text-center pb-30">
          <h2 class="title">Work Experience</h2>
          <ul class="line">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="work_experience">
      <div class="row">
        <div class="col-lg-12">
          <div class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn">
            <div class="experience_title order-last">
              <h3 class="title">FullStack Developer</h3>
              <p>Biti's</p>
              <span class="date">Nov 2018 - Mar 2020</span>
            </div>
            <div class="experience_number">
              <span>01</span>
            </div>
            <div class="experience_content order-first">
              <p>
                The company's business is manufacture shoes and retail and I work as a fullstack developer at IT department in Biti's Company.
                There are many projects that I have joined, such as Biti's Loyalty Mobile App, Biti's Staff App, Point of Sale and Promotion plans.
                My team are migrating monolithic to microservices systems. I was nominated as Leader in my team, so that I have to make a lot of efforts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn">
            <div class="experience_title text-lg-right">
              <h3 class="title">React Native Developer</h3>
              <p>Elocker</p>
              <span class="date">Jun 2018- Nov 2018</span>
            </div>
            <div class="experience_number">
              <span>02</span>
            </div>
            <div class="experience_content">
              <p>
                I knowed and joined the startup project with my team - the project's name is Elocker. 
                The business model was built in store personal belogings with ease, security. 
                Customer can use application in their smartphone to check where the closest locker and make an reservation item.
                We can extend the business model to apply to logistic, delivery and travel.
                I took up mobile developer position with that challenge. So, I develop a application at a locker center, it's interact to user and monitor the hardware control.
              </p>
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
              <h3 class="title">Embedded Software Developer</h3>
              <p>Memstech JSC</p>
              <span class="date">Jan 2017- Nov 2018</span>
            </div>
            <div class="experience_number">
              <span>03</span>
            </div>
            <div class="experience_content order-first">
              <p>
                Since the graduation date at BK University, I took part in Memstech JSC - at District 9, HCMC. In company, my role is embedded software engineer.
                All projects are aim at Agriculture System. Every day, I programing to monitor MCU in order to read Sensor, control devices and communicate server.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadMap",
  props: {}
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