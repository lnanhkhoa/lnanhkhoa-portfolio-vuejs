<template>
  <div class="terminal-output" ref="terminalOutput">
      <div class="terminal-line text-center">Welcome to lnanhkhoa's pages — Type <span class='code'>help</span> for a list of supported commands.</div>
    <div v-bind:key="index" v-for="(output, index) in outputs">
      <div class="terminal-line">
        <span v-html="output"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TerminalOutput",
  props: {
    outputs: {
      type: Array
    }
  },
  beforeUpdate() {
    this.$refs.terminalOutput.scrollTop = this.$refs.terminalOutput.scrollHeight*2;
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
  color: #F3F6F6;
}

.terminal-output {
  overflow-y: hidden;
  overflow: auto;
}

.code, .error, .fa-heart {
  color: #17a2b8!important;
}

.success {
  color: #dbe9e5;
}

.directory {
  color: #17a2b8;
  font-weight: 500;
}
</style>
