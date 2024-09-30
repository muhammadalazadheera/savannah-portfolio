<template>
  <div>
    <div ref="summernote"></div>
  </div>
</template>

<script>
import 'https://code.jquery.com/jquery-3.4.1.slim.min.js';
import 'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js';

export default {
  props: ['prevBlog'],
  watch: {
    prevBlog: {
      immediate: true,
      handler(newValue) {
        $(this.$refs.summernote).summernote('code', newValue);
      },
    },
  },
  mounted() {
    // Initialize Summernote editor
    $(this.$refs.summernote).summernote({
      height: 200,
      callbacks: {
        onChange: (contents) => {
          this.$emit('summernoteInput', contents);
        }
      }
    });
  }
};
</script>

<style>
  @import url('https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css');
  .note-modal-footer {
    height: 55px !important;
  }
</style>
