<template>
  <div class="home">
    <div class="container">
      <!-- heros list -->
      <div class="players__info">
        <el-table :data="displayData" border v-loading="loading">
          <el-table-column prop="img" label="Hero Image" width="100">
            <template slot-scope="scope">
              <div class="block"><el-avatar shape="square" :size="50" :src="`https://api.opendota.com${scope.row.img}`"></el-avatar></div>
            </template>
          </el-table-column>
          <el-table-column prop="localized_name" label="Hero Name" />
          <el-table-column prop="pro_win" label="Pro Win Rate" />
          <el-table-column prop="pro_pick" label="Pro Pick Count" />
          <el-table-column prop="pro_ban" label="Pro Ban Count" />
        </el-table>
        <el-pagination
          background
          hide-on-single-page
          layout="prev, pager, next"
          :page-size="pageSize"
          :current-page="currentPage"
          @current-change="e => currentPage = e"
          :total="items.length">
        </el-pagination>
      </div>

      <!-- top 10 with win ratio -->
      <el-table :data="displayData" border v-loading="loading" style="margin-top: 20px;">
        <el-table-column prop="localized_name" label="Player Name" />
        <el-table-column label="Game result in past 20 games">
          <template slot-scope="scope">
            <Chart v-if="scope.row.roles" :chartData="chartData" :chartType="chartType" />
          </template>
        </el-table-column>
      </el-table>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from '../components/Chart.vue'
export default {
  components: { Chart },
  data: () => ({
    loading: true,
    pageSize: 5,
    currentPage: 1,
    items: [],

    chartData: {
      labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7"],
      datasets: [
        {
          label: 'Dataset 1',
          data: [1, 2, 3, 4, 6],
          backgroundColor: '#409EFF',
        },
      ],
    },
    chartType: "bar",
  }),
  computed: {
    displayData() {
      if (!this.items || this.items.length === 0) return [];
      return this.items.slice(this.pageSize * this.currentPage - this.pageSize, this.pageSize * this.currentPage)
    }
  },
  methods: {
    async get() {
      this.loading = true;
      await axios.get('https://api.opendota.com/api/heroStats').then(async res => {
        this.items = res.data
        for(let i = 0; i < 10; i++) {
          await axios.get(`https://api.opendota.com/api/players/${this.items[i].id}/recentMatches`).then(x => console.log(x));
        }
      });
      this.loading = false;
    }
  },
  created() {
    this.get()
  }
}
</script>

<style lang="scss">
.players__info {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  .el-table .el-table__cell { text-align: center !important; }
}
</style>