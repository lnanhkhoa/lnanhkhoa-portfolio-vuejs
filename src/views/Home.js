import Terminal from "../components/Terminal";
import RoadMap from "../components/RoadMap.vue";
import _ from "lodash";
import { COMMANDS, INITIAL_OUTPUT } from "./data";
export default {
  name: "Home",
  components: {
    RoadMap,
    Terminal
  },
  data() {
    return {
      INITIAL_OUTPUT: INITIAL_OUTPUT,
      COMMANDS: COMMANDS,
      itemActived: "home",
      refNames: ["home", "about", "services", "experience"],
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
          name: "Experience",
          type: "experience",
          href: "#experience"
        },
        {
          name: "Services",
          type: "services",
          href: "#services"
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
