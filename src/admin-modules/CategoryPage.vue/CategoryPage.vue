<template>
  <div>
    <div class="row">
      <div class="col-8">
        <h1>Danh sách thể loại</h1>
      </div>
      <div class="col-3 offset-1" style="padding-top: 0.5rem">
        <h2 class="text-center">Top 10 Giảng viên</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-8" style="height: 40rem">
        <div class="row">
          <div class="col-6">
            <b-pagination
              v-model="currentPage"
              :total-rows="items.length"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
          </div>
          <div class="col-6">
            <v-text-field
            style="margin-top: -1rem"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
      ></v-text-field>
          </div>
        </div>
        <b-table
          :per-page="perPage"
          :current-page="currentPage"
          responsive
          :fields="fields"
          :items="items"
          :filter="search"
          hover
        >
          <template v-slot:cell(category_id)="data">
            <span style="font-size: 13px;">{{data.item.category_id}}</span>
          </template>
          <template v-slot:cell(name)="data">
            <span style="font-size: 13px;">{{data.item.name}}</span>
          </template>
          <template v-slot:cell(like)="data">
            <span style="font-size: 13px;">
              <i class="fas fa-heart" style="color: red;"></i>
              {{data.item.like}}
            </span>
          </template>
          <template v-slot:cell(detail)="data">
            <span style="font-size: 13px;">
              <router-link
                :to="{name: 'category-detail-page', params: {id: data.item.category_id}}"
              >Chi tiết</router-link>
            </span>
          </template>
        </b-table>
      </div>
      <div class="col-3 offset-1">
        <div class="profile-container">
          <router-link to="1" v-for="i in 10" :key="i">
            <div class="row">
              <div class="col-3">
                <img
                  src="data:image/jpeg;base64,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"
                />
              </div>
              <div class="col-9">
                <div class="profile-content">
                  <div>Tên: Đào Lê Văn Vinh</div>
                  <div>Số lượng khóa học: 192</div>
                </div>
              </div>
            </div>
            <hr />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      currentPage: 1,
      perPage: 10,
      fields: [
        { key: "category_id", label: "Mã thể loại", sortable: true },
        { key: "name", label: "Tên thẻ loại" },
        { key: "like", label: "Lượng thích khóa học", sortable: true },
        { key: "detail", label: "" }
      ],
      items: [
        {
          category_id: 1,
          name: "Development",
          like: 1000
        },
        {
          category_id: 2,
          name: "Math",
          like: 500
        },
        {
          category_id: 3,
          name: "Physical",
          like: 10
        },
        {
          category_id: 4,
          name: "Development",
          like: 1000
        },
        {
          category_id: 5,
          name: "Math",
          like: 500
        },
        {
          category_id: 6,
          name: "Physical",
          like: 10
        },
        {
          category_id: 7,
          name: "Development",
          like: 1000
        },
        {
          category_id: 8,
          name: "Math",
          like: 500
        },
        {
          category_id: 9,
          name: "Physical",
          like: 10
        },
        {
          category_id: 10,
          name: "Development",
          like: 1000
        },
        {
          category_id: 12,
          name: "Math",
          like: 500
        },
        {
          category_id: 13,
          name: "Physical",
          like: 10
        },
        {
          category_id: 14,
          name: "Development",
          like: 1000
        },
        {
          category_id: 15,
          name: "Math",
          like: 500
        },
        {
          category_id: 16,
          name: "Physical",
          like: 10
        },
        {
          category_id: 17,
          name: "Development",
          like: 1000
        },
        {
          category_id: 18,
          name: "Math",
          like: 500
        },
        {
          category_id: 11,
          name: "Physical",
          like: 10
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
button:focus,
input:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
.row {
  margin: 1rem 1rem;
  .col-8 {
    border: 1px solid #ece8e8;
    border-radius: 5px;
    .row {
      margin: 1rem 0;
      .col-6 {
        padding: 0;
      }
    }
  }
  .col-3 {
    border: 1px solid #ece8e8;
    border-radius: 5px;
    padding: 0;

    a {
      color: #000000;
      text-decoration: none;
      &:hover {
        color: #79589f;
      }
    }
    .row {
      margin: 0.5rem;
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
      .col-3 {
        padding: 0;
        text-align: center;
        border: none;
        img {
          width: 3;
          height: 3rem;
        }
      }
      .col-9 {
        padding: 0;
        padding-left: 1rem;
        .profile-content {
          transition: transform 1s;
          &:hover {
            transform: translate(10px, 0);
          }
        }
      }
    }
  }
}
</style>