import Terminal from "../components/Terminal";
import RoadMap from "../components/RoadMap.vue";
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
    };
  },

  methods: {
    // move(event) {
    // }
    
  },
};