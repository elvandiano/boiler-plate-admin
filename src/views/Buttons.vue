<template>
  <div>
    <div class="mb-2">
      <h4>Small</h4>
      <b-button class="mr-1" size="sm" variant="primary">Primary</b-button>
      <b-button class="mr-1" size="sm" variant="info">Info</b-button>
      <b-button class="mr-1" size="sm" variant="danger">Danger</b-button>
      <b-button size="sm" variant="light">Light</b-button>
    </div>
    <div class="mb-2">
      <h4>Normal</h4>
      <b-button class="mr-1" variant="primary">Primary</b-button>
      <b-button class="mr-1" variant="info">Info</b-button>
      <b-button class="mr-1" variant="danger">Danger</b-button>
      <b-button variant="light">Light</b-button>
    </div>
    <div class="mb-2">
      <h4>Large</h4>
      <b-button class="mr-1" size="lg" variant="primary">Primary</b-button>
      <b-button class="mr-1" size="lg" variant="info">Info</b-button>
      <b-button class="mr-1" size="lg" variant="danger">Danger</b-button>
      <b-button size="lg" variant="light">Light</b-button>
    </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  name: 'Buttons',
  components: {
    BButton
  }
}
</script>

<style scoped>

</style>
