export const COMMANDS = {
  help: `Supported commands: 
    <span class="code">about</span>,
    <span class="code">skills</span>,
    <span class="code">education</span>,
    <span class="code">experience</span>,
    <span class="code">projects</span>,
    <span class="code">profile</span>,
    <span class="code">resume</span>,
    <span class="code">lnanhkhoa</span>.
      `,
  profile: '<a href="/profile" target="_blank" class="code">My Profile</a>',
  lnanhkhoa: "👋 Hi 😏! My fullname is Le Nguyen Anh Khoa.",
  about: `
     I’m a Software Developer. 
    <br>
     I am interested in full-stack/backend developer and seeking 
     to pursue a successful career path in software development.
     `,
  skills:
    '<span class="code">Languages:</span> NodeJs, ReactJs, ReactNative, C++',
  education: `<strong class="header-name">HCM University of Technology</strong>
      <br>
      BE. Electronics and Telecommunications
      <br>
      GPA: 7.13
  `,
  resume: `
        <a href='/resume' class='success link' target="_blank">My Resume</a> 
        or <a href="./cv-lnanhkhoa.pdf" target="_blank" class="code"><i class="lni-download"></i></a>
  `,
  experience: `<strong class="header-name">Biti's (Nov 2018 - March. 2020)</strong>
    <br>
    <i>Full-Stack Developer</i>
    <br>
    <strong class="header-name">Elocker (Jun. 2018 - Nov 2018)</strong>
    <br>
    <i>React Native Developer</i>
    <br>
    <strong class="header-name">Memstech JSC (Jan. 2017 - Nov 2018)</strong>
    <br>
    <i>Software Engineering</i>
    <br>
    <br>
    <a href='/profile#experience' class='success link' target="_blank">More Detail</a>
    `,
  project: `
    <a href='/my-project/loyalty' class='success link' target="_blank">Biti's Loyalty App - Mobile </a>
    <br>
    <a href='/my-project/loyalty' class='success link' target="_blank">Biti's Loyalty App - Mobile </a>
    <br>
    <a href='/my-project/loyalty' class='success link' target="_blank">Biti's Loyalty App - Mobile </a>
    `
};

export const contentProjects = {
  loyalty: {
    pageBanner: require("../assets/page-banner.jpg"),
    blogThumb: require("../library/unfold-free-lite/assets/images/blog/bolg-detailes/bolg-detailes.jpg"),
    blogTitle: "Nobody Knows What’s Gonna Happen & Make something",
    createdAt: "25 June, 2020",
    content: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enlquis nostrud
          exercitation ullam lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          <br />
          <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.`,
      `<blockquote class="blockquote">
            <p>
              <img
                class="quote-left"
                src="${require("../library/unfold-free-lite/assets/images/blog/bolg-detailes/quote-left.png")}"
                alt="quote"
              />
              Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim.
              <img
                class="quote-right"
                src="${require("../library/unfold-free-lite/assets/images/blog/bolg-detailes/quote-right.png")}"
                alt
              />
            </p>
          </blockquote>`,
      `<p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>`
    ]
  }
};



export const resumeContent = {
  experience: [
    {
      title: 'Fullstack Developer',
      companyName: "Biti's",
      time: "Nov 2018 - Present", 
      content: "The company's business is manufacture shoes and retail. And I work as a fullstack developer at IT department in Biti's Company. There are many projects that I have joined, such as Biti's Loyalty Mobile App, Biti's Staff App, Point of Sale and Promotion plans. My team are migrating monolithic to microservices systems. I was nominated as Leader in my team, so that I have to make a lot of efforts.",
      achievements:``,
      techUsed: ['NodeJS', 'Strapi.io', 'Mysql', 'Mongo', 'React', 'Redux','Saga', 'Ant Design']
      
    },
     {
      title: 'React Native Developer',
      companyName: "Elocker",
      time: "Jul 2018 - Nov 2018", 
      content: `I knowed and joined the startup project with my team -
                the project's name is Elocker. The business model was
                built in store personal belogings with ease, security.
                Customer can use application in their smartphone to
                check where the closest locker and make an reservation
                item. We can extend the business model to apply to
                logistic, delivery and travel. I took up mobile
                developer position with that challenge. So, I develop
                a application at a locker center, it's interact to
                user and monitor the hardware control.`,
      achievements:``,
      techUsed: ['NodeJS', 'Strapi.io', 'Mysql', 'Mongo', 'React', 'Redux','Saga', 'Ant Design']
      
    },
     {
      title: 'Embedded Software Engineer',
      companyName: "Memstech JSC",
      time: "Jan 2017 - Nov 2018", 
      content: `Since the graduation date at HCM University of Technology, I took part in Memstech JSC - at District 9, HCMC. In company, my role is embedded software engineer. All projects are aim at Agriculture System. Every day, I programing to monitor MCU in order to read Sensor, control devices and communicate server.`,
      achievements:``,
      techUsed: ['Python', 'C++', 'Mongo','React Native']
      
    }
  ]
}




// Kể từ ngày tốt nghiệp BK, t apply vào Memstech JSC. Tại đây t theo nghiệp làm nhúng, vai trò là kĩ sư lập trình phần mềm cho mạch nhúng.
// Vì công ty mới thành lập và còn non trẻ, các dự án IOT ở đây xoay quanh lĩnh vực nông nghiệp và cây trồng. Hằng ngày t lập trình điều khiển MCU để đọc cảm biến và
// giao tiếp với server.

//  T startup dự án khởi nghiệp cùng đám bạn, dự án làm về mô hình giữ đồ vật của khách hàng dựa vào iot:
// Khách đến gửi hàng tại block center được đặt những nơi công cộng, và tụi t charge fee thông qua thời gian sử dụng.
// Mô hình này có thể mở rộng bằng cách ứng dụng vào vận chuyển, du lịch, giữ đồ ở nơi công cộng như trạm xe, siêu thị, trung tâm thương mại.
// Thử thách cũng như đam mê react native nên t quyết định đảm nhận nhiệm vụ lập trình mobile.
// T làm app tại các lock center, và trao đổi dữ liệu với mạch điều khiển tại đó.

//  Vào Bitis t làm việc fullstack. Tại đây t làm cả về frontend lẫn backend. Các ứng dụng Bitis phục vụ khách hàng và nội bộ, tuy nhiên các ứng dụng sinh ra phục vụ công việc nội bộ là chính.
//   Các dự án tiêu biểu ở đây t làm là Loyalty Mobile App, Bitopia - Mobile App for Bitis Staff, Point of Sale and các kế hoạch cho chương trình khuyến mãi.
//   Các dự án về sau đang trong quá trình chuyển dần sang hệ thống microservices.
//   Tại đây t được học hỏi nhiều vấn đề về cả kĩ thuật lẫn giao tiếp giữa con người.
//   Gần đây t tham gia vào team dev, với team size 8 người và t được đề cử làm leader cho mọi người
