<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
// Import Main styles for this application
@import 'assets/sass/view';

// Import Boostrap Styles for this application
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';

// Import Bootstrap Vue Styles
@import '~bootstrap-vue/dist/bootstrap-vue.css';

// Import CoreUI
@import "~@coreui/coreui/scss/coreui";

// Import Font Awesome Icons Set
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome.scss';

</style>
