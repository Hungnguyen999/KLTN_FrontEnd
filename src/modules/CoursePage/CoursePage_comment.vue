<template>
<v-row align="center" justify="center">
    <v-row justify="center">
    <v-btn class="ma-2" tile outlined color="#FF9800" @click="overlay = !overlay">
        <v-icon left>mdi-pencil</v-icon>Thêm nhận xét về khóa học
    </v-btn>
    <v-overlay :value="overlay">
        <v-card class="mx-auto" max-width="400" style="background-color:white;">
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>
        <v-card-title style="color:black">Top 10 Australian beaches</v-card-title>

        <v-card-subtitle style="color:black" class="pb-0">
            Đánh giá:
            <v-rating
            v-model="rating"
            value="this.ratingValue"
            color="#FFA000"
            background-color="#BDBDBD"
            empty-icon="$ratingFull"
            :click="checkRatingValue(rating)"
            half-increments
            hover
            ></v-rating>
        </v-card-subtitle>
        <v-container v-if="this.ratingValue != 0" style="margin-top:-5%">
            <v-row>
                <v-card-subtitle style="color:black" class="pb-0">
                Nhận xét:</v-card-subtitle>
            <v-col cols="12" md="12" style="margin-top:-5%">
                <v-card-subtitle style="color:red" class="pl-0 pb-0" >Hãy nhập tối đa 25 ký tự !</v-card-subtitle>
                <v-textarea
                background-color="#FFA000"
                counter
                :rules="rules"
                maxlength="25"
                color="#E65100"
                placeholder="Thêm nhận xét ...."
                :value="this.textComment"
                v-model="textComment"
                ></v-textarea>
            </v-col>
       
            </v-row>
        </v-container>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#FF3D00" text @click="overlay = false" >Hủy </v-btn>
            <v-btn color="#FF3D00" text :disabled="this.ratingValue != 0 ? false:true" @click="userInsertComment()">Chia sẻ</v-btn>
        </v-card-actions>
        </v-card>
    </v-overlay>
    </v-row>
</v-row>
</template>

<script>
//import Rating from "../../../node_modules/vue-star-rating/src/star-rating";
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.all";
export default {
data() {
    return{
    absolute: true,
        overlay: false,
        rating: 0,
        rules: [v => v.length <= 25],
        textComment: [],
        ratingValue: 0,
    }
  
},
created(){

},
watch:{
    textComment: function(){
        console.log("đây là text comment",this.textComment)
        return this.textComment;
    },
    ratingValue: function(){
        console.log("đây là giá trị của rating",this.ratingValue)
        return this.ratingValue;
    }
},
methods:{
    checkRatingValue(index){
        this.ratingValue = index;
        return this.ratingValue;
    },
    userInsertComment(){
        console.log('babeee',this.textComment);
        let obj = {
            course_id: this.$route.params.id,
            ratingValue: this.ratingValue,
            textComment: this.textComment,
        }
        this.$store.dispatch("userInsertComment",obj);
        Swal.fire({
            title: 'Cám ơn bạn đã tham gia đánh giá cùng chúng tôi !',
            imageUrl: 'https://lh3.googleusercontent.com/proxy/sWep6ZDWhtFLpr7eqrbDPdcxaBrd7UpNEDePuX2q-gVq0H_PsA57z4tjC9oNV_ksBt3SLbpg0aHJ-T-4NVdyvsjJuJrmWNrDR9vVfBjddV1jHvYTNw',
            background: "#fff url()",
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
        this.overlay = false;
    }
},
components: {},
compouted: {
},
};
</script>