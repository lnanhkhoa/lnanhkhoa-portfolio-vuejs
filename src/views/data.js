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
  profile: '<a href="/profile" target="_blank" class="code">My Profiles</a>',
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
  projects: `
    <a href='/my-project/loyalty' class='success link' target="_blank">Biti's Loyalty App - Mobile </a>
    <br>
    <a href='/my-project/loyalty' class='success link' target="_blank">Biti's Loyalty App - Mobile </a>
    <br>
    <a href='/my-project/loyalty' class='success link' target="_blank">Biti's Loyalty App - Mobile </a>
    `
};

export const contentProjects = [
  {
    id: 1,
    type: "loyalty",
    name: "Biti's Loyalty Mobile App",
    title: "Loyalty Mobile App at Biti's",
    startTime: "April 2019",
    createdAt: "25 Feb, 2020",
    path: "/my-projects/loyalty",
    singleImage: require("../assets/loyalty_main.svg"),
    pageBanner: require("../assets/loyalty-overview.svg"),
    blogThumb: require("../library/unfold-free-lite/assets/images/blog/bolg-detailes/bolg-detailes.jpg"),
    blogImages: [
      require("../assets/loyalty-image1.svg"),
      require("../assets/loyalty-image2.svg"),
      require("../assets/loyalty-image3.svg"),
      require("../assets/loyalty-image4.svg")
    ],
    blogImageDescription: `<div style="display: flex; justify-content: center;">
      <p>Chi tiết hơn tại <a href="https://bitis.com.vn/pages/bitis-loyalty">Homepage</a> chính thức của Biti's</p>
      </div>`,
    blogTitle: "Loyalty Mobile App at Biti's",
    content: [
      // `This is the first project we start working on Biti's Company. This is a mobile application for customer `,
      `Đây là dự án đầu tiên khi t bắt đầu làm việc tại Biti's. Sản phẩm là ứng dụng mobile dùng để tích điểm khi mua sản phẩm tại của hàng bán lẻ Bitis. 
      Với mỗi hóa đơn mua sắm tại cửa hàng Biti’s, cửa hàng Biti’s Hunter và website Bitis.com.vn, 
      bạn sẽ được tích lũy một số điểm tương ứng, có giá trị đổi lấy các ưu đãi và quà tặng hấp dẫn. <br>`
    ],
    contentNext: [
      `Team size tại thời điểm đó là 4 người bao gồm 1 lead, 1 design và 2 dev (backend + frontend).`,
      `Team sử dụng thư viện Expressjs để thiết kế hệ thống backend, React Native cho nền tảng Mobile (android, ios).`
    ]
  },
  {
    id: 2,
    type: "bitopia",
    name: "Bitopia Mobile Application",
    title: "Bitopia Mobile Application at Biti's",
    startTime: "Nov 2019",
    createdAt: "25 Feb, 2020",
    path: "/my-projects/bitopia",
    singleImage: require("../assets/bitopia_main.svg"),
    pageBanner: require("../assets/bitopia-overview.svg"),
    blogThumb: require("../library/unfold-free-lite/assets/images/blog/bolg-detailes/bolg-detailes.jpg"),
    blogImages: [
      require("../assets/bitopia-image1.svg"),
      require("../assets/bitopia-image2.svg"),
      require("../assets/bitopia-image3.svg")
    ],
    blogImageDescription: `<div style="display: flex; justify-content: center;">
      <p>Chi tiết hơn tại <a href="https://bitis.com.vn/pages/bitis-loyalty">Homepage</a> chính thức của Biti's</p>
      </div>`,
    blogTitle: "Bitopia Mobile Application at Biti's",
    content: [
      // `This is the first project we start working on Biti's Company. This is a mobile application for customer `,
      `Đây là dự án đầu tiên khi t bắt đầu làm việc tại Biti's. Sản phẩm là ứng dụng mobile dùng để tích điểm khi mua sản phẩm tại của hàng bán lẻ Bitis. 
      Với mỗi hóa đơn mua sắm tại cửa hàng Biti’s, cửa hàng Biti’s Hunter và website Bitis.com.vn, 
      bạn sẽ được tích lũy một số điểm tương ứng, có giá trị đổi lấy các ưu đãi và quà tặng hấp dẫn. <br>`
    ],
    contentNext: [
      `Team size tại thời điểm đó là 4 người bao gồm 1 lead, 1 design và 2 dev (backend + frontend).`,
      `Team sử dụng thư viện Expressjs để thiết kế hệ thống backend, React Native cho nền tảng Mobile (android, ios).`
    ]
  },
  {
    id: 3,
    type: "pos",
    name: "Point of Sale Website",
    title: "Point of Sale Website at Biti's",
    startTime: "Jan 2020",
    createdAt: "25 Feb, 2020",
    path: "/my-projects/pos",
    singleImage: require("../assets/pos_main.svg"),
    pageBanner: require("../assets/pos-overview.svg"),
    blogThumb: require("../library/unfold-free-lite/assets/images/blog/bolg-detailes/bolg-detailes.jpg"),
    blogImages: [
      require("../assets/pos-image1.svg"),
      require("../assets/pos-image2.svg"),
      require("../assets/pos-image3.svg"),
      require("../assets/pos-image4.svg"),
      require("../assets/pos-image5.svg"),
    ],
    blogImageDescription: `<div style="display: flex; justify-content: center;">
      <p>Chi tiết hơn tại <a href="https://bitis.com.vn/pages/bitis-loyalty">Homepage</a> chính thức của Biti's</p>
      </div>`,
    blogTitle: "Point of Sale Website at Biti's",
    content: [
      // `This is the first project we start working on Biti's Company. This is a mobile application for customer `,
      `Đây là dự án đầu tiên khi t bắt đầu làm việc tại Biti's. Sản phẩm là ứng dụng mobile dùng để tích điểm khi mua sản phẩm tại của hàng bán lẻ Bitis. 
      Với mỗi hóa đơn mua sắm tại cửa hàng Biti’s, cửa hàng Biti’s Hunter và website Bitis.com.vn, 
      bạn sẽ được tích lũy một số điểm tương ứng, có giá trị đổi lấy các ưu đãi và quà tặng hấp dẫn. <br>`
    ],
    contentNext: [
      `Team size tại thời điểm đó là 4 người bao gồm 1 lead, 1 design và 2 dev (backend + frontend).`,
      `Team sử dụng thư viện Expressjs để thiết kế hệ thống backend, React Native cho nền tảng Mobile (android, ios).`
    ]
  },
  {
    id: 4,
    type: "promotion",
    name: "Year End Promotion 2019",
    title: "Biti's Year End Promotion 2019",
    startTime: "Nov 2019",
    createdAt: "25 Feb, 2020",
    path: "/my-projects/promotion",
    singleImage: require("../assets/promotion_main.svg"),
    pageBanner: require("../assets/pos-overview.png"),
    blogThumb: require("../library/unfold-free-lite/assets/images/blog/bolg-detailes/bolg-detailes.jpg"),
    blogImages: [
      "https://file.hstatic.net/1000230642/file/5ecc1ba29df264ac3de3_187fbd16711c4613a8a6a76c87afbaf6_grande.jpg",
      "https://file.hstatic.net/1000230642/file/dfff0dca3284cbda9295_8680bc72c3224a769ca3d5dc4a79e763_grande.jpg",
      "https://file.hstatic.net/1000230642/file/9e4a8460bb2e42701b3f_f9b4fe3f1a3448be99513b12a3336bfc_grande.jpg",
      "https://i.ytimg.com/vi/e2jC_9xuXwU/maxresdefault.jpg"
    ],
    blogImageDescription: `<div style="display: flex; justify-content: center;">
      <p>Chi tiết hơn tại <a href="https://bitis.com.vn/pages/bitis-loyalty">Homepage</a> chính thức của Biti's</p>
      </div>`,
    blogTitle: "Point of Sale Website at Biti's",
    content: [
      // `This is the first project we start working on Biti's Company. This is a mobile application for customer `,
      `Đây là dự án đầu tiên khi t bắt đầu làm việc tại Biti's. Sản phẩm là ứng dụng mobile dùng để tích điểm khi mua sản phẩm tại của hàng bán lẻ Bitis. 
      Với mỗi hóa đơn mua sắm tại cửa hàng Biti’s, cửa hàng Biti’s Hunter và website Bitis.com.vn, 
      bạn sẽ được tích lũy một số điểm tương ứng, có giá trị đổi lấy các ưu đãi và quà tặng hấp dẫn. <br>`
    ],
    contentNext: [
      `Team size tại thời điểm đó là 4 người bao gồm 1 lead, 1 design và 2 dev (backend + frontend).`,
      `Team sử dụng thư viện Expressjs để thiết kế hệ thống backend, React Native cho nền tảng Mobile (android, ios).`
    ]
  },
  {
    id: 5,
    type: "elocker",
    name: "Elocker",
    title: "Elocker",
    startTime: "Jul 2018",
    createdAt: "25 Feb, 2020",
    path: "/my-projects/elocker",
    singleImage: require("../assets/elocker_main.svg"),
    pageBanner: require("../assets/elocker-image5.svg"),
    blogThumb: require("../library/unfold-free-lite/assets/images/blog/bolg-detailes/bolg-detailes.jpg"),
    blogImages: [
      require("../assets/elocker-image1.svg"),
      require("../assets/elocker-image2.svg"),
      require("../assets/elocker-image3.svg"),
      require("../assets/elocker-image4.jpeg"),
      require("../assets/elocker-image5.svg")
    ],
    blogImageDescription: `<div style="display: flex; justify-content: center;">
      <p>Chi tiết hơn tại <a href="https://bitis.com.vn/pages/bitis-loyalty">Homepage</a> chính thức của Biti's</p>
      </div>`,
    blogTitle: "Point of Sale Website at Biti's",
    content: [
      // `This is the first project we start working on Biti's Company. This is a mobile application for customer `,
      `Đây là dự án đầu tiên khi t bắt đầu làm việc tại Biti's. Sản phẩm là ứng dụng mobile dùng để tích điểm khi mua sản phẩm tại của hàng bán lẻ Bitis. 
      Với mỗi hóa đơn mua sắm tại cửa hàng Biti’s, cửa hàng Biti’s Hunter và website Bitis.com.vn, 
      bạn sẽ được tích lũy một số điểm tương ứng, có giá trị đổi lấy các ưu đãi và quà tặng hấp dẫn. <br>`
    ],
    contentNext: [
      `Team size tại thời điểm đó là 4 người bao gồm 1 lead, 1 design và 2 dev (backend + frontend).`,
      `Team sử dụng thư viện Expressjs để thiết kế hệ thống backend, React Native cho nền tảng Mobile (android, ios).`
    ]
  }
];

export const resumeContent = {
  experience: [
    {
      title: "Fullstack Developer",
      companyName: "Biti's",
      time: "Nov 2018 - Present",
      content:
        "The company's business is manufacture shoes and retail. And I work as a fullstack developer at IT department in Biti's Company. There are many projects that I have joined, such as Biti's Loyalty Mobile App, Biti's Staff App, Point of Sale and Promotion plans. My team are migrating monolithic to microservices systems. I was nominated as Leader in my team, so that I have to make a lot of efforts.",
      achievements: ``,
      techUsed: [
        "NodeJS",
        "Strapi.io",
        "Mysql",
        "Mongo",
        "React",
        "Redux",
        "Saga",
        "Ant Design"
      ]
    },
    {
      title: "React Native Developer",
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
      achievements: ``,
      techUsed: [
        "NodeJS",
        "Strapi.io",
        "Mysql",
        "Mongo",
        "React",
        "Redux",
        "Saga",
        "Ant Design"
      ]
    },
    {
      title: "Embedded Software Engineer",
      companyName: "Memstech JSC",
      time: "Jan 2017 - Nov 2018",
      content: `Since the graduation date at HCM University of Technology, I took part in Memstech JSC - at District 9, HCMC. In company, my role is embedded software engineer. All projects are aim at Agriculture System. Every day, I programing to monitor MCU in order to read Sensor, control devices and communicate server.`,
      achievements: ``,
      techUsed: ["Python", "C++", "Mongo", "React Native"]
    }
  ]
};

export const resumeFile = require("../assets/cv-lnanhkhoa.pdf");

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
