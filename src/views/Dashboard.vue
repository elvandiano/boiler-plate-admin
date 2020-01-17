<template>
  <div class="row">
      <div class="col-6">
        <b-card>
          <bar></bar>
        </b-card>
      </div>
      <div class="col-6">
        <b-card>
          <pie></pie>
        </b-card>
      </div>
  </div>
</template>

<script>
import Bar from '../components/Charts/Bar'
import Pie from '../components/Charts/Pie'

export default {
  name: 'Dashboard',
  components: {
    Bar,
    Pie
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 20px 0 0;
  }
</style>
