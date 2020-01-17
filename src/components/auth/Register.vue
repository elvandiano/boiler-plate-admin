<template>
  <div id="bgrn" class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="5">
          <b-card-group>
            <b-card no-body class="p-4" id="dataInput">
              <b-card-body>
                <b-form>
                  <div align="center" style="margin-bottom: 20px;">
                    <img src="../../assets/img/dn.png" height="102" width="265"/>
                  </div>
                  <a style="color: whitesmoke" >Sudah memiliki akun? <i style="color: #051d1a"><router-link to="/login">Login</router-link></i></a>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Username"
                                  v-model="username"
                                  autocomplete="username email"/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="fa fa-lock"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Password"
                                  v-model="password"
                                  autocomplete="current-password"/>
                  </b-input-group>
                  <b-row>
                    <b-col cols="12">
                      <div align="center">
                        <b-button type="submit" @click="onRegister" variant="primary" style=" border-radius: 20px; width: 80%" class="px-4">Register
                        </b-button>
                      </div>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  watch: {
    username () {}
  },
  beforeCreate () {},
  methods: {
    /**
     * LOGIN Back Office
     * - @param username
     * - @param password
     */
    onRegister () {
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
  #bgrn {
    background-color: antiquewhite;
  }
  #dataInput {
    background: rgba(1,8.1,9.7,0.3);
    border: 0;
    border-radius: 10px;
  }

</style>
