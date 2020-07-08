<template>
<div>
<v-app>
    <h1>Bảng thống kê doanh thu</h1>
    <h3>Thống kê số liệu doanh thu </h3>

        <div class="row">
            <div class="col-3">
                <v-combobox
                v-model="yearModel"
                :items="year"
                :search-input.sync="search"
                hint=""
                label="Lựa chọn năm bạn muốn thống kê"
                clearable
                persistent-hint
                small-chips
                item-value=""
                >
                </v-combobox>
            </div>
            <div class="col-3">
                <v-combobox
                v-model="monthModel"
                :items="month"
                :search-input.sync="search"
                item-value=""
                hint=""
                label="Lựa chọn tháng mà bạn muốn thống kê"
                clearable
                persistent-hint
                small-chips
                >
                </v-combobox>
            </div>
            <div class="col-3">
                <v-btn
                class="ma-2"
                :loading="loading4"
                :disabled="loading4"
                color="info"
                @click="loader = 'loading4',handleListDataInfo()"
                >
                Thống kê
                <template v-slot:loader>
                    <span class="custom-loader">
                    <v-icon light>cached</v-icon>
                    </span>
                </template>
                </v-btn>
            </div>
        </div>

    <div class="example">
        <apexcharts width="100%" height="450" type="bar" :options="chartOptions" :series="series"></apexcharts>
    </div>

    <h3>Thống kê số liệu khóa học</h3>
    <div>
      <apexchart width="380"  type="donut" :options="chartOptionss" :series="seriess"></apexchart>
    </div>

       <!-- <div class="field is-grouped" v-for="(item,index) in yearList" :key="index">
            <div class="control">
                <label class="container">
                    <input type="checkbox" checked="checked" :value="yearList[index]"  v-model="selectedYears"  name="example1">
                        <label id="label"> Doanh thu năm {{ yearList[index] }}</label>
                        <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <line-chart
        :width="500"
        :height="300"
        :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','August','September','October','November','December']"
        :datasets="displayedDatasets"
        :options="$options.options"
        ></line-chart> -->
    </v-app>
</div>
</template>
<script>
import numeral from 'numeral';
// import LineChart from './LineChart';
import VueApexCharts from 'vue-apexcharts';
import apiConfig from "../../API/api.json";
import { mapGetters } from 'vuex';
import { CommonService } from '../../service/common.service';
const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                callback: value => numeral(value).format('$0,0')
            }
        }]
    },
    tooltips: {
        mode: 'index',
        callbacks: {
        label(tooltipItem, data) {
                const label = data.datasets[tooltipItem.datasetIndex].label;
                const value = numeral(tooltipItem.yLabel).format('$0,0');
                return `${label}: ${value}`;
            }
        }
    }
};
export default {
name: 'monthly-sales-chart',
name: 'Chart',
// datasets,
options,
components: {
    // LineChart,
    apexcharts: VueApexCharts,
    apexchart: VueApexCharts
},
watch: {
    loader () {
    const l = this.loader
    this[l] = !this[l]

    setTimeout(() => (this[l] = false), 3000)

    this.loader = null
    },
},
data() {
    return {
    year: [],
    month: ['Tất cả',1,2,3,4,5,6,7,8,9,10,11,12],
    yearModel: [],
    monthModel: [],
    search: null,

    options: {},
    seriess: [],

    loader: null,
    loading4: false,
    selectedYears: [2018, 2017],
    yearList: [2018, 2017],
    chartOptions: { //chart cột
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories:[]
        }
    },
    //Chart Donut
    chartOptionss: {
        chart: {
            width: 380,
            type: 'donut',
        },
        labels: ['Số lượng khóa học có phí','Số lượng học miễn phí '],
        dataLabels: {
            enabled: true,
        },
        responsive: [{
            breakpoint: 480,
            options: {
            chart: {
                width: 200
            },
            legend: {
                show: true
            }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    },

    series: [{
        name: 'Doanh thu',
        data: []
    }],

    };
},

created(){
    //this.handleListMonth();
    this.handleListMonthPerYear();
    this.handleCourseStatistical();
    //this.handleListYear();
    //this.handleListRevenues();
},

methods: {
    handleListYear(){
        this.$store.dispatch("adminGetStatistical")
        .then(response => {
                if(response.data.RequestSuccess === true){
                    this.year = response.data.listYear
                }
        })
    },
    handleListMonthPerYear(){
        this.$store.dispatch("adminGetStatistical")
        .then(response => {
                if(response.data.RequestSuccess === true){
                    this.year = this.handleListYear()
                    this.chartOptions = {
                        xaxis:{
                            categories : response.data.listYear
                        }
                    }
                    this.series = [{
                        data: this.handleDataListYear(response.data.totalYear)
                    }]
                }
        })
    },
    //data doanh thu những năm 
    handleDataListYear(arrObject){
        let listData = [];
        for(let i=0;i<arrObject.length;i++){
            listData.push(arrObject[i][0].sum)
        }
        return listData;
    },

    //data doanh thu ngày theo từng tháng
    handleListDayPerMonth(arrObject) {
        let listDay = [];
        for(let i=0;i<arrObject.length;i++){
            listDay.push(arrObject[i][0].day)
        }
        return listDay;
    },
    handleDataListDayPerMonth(arrObject){
        let listData = [];
        for(let i = 0;i<arrObject.length;i++){
            listData.push(arrObject[i][0].sum)
        }
        return listData;
    },

    //data doanh thu tháng trong  năm 
    handleListMonthOneYear(arrObject){
        let listMonth = [];
        for(let i = 0; i<arrObject.length;i++){
            listMonth.push(arrObject[i][0].month)
        }
        return listMonth;
    },
    handleDataListMonthOneYear(arrObject){
        let listData = [];
        for(let i = 0;i<arrObject.length;i++){
            listData.push(arrObject[i][0].sum)
        }
        return listData;
    },

    //Data số liệu course
    handleDataInfoCourse(arrObject){
        let listData = []
        for(let i = 0; i<arrObject.length;i++){
            listData.push(arrObject[i][0].value)
        }
        return listData;
    },
    //load data khóa học lên
    handleCourseStatistical(){
        this.$store.dispatch("adminGetInfoCourseStatistical")
            .then(response => {
                if(response.data.errorToken === true){
                    commonService.checkErrorToken(this,response.data.msg)
                }
                else{
                    if(response.data.RequestSuccess === true){
                        this.seriess = this.handleDataInfoCourse(response.data.array)
                        console.log("sdadasd",this.chartOptionss.labels)
                        console.log("sadasdasdasd",this.seriess)
                    }

                }
            })
            
    },
    //hàm lấy data theo sự lựa chọn
    handleListDataInfo(){
        let vm = this;
        let object = {
            'year' : vm.yearModel,
            'month': vm.monthModel
        }
        this.$store.dispatch("adminGetInfoStatistical",object)
        .then(response => {
            if(response.data.errorToken === true){
                commonService.checkErrorToken(this,response.data.msg);
            }
            else{
                if(response.data.RequestSuccess === true){
                    if(object.month == "Tất cả"){
                        console.log('oke',response.data.listday);
                        this.chartOptions = {
                        xaxis:{
                                categories : this.handleListMonthOneYear(response.data.listday)
                            }
                        }
                        this.series = [{
                            data: this.handleDataListMonthOneYear(response.data.listday)
                        }]
                    }
                    else{
                        console.log('oke',response.data.listday);
                        this.chartOptions = {
                        xaxis:{
                                categories : this.handleListDayPerMonth(response.data.listday)
                            }
                        }
                        this.series = [{
                            data: this.handleDataListDayPerMonth(response.data.listday)
                        }]
                    }
                    
                }
                else{
                        this.$swal({
                        icon: 'warning',
                        title: response.data.msg
                    })
                }
            }
        })
        this.handleListYear();
    },
},  
computed: {
    displayedDatasets() {
    return this.selectedYears.map(year => datasets[year]);
    },
    ...mapGetters({
        adminStatisticalStateList: "adminStatisticalStateList",
        adminStatisticalStateobject: "adminStatisticalStateObject"
    })
}
}
</script>
<style lang="scss" scoped>
/* The container */
.container {
    display: inline;
    position: relative;
    padding-left: 4%;
    margin-bottom: 0px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
#label{
    margin-bottom: -10px;
}
/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    padding-top: 10px;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 15px;
    left: 5px;
    height: 25px;
    width: 25px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

    .container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.custom-loader {
animation: loader 1s infinite;
display: flex;
}
@-moz-keyframes loader {
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
}
@-webkit-keyframes loader {
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
}
@-o-keyframes loader {
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
}
@keyframes loader {
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
}
</style>