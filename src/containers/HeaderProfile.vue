<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="../assets/img/avatar.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
      <b-dropdown-item v-on:click="profile"><i class="fa fa-user" /> Profile</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>
      <b-dropdown-item  v-on:click="logout"><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'

export default {
  name: 'HeaderProfile',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {

    }
  },
  methods: {
    logout () {
      alert('Logout Berhasil')
    },
    profile () {
      alert('Profile')
    }
  }
}
</script>
