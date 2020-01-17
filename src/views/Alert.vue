<template>
  <div class="container-fluid">
    <b-link href="https://sweetalert.js.org/guides/"><h5>Doc Sweetalert</h5></b-link><br/>
    <b-button style="width: 200px" @click='warningAlert' variant="warning" size="sm">Alert Warning</b-button><br/><br/>
    <b-button style="width: 200px" @click='errorAlert' variant="danger" size="sm">Alert Error</b-button><br/><br/>
    <b-button style="width: 200px" @click='infoAlert' variant="info" size="sm">Alert Info</b-button><br/><br/>
    <b-button style="width: 200px" @click='successAlert' variant="success" size="sm">Alert Success</b-button>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Alert',
  methods: {
    warningAlert () {
      swal({
        title: 'Are you sure?',
        text: 'Are you sure that you want to leave this page?',
        icon: 'warning',
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal('Deleted!', 'Your imaginary file has been deleted!', 'success')
        }
      })
    },
    successAlert () {
      swal({
        title: 'Saved',
        text: 'Your imaginary file has been saved!',
        icon: 'success'
      })
    },
    errorAlert () {
      swal('Oops!', 'Something went wrong!', 'error')
    },
    infoAlert () {
      swal({
        title: 'Message',
        text: 'Your have a new massage',
        icon: 'info'
      })
    }
  }
}
</script>

<style scoped>

</style>
