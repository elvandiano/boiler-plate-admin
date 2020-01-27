<template>
    <div>
      <v-select ref="vSelect" :value="value" @input="setSelectedInput($event)" :options="data" :placeholder="placeholder" :searchable="searchable"></v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'VSelect2',
  props: {
    'data': Array,
    'placeholder': String,
    'searchable': {
      type: Boolean,
      default: true
    },
    'value': String
  },
  computed: {
    getSelectedVal: {
      get () {
        return this.selectedVal
      },
      set (val) {
        return val
      }
    }
  },
  methods: {
    setSelectedInput (evt) {
      this.$emit('input', evt)
    }
  },
  components: {
    vSelect
  },
  mounted: function () {
  }
}
</script>

<style lang="sass" scoped>
</style>
