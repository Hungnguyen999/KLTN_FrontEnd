<template>
  <div>
    <div class="row">
        <div class="col-9">
          <div class="text-box-container"></div>
          <div class="input-box"></div>
        </div>
        <div class="col-3 list-container">
          <div class="item" v-for="(item,index) in items" :key="index">
            <div class="row">
              <div class="col-4 text-center">
                <img :src="item.avatar" />
              </div>
              <div class="col-8">
                <span>Đào Lê Văn Vinh</span>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
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
  width: 100%;
  .col-9 {
    padding: 0;
    .text-box-container {
      background-color: whitesmoke;
      width: 98%;
      height: 80%;
      border: 1px solid #ece8e8;
    }
    .input-box {
      border: 1px solid #ece8e8;
      border-top: none;
      width: 98%;
      height: 20%;
    }
  }
  .list-container {
    border: 1px solid #ece8e8;
    border-radius: 5px;
    padding: 0.5rem 0;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 37rem;
    padding: 0;
    .item {
      opacity: 0.8;
      cursor: pointer;
      width: 99%;
      margin-right: 1%;
      &:hover {
        opacity: 1;
        background-color: #ece8e8;
      }
      .row {
        height: 4rem;
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