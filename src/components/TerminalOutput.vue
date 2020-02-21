<template>
  <div class="terminal-output" ref="terminalOutput">
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
  color: #b7c5d2;
}

.terminal-output {
  overflow-y: hidden;
  overflow: auto;
}

.code, .error, .fa-heart {
  color: #d7566a;
}

.success {
  color: #8dd39e;
}

.directory {
  color: #75e1e7;
  font-weight: 500;
}
</style>
