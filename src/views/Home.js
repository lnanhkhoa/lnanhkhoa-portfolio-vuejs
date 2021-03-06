import Terminal from "../components/Terminal.vue";
import RoadMap from "../components/RoadMap.vue";
import _ from "lodash";
import { COMMANDS, resumeFile, contentProjects } from "./data";
export default {
  name: "Home",
  components: {
    RoadMap,
    Terminal
  },
  data() {
    return {
      singleImageStyle: {
        height: "360px",
        width: "360px"
      },
      COMMANDS: COMMANDS,
      contentProjects,
      resumeFile,
      itemActived: "home",
      refNames: ["home", "about", "skills", "experience", "projects"],
      items: [
        {
          name: "Home",
          type: "home",
          href: "#"
        },
        {
          name: "About",
          type: "about",
          href: "#about"
        },
        {
          name: "Skills",
          type: "skills",
          href: "#skills"
        },
        {
          name: "Experience",
          type: "experience",
          href: "#experience"
        },
        {
          name: "Projects",
          type: "projects",
          href: "#projects"
        }
      ]
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll(event) {
      const scrollbarLocation = window.scrollY;
      const offsetTops = _.maxBy(
        _.compact(
          _.map(this.refNames, name => {
            if (!this.$refs[name]) return null;
            const active = scrollbarLocation > this.$refs[name].offsetTop - 73;
            if (!active) return null;
            return {
              name: name,
              offsetTop: this.$refs[name].offsetTop,
              setActive: active
            };
          })
        ),
        "offsetTop"
      );

      if (offsetTops) {
        this.itemActived = offsetTops.name;
      } else {
        this.itemActived = "home";
      }
    }
  }
};
