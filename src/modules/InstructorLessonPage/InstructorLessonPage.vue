<template>
  <div>
    <h1>Danh sách bài học</h1>
    <div class="row" style="margin-top: 2rem">
      <div class="col-9">
        <div class="row">
          <div class="col-4">
            <input placeholder="Tìm kiếm tiêu đề khóa học" class="input-search form-control" />
            <button class="btn btn-info btn-search">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div class="col-4">
            <v-select class="my-select" v-model="selected" :items="items" label="Thuộc khóa học"></v-select>
          </div>
          <div class="col-4">
            <v-select class="my-select" v-model="selected" :items="items" label="Sắp xếp"></v-select>
          </div>
        </div>
        <div
          v-for="(lesson,index) in lessonList"
          :key="index"
          style="background: silver;border: 1px solid;padding-left: 1rem"
        >
          <div class="row">
            <div class="col-8">{{lesson.title}}</div>
            <div class="col-4">
                
                <div style="margin-bottom: 1rem;" title="thời lượng"><v-icon>mdi-video</v-icon> :&nbsp;{{lesson.video}}</div>
                <div title="bình luận"><v-icon>mdi-cloud</v-icon> :&nbsp;{{lesson.comment}}</div>
            </div>
          </div>
          <b-collapse :id="'lesson'+index" class="mt-2">{{lesson.description}}</b-collapse>
        </div>
      </div>
      <div class="col-3">
        <b-button
          v-b-toggle.collapse-new-lesson
          variant="danger"
          style="width: 100%;margin-top: 0.75rem"
        >Tạo bài học mới</b-button>
        <b-collapse id="collapse-new-lesson" class="mt-2">
          <v-text-field style="margin-top: 0.5rem;" outlined dense label="Tên bài học"></v-text-field>
          <v-textarea style="margin-top: -1rem;" outlined label="Mô tả bài học" height="5rem"></v-textarea>
          <v-file-input accept="video/*" style="margin-top: -1.2rem;" chips show-size label="Video bài học"></v-file-input>
          <div style="float:right">
            <button style="margin-right: 1rem" class="btn btn-primary">Thêm mới</button>
            <button class="btn btn-warning">Làm mới</button>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 1,
      items: [
        { value: "1", text: "Mới nhất" },
        { value: "2", text: "Cũ nhất" },
        { value: "3", text: "A-Z" },
        { value: "4", text: "Z-A" },
        { value: "5", text: "Miễn phí" },
        { value: "6", text: "Có phí" }
      ],
      lessonList: [
        {
          id: 1,
          title: "Bài 1: Làm quen với PHP",
          description: "Hướng dẫn tạo project và setting cơ bản",
          video: "1p30s",
          comment: 5
        },
        {
          id: 2,
          title: "Bài 2: Route trong PHP",
          description: "Hướng dẫn tạo route và redirect giữa các page",
          video: "2p30s",
          comment: 12
        },
        {
          id: 3,
          title: "Bài 3: function trong PHP",
          description: "Tạo function trong PHP",
          video: "3p30s",
          comment: 21
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
button,
input {
  margin-right: 1rem;
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
.btn-search {
  position: absolute;
  top: 0.75rem;
  height: 2.5rem;
  right: 0rem;
}
.input-search {
  height: 2.5rem;
  padding-right: 3.5rem;
}
.my-select {
  margin: 0;
  margin-top: -0.4rem;
  width: 80%;
}
</style>