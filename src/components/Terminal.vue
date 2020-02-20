<template>
  <div class="column-child terminal shadow">
    <div class="terminal-bar dark-mode">
      <div class="icon-btn close"></div>
      <div class="icon-btn min"></div>
      <div class="icon-btn max"></div>
      <div class="terminal-bar-text is-hidden-mobile dark-mode-text">--~-- guest@lnanhkhoa --~--</div>
    </div>
    <div class="terminal-window primary-bg" v-on:click="focusInput">
      <terminal-output v-bind:outputs="terminalOutputs" />
      <div class="terminal-line">
        <span class="success">{{ "➜ " }}</span>
        <span class="directory">{{ "~ " }}</span>
        <span class="user-input" v-text="userInput"></span>
        <input ref="input" type="text" id="dummyKeyboard" class="dummy-keyboard" v-on:keyup="keyup" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import TerminalOutput from "../components/TerminalOutput";

export default {
  name: "Terminal",
  components: {
    TerminalOutput
  },
  props: {
    commands: {
      type: Array,
      default: () => {
        return [];
      }
    },
    initialOutput: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      blacklistedKeyCodes: [38],
      userInput: "",
      terminalOutputs: [this.initialOutput]
    };
  },
  methods: {
    focusInput: function() {
      this.$refs.input.focus();
    },
    execute: function(inputText) {
      const input = inputText.toLowerCase();
      this.terminalOutputs.push(
        `<span class="success">➜  </span>
        <span class="directory">~ </span>` + input
      );

      if (input === "") return;
      if (input === "clear") {
        this.terminalOutputs = [];
        return;
      }

      const output = (() => {
        if (!_.includes(_.keys(this.commands), input)) {
          return `No such command: ${input}`;
        } else {
          return this.commands[input];
        }
      })();

      this.terminalOutputs.push(output);
    },

    keyup: function(e) {
      if (this.blacklistedKeyCodes.includes(e.which)) {
        return;
      }

      if (e.which === 8 || e.which === 46) {
        this.userInput = this.userInput.slice(0, -1);
        return;
      }

      if (e.key === "Enter") {
        this.execute(this.userInput);
        this.userInput = "";
        return;
      }

      if (e.key.length > 1) return null;

      this.userInput = this.userInput + e.key;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
a {
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: inherit;
}

p {
  color: rgb(136, 146, 176);
}

.icon, .sidebar-link {
  transition-duration: 250ms;
}

.icon:hover {
  color: white;
}

.terminal-bar {
  background-color: #eae8e9;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  position: relative;
}

.dark-mode {
  background-image: linear-gradient(180deg, #464248 0%, #3b383d 100%);
  border-bottom: 1px solid rgba(66, 66, 66, 0.5);
}

.dark-mode-text {
  color: #bdb9bf !important;
}

.icon-btn {
  border-radius: 50%;
  margin-top: 7px;
  height: 15px;
  width: 15px;
  margin-bottom: 0.5rem;
}

.terminal-bar > div.icon-btn:first-child {
  margin-left: 0.6rem;
}

.terminal-bar > div.icon-btn:not(:first-child) {
  margin-left: 0.5rem;
}

.terminal-bar > div.icon-btn:last-child {
  margin-right: 0.6rem;
}

.close {
  background-color: #fa615c;
}

.max {
  background-color: #3fc950;
}

.min {
  background-color: #ffbd48;
}

.terminal-window {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 254px;
  padding: 0.5rem 0rem 0rem 0.5rem;
  display: flex;
  flex-direction: column;
}

.primary-bg {
  background-color: rgb(23, 42, 69);
}

.shadow {
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}

.terminal-bar-text {
  position: absolute;
  margin-top: 3px;
  color: #383838;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.has-equal-height {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.terminal-output {
  overflow-y: hidden;
  overflow: auto;
}

.column-child {
  flex: 1;
}

.terminal-line {
  position: relative;
  font-family: 'Anonymous Pro', monospace;
  font-size: 0.9rem;
  color: #b7c5d2;
}

.directory {
  color: #75e1e7;
  font-weight: 500;
}

.success {
  color: #8dd39e;
}

.code, .error, .fa-heart {
  color: #d7566a;
}

.fa-heart {
  padding-top: 0.5rem;
}

.dummy-keyboard {
  opacity: 0;
}

::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 768px) {
  .resume {
    padding-bottom: 0.5rem;
  }
}
</style>
