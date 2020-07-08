<template>
    <v-app>
        <v-card>
            <v-card-title>
                Quản lý danh sách khóa học
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
            <v-data-table
                :headers="headers"
                :items="courses"
                :items-per-page="10"
                :search="search"
                class="elevation-1"
            >
            <template v-slot:item.disable="{ item }">
            <v-checkbox v-model="item.disable" @click="unActiveItem(item)"></v-checkbox>
        </template>
        </v-data-table>
        </v-card>
    </v-app>
</template>
<script>
import { CommonService } from '../../service/common.service';
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.all";
export default {
    data () {
        return {
                search: '',
                headers: [
                {
                    text: 'Mã khóa học',
                    align: 'start',
                    sortable: false,
                    value: 'course_id',
                },
                { text: 'Tên khóa học', value: 'name' },
                { text: 'Người hướng dẫn', value: 'InstructorName' },

                { text: 'Ngày tạo', value: 'created_at' },
                { text: 'Vô hiệu hóa', value: 'disable' },
                ],
                courses: [],
            }
    },
    created(){
            this.getListCourse();
    },
    methods: {
        getListCourse(){
            this.$store.dispatch("adminGetListCourse")
            .then(response => {
                if(response.data.errorToken === true){
                    CommonService.checkErrorToken(this,response.data.msg)
                }
                else{
                    if(response.data.RequestSuccess === true){
                        this.courses =  response.data.list
                        console.log("danh sách khóa học", this.courses)
                    }
                
                }
            })
        },
        unActiveItem(item){
            const index = this.courses.indexOf(item);
            console.log("index nè",this.courses[index].disable)
            if(this.courses[index].disable==0){
                Swal.fire({
                    title: "Bạn có chắc vô hiệu hóa khóa học này ?",
                    text: "Thao tác sẽ không thể hoàn lại!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Vô hiệu hóa khóa học này"
                }).then(result=>{
                    if(result.value){
                        Swal.fire("Đã vô hiệu hóa khóa học")
                        var vm = this;
                        this.$store
                        .dispatch("adminUnactiveCourse",this.courses[index].course_id)
                            .then(function(response){
                                console.log("this ",vm.courses[index].course_id)
                                vm.getListCourse();
                            })
                    }
                })
            }
            else{
                Swal.fire({
                    title: "Bạn có chắc mở khóa khóa học này ?",
                    text: "Thao tác sẽ không thể hoàn lại!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Mở khóa khóa học này"
                }).then(result=>{
                    if(result.value){
                        Swal.fire("Đã mở khóa khóa học")
                        var vm = this;
                        this.$store
                        .dispatch("adminActiveCourse",this.courses[index].course_id)
                            .then(function(response){
                                console.log("this ",vm.courses[index].course_id)
                                vm.getListCourse();
                            })
                    }
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>