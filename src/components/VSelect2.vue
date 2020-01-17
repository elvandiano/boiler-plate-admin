<template>
    <div>
      <v-select :options="data"></v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'VSelect2',
  props: ['data'],
  components: {
    vSelect
  }
}
</script>

<style lang="sass" scoped>
</style>
