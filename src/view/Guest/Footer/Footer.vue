<template>
  <div id="footer">
    <div class="row">
      <div class="col-3">
        <b-img
          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-education-logo-vector-image-png-image_4092977.jpg"
          rounded="circle"
          alt="Circle image"
          style="width: 5rem;"
        ></b-img>
        <span>
          <b>GoodLearning</b>
        </span>
      </div>
      <div class="col-2 offset-6">
          <div class="row">
              <div class="col">
                  <a href="#">terms</a>
              </div>
              <div class="col">
                  <a href="#">policy</a>
              </div>
          </div>
      </div>
    </div>
     <b-button v-b-modal.modalPopover>Show Modal</b-button>

  <b-modal id="modalPopover" title="Modal with Popover" ok-only>
    <p>
      This
      <b-button v-b-popover="'Popover inside a modal!'" title="Popover">Button</b-button>
      triggers a popover on click.
    </p>
    <p>
      This <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a> will show a tooltip on
      hover.
    </p>
  </b-modal>
  </div>
  
</template>
<script>
export default {};
</script>
<style scoped>
#footer {
  font-family: "Quicksand", sans-serif;
  background-color: white;
  border-bottom: 10px solid red;
  overflow-x: hidden;
}
.link-container {
  position: absolute;
  right: 0;
}
</style>