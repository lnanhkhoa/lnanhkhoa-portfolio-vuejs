<template>
  <div class="terminal-output" ref="terminalOutput">
    <div class="terminal-line text-center">
      Welcome to lnanhkhoa's pages — Type
      <span class="code">help</span> for a list of supported commands.
    </div>
    <div v-bind:key="index" v-for="(output, index) in outputs">
      <div class="terminal-line">
        <span v-html="output"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {resumeFile} from '../views/data'
export default {
  name: "TerminalOutput",
  props: {
    outputs: {
      type: Array
    }
  },
  data(){
    return {
      resumeFile
    }
  },
  updated() {
    this.$refs.terminalOutput.scrollTop = this.$refs.terminalOutput.scrollHeight;
  }
};
</script>

<style lang="stylus">
.terminal-line {
  text-align: left;
  position: relative;
  font-family: 'Anonymous Pro', monospace;
  font-size: 0.9rem;
  // color: #b7c5d2;
  color: #b2ccc5;
}

.terminal-output {
  overflow-y: hidden;
  overflow: auto;
}

.code, .error, .fa-heart {
  color: #17a2b8 !important;
}

.header-name {
  font-weight: 600;
  color: rgb(230, 241, 255);
}

.success {
  color: #dbe9e5;
}

.directory {
  color: #17a2b8;
  font-weight: 500;
}
</style>
