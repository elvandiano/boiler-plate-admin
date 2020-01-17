<template>
  <div class="container-fluid">
    <div class="card" style="padding: 20px 20px 20px 20px">
      <table-plate sticky-header="false" :columns="tableColumn" :item="listItem" :useNumber="false"
                    @pagination="getDataTable">
        <template slot="action" slot-scope="data">
          <b-button style="margin: 0 3px 0 3px" size="sm" variant="info" @click="editTable(data.item)"><i class="fa fa-pencil"></i></b-button>
          <b-button style="margin: 0 3px 0 3px" size="sm" variant="success" @click="detailTable(data.item)"><i class="fa fa-table"></i></b-button>
          <b-button style="margin: 0 3px 0 3px" size="sm" variant="danger" @click="deleteTable"><i class="fa fa-trash"></i></b-button>
        </template>
      </table-plate>
    </div>
  </div>
</template>

<script>
import TablePlate from '../components/Table'
import { BaseMixin } from '../components/BaseMixin'
export default {
  name: 'table',
  data () {
    return {
      tableColumn: [
        { key: 'number', label: 'No', tdClass: 'text-center', thClass: 'text-center index th-fixed' },
        { key: 'nama', label: 'Nama', thClass: 'th-fixed' },
        { key: 'alamat', label: 'Alamat', thClass: 'th-fixed' },
        { key: 'status', label: 'Status', thClass: 'th-fixed' },
        { key: 'noHp', label: 'No Hp', thClass: 'th-fixed text-center', tdClass: 'text-center' },
        { key: 'harga', label: 'Harga', thClass: 'th-fixed, text-right', tdClass: 'text-right' },
        { key: 'action', label: 'Aksi', thClass: 'th-fixed, text-center', tdClass: 'text-center' }
      ],
      listItem: {},
      listData: [
        { nama: 'doyok', alamat: 'tegal', status: 'duda', noHp: '08939472883', harga: 'Rp 9.000.000' },
        { nama: 'pawit', alamat: 'kemal', status: 'janda', noHp: '08932372883', harga: 'Rp 300.000' },
        { nama: 'sehan', alamat: 'kepo', status: 'jomblo', noHp: '08937244883', harga: 'Rp 500.000' },
        { nama: 'gama', alamat: 'ga tau', status: 'single', noHp: '08939462883', harga: 'Rp 16.000.000' },
        { nama: 'ijal', alamat: 'tanya sendiri', status: 'menikah', noHp: '044939472883', harga: 'Rp 7.000' }
      ]
    }
  },
  components: {
    TablePlate
  },
  mixins: [BaseMixin],
  created () {
    this.getDataTable()
  },
  methods: {
    getDataTable () {
      let pages = {
        totalElements: 7,
        size: 10,
        number: 0
      }
      this.listItem = Object.assign({
        data: this.listData,
        total: pages.totalElements,
        size: pages.size,
        page: pages.number + 1
      })
    },
    editTable (val) {
      alert('cek console')
      console.log('value row edit', val)
    },
    detailTable (val) {
      alert('cek console')
      console.log('value row edit', val)
    },
    deleteTable () {
      alert('data berhasil dihapus')
    }
  }
}
</script>

<style scoped>

</style>
