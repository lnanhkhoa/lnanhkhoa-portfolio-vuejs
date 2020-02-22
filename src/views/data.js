export const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">corgi</span>',
  about:
    "lnanhkhoa 👋 <br> I’m a Software Developer. <br> I am interested in full-stack/backend developer and seeking to pursue a successful career path in software development.",
  skills:
    '<span class="code">Languages:</span> JavaScript, TypeScript, PHP, Java, Go, C',
  education:
    '<strong class="header-name">University of Central Florida</strong><br>B.S. Information Technology — Emphasis in Software Engineering',
  resume:
    "<a href='./joey_colon_resume.pdf' class='success link'>resume.pdf</a>",
  experience:
    '<strong class="header-name">Uber (May 2020 - Aug. 2020)</strong><br><i>Software Engineering Intern</i><br><strong class="header-name">Honey (Jan. 2020 - April 2020)</strong><br><i>Software Engineering Intern</i><br> <strong class="header-name">LSQ (Jan. 2019 - April 2019)</strong> <br><i>Software Engineering Intern</i>',
  corgi:
    "My top 3 favorite corgis (click to view):<br><a href='https://www.instagram.com/bearorcorgi/' class='success link'>Bear</a>, <a href='https://www.instagram.com/lychee_the_corgi/' class='success link'>Mochee</a>, <a href='https://www.instagram.com/thecorgijack/' class='success link'>Jack</a>"
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