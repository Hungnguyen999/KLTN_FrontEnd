<template>
    <v-app>
        <v-card>
            <v-card-title>
                Quản lý giá tiền
            </v-card-title>
            <v-spacer></v-spacer>
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-combobox
                            v-model="select"
                            value=""
                            :items="priceTier"
                            
                            label="Chọn giá tiền"
                            @change="getValueOfPrice(select)"
                        ></v-combobox>
                        <v-card>
                            <v-toolbar height="50px">
                            Thêm giá tiền
                            </v-toolbar>
                                    <v-simple-table height="200px">
                                        <template v-slot:default>
                                        <thead>
                                            <tr>
                                            <th class="text-left">Mã giá tiền</th>
                                            <th class="text-left">Giá tiền</th>
                                            <th class="text-left">Hành động</th>
                                            <th class="text-left">Vô hiệu hóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in price" :key="item.priceTier_id">
                                            <td>{{ item.priceTier_id }}</td>
                                            <td>{{ item.priceTier }}</td>
                                            <td>
                                                <v-button class="btnAction" @click="editItem()">
                                                    <v-icon>mdi-pencil</v-icon>
                                                </v-button>
                                            </td>
                                            <td> 
                                                <v-switch v-model="item.disable" @click="deleteItem(item.priceTier_id,item.disable)"></v-switch>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </template>
                                    </v-simple-table>    
                                <v-card-text style="height: 160px; position: relative">
                                    <v-col cols="12">
                                        <v-row>
                                            <v-form
                                            ref="form"
                                            v-model="valid"
                                            style="width:100%;"
                                            >
                                            <v-text-field
                                                v-model="txtPrice"
                                                :counter="10"
                                                :rules="nameRules"
                                                label="Thêm giá tiền"
                                                style="width:100%"
                                                placeholder="Nhập giá trị"
                                                outlined
                                                required
                                            ></v-text-field>
                                            <v-btn
                                                color="error"
                                                class="float-right"
                                                @click="insertNewPricetier(txtPrice)"
                                            >
                                                Lưu
                                            </v-btn>
                                            <v-btn
                                                color="warning"
                                                class="mr-4 float-right"
                                                @click="resetValidation()"
                                            >
                                                Reset
                                            </v-btn>
                                        </v-form>
                                    </v-row>
                                    </v-col>
                                    
                                </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Tìm kiếm"
                            single-line
                            hide-details
                        ></v-text-field>
                        <v-data-table
                        class="pa-2"
                        outlined
                        tile
                        :headers="Price"
                        :items="ListCoursePrice"
                        :search="search"
                        
                        ></v-data-table>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-combobox
                            v-model="selectMoneytype"
                            :items="moneyType"
                            label="Chọn đơn vị tiền tệ"
                            @change="getValueOfMoneytype(selectMoneytype)"
                            
                        ></v-combobox>
                        <v-card>
                            <v-toolbar height="50px">
                            Thêm đơn vị tiền tệ
                            </v-toolbar>
                                    <v-simple-table  height="200px">
                                        <template v-slot:default>
                                        <thead>
                                            <tr>
                                            <th class="text-left">Mã đơn vị tiền</th>
                                            <th class="text-left">Giá tiền</th>
                                            <th class="text-left">Hành động</th>
                                            <th class="text-left">Vô hiệu hóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in money" :key="item.name">
                                            <td>{{ item.moneyType_id }}</td>
                                            <td>{{ item.moneyType }}</td>
                                            <td> 
                                                <v-button>
                                                    <v-icon>mdi-pencil</v-icon>
                                                </v-button>
                                            </td>
                                            <td> 
                                                <v-switch v-model="item.disable" @click="deleteItemMoney(item.moneyType_id,item.disable)"></v-switch>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </template>
                                    </v-simple-table>    
                                <v-card-text style="height: 160px; position: relative">
                                    <v-col cols="12">
                                        <v-row>
                                            <v-form
                                            ref="form"
                                            v-model="valid"
                                            
                                            style="width:100%;"
                                            >
                                            <v-text-field
                                                :counter="10"
                                                :rules="nameRules"
                                                label="Thêm đơn vị tiền tệ"
                                                style="width:100%"
                                                placeholder="Nhập giá trị"
                                                outlined
                                                required
                                            ></v-text-field>
                                            <v-btn
                                                color="error"
                                                class="float-right"
                                                @click="insertNewPricetier()"
                                            >
                                                Lưu
                                            </v-btn>
                                            <v-btn
                                                color="warning"
                                                class="mr-4 float-right"
                                                @click="resetValidationMoneytype()"
                                            >
                                                Reset
                                            </v-btn>
                                        </v-form>
                                    </v-row>
                                    </v-col>
                                    
                                </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Tìm kiếm"
                            single-line
                            hide-details
                        ></v-text-field>
                        <v-data-table
                        class="pa-2"
                        outlined
                        tile
                        :headers="Unit"
                        :items="ListCourseUnit"
                        :search="search"
                        ></v-data-table>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-app>
</template>
<script>
import { CommonService } from '../../service/common.service'
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.all";

export default {
data () {
    return {
    valid: true,
    txtPrice: '',
    txtMoney: '',
        


    nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],

    absolute: true,
    overlay: false,
    search: '',

    select: '',
    selectMoneytype: '',

    priceTier: [],
    moneyType: [],
    desserts: [],

    price: [],
    money: [],
    //Price
    Price: [
        {
            text: 'Tên khóa học',
            align: 'start',
            sortable: false,
            value: 'courseName',
        },

        { text: 'Người hướng dẫn', value: 'name' },
        { text: 'Giá', value: 'priceTier' },
    ],
    ListCoursePrice: [],

    //Unit
    Unit: [
        {
            text: 'Tên khóa học',
            align: 'start',
            sortable: false,
            value: 'courseName',
        },

        { text: 'Người hướng dẫn', value: 'name' },
        { text: 'Đơn vị tiền', value: 'moneyType' },
    ],

    ListCourseUnit: [],
    }
},
created(){
    this.handleListPrice();
    this.handleListMoneytype();
},
methods: {
    validate () {
    this.$refs.form.validate()
    },
    reset () {
    this.$refs.form.reset()
    },
   
    handleListPrice(){
        this.$store.dispatch("adminGetListPricetier")
        .then(response=>{
            if(response.data.errorToken === true){
                CommonService.checkErrorToken(this,response.data.msg)
            }
            else
            {
                if(response.data.RequestSuccess === true){
                    console.log("dsadvv",response.data.list)
                    this.price = response.data.list
                    for(let i = 0; i < response.data.list.length; i++){
                            this.priceTier.push(response.data.list[i].priceTier)
                            
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
    },

    getValueOfPrice(value){
        console.log("value",value)
        console.log("select", this.select)
        this.$store.dispatch("adminGetListCoursebyPrice",value)
            .then(response => {
                if(response.data.errorToken === true){
                    commonService.checkErrorToken(this,response.data.msg)
                    console.log("cc",value)
                }
                else{
                    if(response.data.RequestSuccess === true){
                        this.ListCoursePrice = response.data.list
                        console.log("drewrew", this.ListCoursePrice)
                        console.log("ccc",value)
                    }
                    else{
                        console.log("ccccs",value)
                    this.$swal({
                        icon: 'warning',
                        title: response.data.msg
                    })
                }
            }
        })
    },
    deleteItem(pricetier_id, disable){  
        let object = {
            'pricetier_id': pricetier_id,
            'disable': disable 
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
            }).then((result) => {
            if (result.value) {
                console.log("disable",object)
                if(object.disable == true){
                    this.$store.dispatch("adminDeletePricetier",object)
                    .then(response =>{
                        if(response.data.errorToken === true){
                            commonService.checkErrorToken(this,response.data.msg)
                        }
                        else{
                            if(response.data.RequestSuccess === true){
                                this.handleListPrice();
                                Swal.fire(
                                'Enabled !',
                                'Your pricetier has been enabled',
                                'success'
                                )
                            }   
                        }
                    })
                }
                else{
                    this.$store.dispatch("adminDeletePricetier",object)
                    .then(response =>{
                        if(response.data.errorToken === true){
                            commonService.checkErrorToken(this,response.data.msg)
                        }
                        else{
                            if(response.data.RequestSuccess === true){
                                this.handleListPrice();
                                Swal.fire(
                                'Disabled !',
                                'Your pricetier has been disabled',
                                'success'
                                )
                            }   
                        }
                    })
                }
            }
        })
    },
    insertNewPricetier(pricetierNewValue){
        console.log("pricetierNewValue",pricetierNewValue);
        this.$store.dispatch("adminInsertPrice",pricetierNewValue)
            .then(response=>{
                if(response.data.ErrorToken === true){
                    commonService.checkErrorToken(this,response.data.msg)
                }
                else{
                    if(response.data.RequestSuccess === true){
                        this.handleListPrice();
                            Swal.fire(
                            'Added !',
                            response.data.msg,
                            'success'
                            )
                    }
                    else{
                        Swal.fire(
                        'Pricetier already exists. Please try with another one !',
                        response.data.msg,
                        'error'
                        )
                    }
                }
            })
    },
    resetValidation(){
        this.txtPrice ="";
    },


    //HandlelistPriceByMoneytype
    handleListMoneytype(){
        this.$store.dispatch("adminGetListMoneytype")
        .then(response=>{
            if(response.data.errorToken === true){
                CommonService.checkErrorToken(this,response.data.msg)
            }
            else
            {
                if(response.data.RequestSuccess === true){
                    this.money = response.data.list
                    console.log("money",this.money)
                    for(let i = 0; i < response.data.list.length; i++){
                            this.moneyType.push(response.data.list[i].moneyType)
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
    },
    getValueOfMoneytype(value){
        this.$store.dispatch("adminGetListCoursebyMoneytype",value)
            .then(response => {
                if(response.data.errorToken === true){
                    commonService.checkErrorToken(this,response.data.msg)
                }
                else{
                    if(response.data.RequestSuccess === true){
                        this.ListCourseUnit = response.data.list
                        console.log("REAL", this.ListCourseUnit)
                    }
                    else{
                        console.log("ccccs",value)
                    this.$swal({
                        icon: 'warning',
                        title: response.data.msg
                    })
                }
            }
        })
    },
    deleteItemMoney(moneyType_id,disable){
        let object = {
            'moneyType_id': moneyType_id,
            'disable': disable 
        }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
            }).then((result) => {
            if (result.value) {
                console.log("disable",object)
                if(object.disable == true){
                    this.$store.dispatch("adminDeleteMoneytype",object)
                    .then(response =>{
                        if(response.data.errorToken === true){
                            commonService.checkErrorToken(this,response.data.msg)
                        }
                        else{
                            if(response.data.RequestSuccess === true){
                                this.handleListMoneytype();
                                Swal.fire(
                                'Enabled !',
                                'Your moneytype has been enabled',
                                'success'
                                )
                            }   
                        }
                    })
                }
                else{
                    this.$store.dispatch("adminDeleteMoneytype",object)
                    .then(response =>{
                        if(response.data.errorToken === true){
                            commonService.checkErrorToken(this,response.data.msg)
                        }
                        else{
                            if(response.data.RequestSuccess === true){
                                this.handleListMoneytype();
                                Swal.fire(
                                'Disabled !',
                                'Your moneytype has been disabled',
                                'success'
                                )
                            }   
                        }
                    })
                }
            }
        })
    },
    insertNewMoneytype(moneytypeNewValue){
    this.$store.dispatch("adminInsertMoneytype",moneytypeNewValue)
        .then(response=>{
            if(response.data.ErrorToken === true){
                commonService.checkErrorToken(this,response.data.msg)
            }
            else{
                if(response.data.RequestSuccess === true){
                    this.handleListMoneytype();
                        Swal.fire(
                        'Added !',
                        response.data.msg,
                        'success'
                        )
                }
                else{
                    Swal.fire(
                    'Moneytype already exists. Please try with another one !',
                    response.data.msg,
                    'error'
                    )
                }
            }
        })
    },
    resetValidationMoneytype(){
        this.txtMoney ="";
    },
},
computed: {

}
}
</script>
<style lang="scss">
    .btnAction {
        border: none;
        cursor: pointer;
        border-radius: 30%;
    }
</style>