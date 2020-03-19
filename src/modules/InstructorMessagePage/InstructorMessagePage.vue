<template>
  <div style="background: #f4f3ef">
    <h1>Tin nhắn của tôi</h1>
    <div class="row">
      <div class="col-9" v-if="seletedItem != null">
        <div class="text-box-container">
          <MessageList :item="loadSeletedItem"></MessageList>
        </div>
        <div class="my-btn-container">
          <button
            type="button"
            data-toggle="collapse"
            data-target="#myEditor"
            aria-expanded="false"
            aria-controls="myEditor"
            class="btn reply-button btn-info"
            @click="isHide = false"
            v-if="isHide"
          >
            <i class="fas fa-reply"></i> Trả lời
          </button>
          <button
            v-if="!isHide"
            @click="isHide = true"
            type="button"
            data-toggle="collapse"
            data-target="#myEditor"
            aria-expanded="false"
            aria-controls="myEditor"
            class="btn reply-button btn-warning"
          >
            <i class="fas fa-reply"></i> Hủy
          </button>
        </div>
      </div>
      <div class="col-9" v-else>
        <div class="text-center text-box-container" style="background: white;height:100%;padding-top: 8rem">
          <img src="https://tiki.vn/desktop/img/account/tiki-not-found-pgae.png" />
          <h3>Hiện tại không có tin nhắn nào</h3>
        </div>
      </div>
      <div class="col-3 list-container">
        <div class="item" v-for="(item,index) in items" :key="index" @click="setSelectedItem(item)">
          <div class="row">
            <div class="col-4 text-center">
              <img :src="item.avatar" />
            </div>
            <div class="col-8">
              <span>{{item.name}}</span>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-html="myMessage" :editor-toolbar="false"></div>
    <div class="collapse" id="myEditor">
      <vue-editor v-model="myMessage" :editor-toolbar="false" style="background: white"></vue-editor>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "../../../node_modules/vue2-editor/dist/vue2-editor.core";
import MessageList from "../../components/MessageList/MessageList";
export default {
  components: { MessageList, VueEditor },
  data() {
    return {
      isHide: true,
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          name: "Đào Lê Văn Vinh",
          id: "vinhdlv",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          name: "Đào Lê Văn Vinh",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          name: "Đào Lê Văn Vinh",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          name: "Đào Lê Văn Vinh",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          name: "Đào Lê Văn Vinh",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          name: "Đào Lê Văn Vinh",
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          name: "Đào Lê Văn Vinh",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          name: "Đào Lê Văn Vinh",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          name: "Đào Lê Văn Vinh",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ],
      seletedItem: null,
      myMessage: ''
    };
  },
  methods: {
    setSelectedItem(item) {
      this.seletedItem = item;
      console.log(item);
    }
  },
  computed: {
    loadSeletedItem() {
      return this.seletedItem;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
a {
  padding-top: 0.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
.active-class {
  color: #79589f !important;
  border-bottom: #79589f !important;
  background: whitesmoke !important;
}
.row {
  position: relative;
  margin-left: 0;
  margin-bottom: 2rem;
  width: 100%;
  .col-9 {
    padding: 0;
    .text-box-container {
      width: 98%;
      height: 92%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: white;
      border: 1px solid rgb(243, 228, 228);
    }
    .my-btn-container {
      height: 10%;
      width: 98%;
      padding-top: 0.5rem;
      .reply-button {
        float: right;
        &:focus {
          outline: 0px !important;
          -webkit-appearance: none;
          box-shadow: none !important;
        }
      }
    }
  }
  .list-container {
    border: 1px solid rgb(243, 228, 228);
    background-color: white;
    border-radius: 10px;
    padding: 0.5rem 0;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 37rem;
    padding: 0;
    .item {
      opacity: 0.8;
      cursor: pointer;
      width: 99%;
      height: 4.5rem;
      margin: 0;
      margin-right: 1%;
      &:hover {
        opacity: 1;
        background-color: #ece8e8;
      }
      .row {
        margin: 0;
        .col-4 {
          img {
            margin-left: 20%;
            width: 80%;
            height: 2.5rem;
            border-radius: 50%;
            background-color: black;
          }
        }
        .col-8 {
          padding-left: 0;
        }
      }
    }
  }
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 100px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5000px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>