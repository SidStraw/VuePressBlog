<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
/*
 * find parent vm by ref
 * @param {String} ref
 * @param {Vue} vm
 * @param {any} def default value
 * @returns {Element}
 */
function findContainerInVm(ref, vm, def) {
  if (!ref) return def;
  let container;
  let parent = vm;
  while ((parent = parent.$parent) && !container) {
    container = parent.$refs[ref];
  }
  // Ensure it's html element (ref could be component)
  if (container && container.$el) {
    container = container.$el;
  }
  return container || def;
}

export default {
  props: ["stick", "tag"],

  data() {
    return {
      needFloat: false,
      stickBottom: 0,
    };
  },

  watch: {
    stick() {
      this.unStick();
      this.stickHandle();
    },
  },

  methods: {
    stickHandle() {
      if (!this.stick) return;
      const stickElement = findContainerInVm(this.stick, this);
      if (!stickElement) return;

      this._stickerScroll = () => {
        const rect = this.$el.getBoundingClientRect();
        const scrollTop =
          document.body.scrollTop + document.documentElement.scrollTop;
        this.needFloat =
          document.body.offsetHeight - scrollTop - rect.height <
          stickElement.offsetHeight;
        this.stickBottom = stickElement.offsetHeight;
      };

      this._stickerScroll();
      window.addEventListener("scroll", this._stickerScroll);
    },

    unStick() {
      this.needFloat = false;
      this.stickBottom = 0;
      window.removeEventListener("scroll", this._stickerScroll);
    },
  },

  mounted() {
    this.stickHandle();
  },

  beforeDestroy() {
    this.unStick();
  },
};
</script>
