import { contentProjects } from "./data";

export default {
  name: "MyProjects",
  components: {},
  data() {
    if (this.$route.params.id === "loyalty") {
      return contentProjects.loyalty;
    }
    return null;
  }
};
