<template>
  <div class="row">
    <div class="col-6">
      <b-card title="Vertical">
        <b-form>
          <b-form-group
            id="input-group-1"
            label-for="input-1"
            label="Email:"
          >
            <b-form-input
              id="input-1"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Combo" label-for="input-3">
            <v-select-2 :data="options" :placeholder="'Combo'" :searchable="false" class="mb-2"></v-select-2>
          </b-form-group>

          <b-form-group label="Combo With Search" label-for="input-3">
            <v-select-2 :data="options" :placeholder="'Combo'" class="mb-2"></v-select-2>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="info" class="pull-right">Save</b-button>
          <b-button type="reset" variant="light" class="pull-right mr-2">Cancel</b-button>
        </b-form>
      </b-card>
    </div>
    <div class="col-6">
      <b-card title="Horizontal">
        <b-form>
          <b-form-group
            label-cols="3"
            label="Email:"
          >
            <b-form-input
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label="Your Name:">
            <b-form-input
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-form-group label-cols="3" label="Combo">
            <v-select-2 :data="options" :placeholder="'Combo'" :searchable="false" class="mb-2"></v-select-2>
          </b-form-group>

          <b-form-group label-cols="3" label="Combo With Search">
            <v-select-2 :data="options" :placeholder="'Combo'" class="mb-2"></v-select-2>
          </b-form-group>

          <b-form-group>
            <b-form-checkbox-group id="checkboxes-4">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="info" class="pull-right">Save</b-button>
          <b-button type="reset" variant="light" class="pull-right mr-2">Cancel</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import VSelect2 from '../components/VSelect2'

export default {
  name: 'Form',
  components: {
    VSelect2
  },
  data () {
    return {
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      options: [
        'foo',
        'bar',
        'baz'
      ],
      show: true
    }
  }
}
</script>
