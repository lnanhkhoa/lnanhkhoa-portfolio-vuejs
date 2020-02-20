// import Terminal from "../components/Terminal";
import RoadMap from "../components/RoadMap.vue";
import { COMMANDS, INITIAL_OUTPUT } from "./data";
export default {
  name: "Home",
  components: {
    RoadMap
  },
  data() {
    return {
      INITIAL_OUTPUT: INITIAL_OUTPUT,
      COMMANDS: COMMANDS
    };
  },

  created() {
      // window.addEventListener('mousemove',this.move);
  },
  destroyed() {
      // window.removeEventListener('mousemove', this.move);
  },
  methods: {
    // move(event) {
    // }
    
  },
};