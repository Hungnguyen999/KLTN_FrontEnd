<template>
  <div id="header">
    <b-navbar v-if="!login" toggleable="lg" type="light" variant="default">
      <b-navbar-brand :href="baseURL">
        <div>
          <b-img
            src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-education-logo-vector-image-png-image_4092977.jpg"
            rounded="circle"
            alt="Circle image"
            style="width: 5rem;"
          ></b-img>

          <span>
            <b>GoodLearning</b>
          </span>
          <span></span>
        </div>
      </b-navbar-brand>
      <div style="margin-top: 0.3rem">
        <button class="btn btn-category" style="margin-right:0.5rem; margin-left: -2rem;width:115px;height:45px;border-radius:2px" id="popover-target-1">
          <i class="fa fa-bars" aria-hidden="true"></i>
          &nbsp;
          <b>Category</b>
        </button>
        <!--TEST category-->
        
        <!--END test category-->
        <b-popover id="popover1" target="popover-target-1" triggers="hover focus" placement="bottom">
          <template v-slot:title>Chuyên ngành</template>
          <!-- <ul class="menu-category">
          <div class="main-menu">
            <ul class="sub-menu">
                <li>Development

                            <li>All development</li>
                            <li>All development</li>
                            <li>All development</li>
                            <li>All development</li>
                      </ul>
                </li>
        
                
                <li>Development 
                      <ul class="sub-menu-1 any1">
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                        
                        </ul>
                     
                </li>
            
           
                <li>Development
                 
                      <ul class="sub-menu-1 any2">
                        <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                        
                        </ul>
                     
                </li>
           
                
                <li>Development
                      <ul class="sub-menu-1  any3">
                        <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                        
                        </ul>
                     
                </li>
               
             
                <li>Development
                      <ul class="sub-menu-1 any4">
                        <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                          <li>All development</li>
                        
                        </ul>
                      
                </li>
           
                <li>Business
                  <ul class="sub-menu-1 any1">
                  <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                  
                  </ul>
                
                </li>
                <li>IT & Softwar
                <ul class="sub-menu-1 any2">
                  <li>All sddddddddddddddddddevelopment</li>
                    <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                  
                  </ul></li>
                <li>Office Productivity
                  <ul class="sub-menu-1 any3">
                  <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                  
                  </ul>
                </li>
                <li>Personal Development
                  <ul class="sub-menu-1 any4 ">
                  <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                    <li>All development</li>
                  
                  </ul>
                
                </li>
              </ul>
         
          </div>
      </ul> -->
          <ul class="menu-category">
            <li class="text-left">
              <div class="row">
                <div class="col-2">
                  <b-icon-code-slash font-scale="2" style="padding:2px 0 0 0"></b-icon-code-slash>
                </div>
                <div class="col-9" style="font-size:10pt">
                  <li id="popover-target-2">Lập trình</li>
                      <b-popover id="popover2" target="popover-target-2" triggers="hover" placement="righttop">
                        <template v-slot:title>Popover Title</template>
                            <!--Level 2-->
                            <ul class="menu-category">
                              <li class="text-left">
                                <div class="row">
                                  <div class="col-2">
                                    <b-icon-code-slash font-scale="2" style="padding:2px 0 0 0"></b-icon-code-slash>
                                  </div>
                                  <div class="col-9" style="font-size:10pt">
                                    <li id="popover-target-2">Lập trình</li>
                                  </div>
                                </div>
                              </li>
                            </ul>
                      </b-popover>
                </div>
              </div>

            </li>
            <!-- <ul class="menu-category">
            <div class="main-menu">
              <ul class="sub-menu">
                  <li>Development
                        <ul>
                              <li>All development</li>
                              <li>All development</li>
                              <li>All development</li>
                              <li>All development</li>
                        </ul>
                  </li>
                </ul>
            </div>
            </ul> -->
          <ul class="menu-category">
            <div class="main-menu">
              <li class="text-left">
                <div class="row">
                  <div class="col-2">
                    <b-icon-code-slash font-scale="3" style="padding:2px 0 0 0"></b-icon-code-slash>
                  </div>
                  <div class="col-9" style="font-size:10pt">
                    <!-- <span>Quản trị mạng</span> -->
                    
                          <ul class="sub-menu">
                              <li>Quản trị mạng
                                    <ul class="sub-menu-1">
                                      <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                    </ul>
                              </li>
                            </ul>
                        </div>
                  </div>
               
              </li>
          </div>
          </ul>
          <ul class="menu-category">
            <div class="main-menu">
              <li class="text-left">
                <div class="row">
                  <div class="col-2">
                    <b-icon-code-slash font-scale="3" style="padding:2px 0 0 0"></b-icon-code-slash>
                  </div>
                  <div class="col-9" style="font-size:10pt">
                    <!-- <span>Quản trị mạng</span> -->
                    
                          <ul class="sub-menu">
                              <li>Quản trị mạng
                                  <ul class="sub-menu-1 any1">
                                      <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                    </ul>
                              </li>
                            </ul>
                        </div>
                  </div>
               
              </li>
          </div>
          </ul>
           <ul class="menu-category">
            <div class="main-menu">
              <li class="text-left">
                <div class="row">
                  <div class="col-2">
                    <b-icon-code-slash font-scale="3" style="padding:2px 0 0 0"></b-icon-code-slash>
                  </div>
                  <div class="col-9" style="font-size:10pt">
                    <!-- <span>Quản trị mạng</span> -->
                    
                          <ul class="sub-menu">
                              <li>Quản trị mạng
                                   <ul class="sub-menu-1">
                                      <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                        <li>All development</li>
                                      
                                      </ul>
                              </li>
                            </ul>
                        </div>
                  </div>
               
              </li>
          </div>
          </ul>
            <!-- <li class="text-left">
              <div class="row">
                <div class="col-2">
                  <b-icon-code-slash font-scale="2" style="padding:2px 0 0 0"></b-icon-code-slash>
                </div>
                <div class="col-9" style="font-size:10pt">
                  <span>Bảo mật</span>
                </div>
              </div>
            </li>
            <li class="text-left">
              <div class="row">
                <div class="col-2">
                  <b-icon-code-slash font-scale="2" style="padding:2px 0 0 0"></b-icon-code-slash>
                </div>
                <div class="col-9" style="font-size:10pt">
                  <span>Development</span>
                </div>
              </div>
            </li> -->
            
          </ul>
        </b-popover>
      </div>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <b-input-group style="margin-top: 1rem;margin-left: -1.5rem;width: 25rem;height: 2rem">
            <b-form-input type="text" id="input-search" placeholder="Tìm kiếm"></b-form-input>
            <b-input-group-append>
              <b-button variant="outline-info">
                <b-icon-search></b-icon-search>
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <button style="width:115px;height:45px;border-radius:2px margin-left: 1.5rem;" class="btn btn-category">Miễn Phí</button>
          <button style="width:115px;height:45px;border-radius:2px margin-left: 1.5rem;" class="btn btn-category">Dịch Vụ</button>
          <button style="width:115px;height:45px;border-radius:2px margin-left: 1.5rem;" class="btn btn-category">Nguồn tài liệu</button>
<div>
  <div>
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
</div>
          <!--  -->
        </b-navbar-nav>
      </b-collapse>
      <div style="padding: 0 5px 0px 0px;"> 
          <a id="btn-cart" href="#" class="btn btn-lg" style="border-radius:70%">
            <span class="glyphicon glyphicon-shopping-cart"></span>
          </a>
      </div>
      <div class="Login" style="padding: 0 5px 0px 0px;">
          <b-button style="font-size:15px" squared variant="outline-secondary">Đăng nhập</b-button>
          <!--Đăng nhập-->
          
            <!-- <template>
                <div>
                  <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

                  <div class="mt-3">
                    Submitted Names:
                    <div v-if="submittedNames.length === 0">--</div>
                    <ul v-else class="mb-0 pl-3">
                      <li v-for="name in submittedNames" v-bind:key="name">{{ name }}</li>
                    </ul>
                  </div>

                  <b-modal
                    id="modal-prevent-closing"
                    ref="modal"
                    title="Submit Your Name"
                    @show="resetModal"
                    @hidden="resetModal"
                    @ok="handleOk"
                  >
                    <form ref="form" @submit.stop.prevent="handleSubmit">
                      <b-form-group
                        :state="nameState"
                        label="Name"
                        label-for="name-input"
                        invalid-feedback="Name is required"
                      >
                        <b-form-input
                          id="name-input"
                          v-model="name"
                          :state="nameState"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </form>
                  </b-modal>
                </div>
              </template> -->
          <!--Hết phần đăng nhập-->
      </div>
      <div class="Signup" style="padding: 0 5px 0px 0px">
          <b-button style="font-size:15px" squared variant="outline-danger">Đăng ký</b-button>
      </div>
        
        
    </b-navbar>
    <div v-else>Login r</div>
  </div>
  
</template>
<script>
import apiConfig from "../../../API/api.json";
export default {
  created() {
    this.baseURL = apiConfig.baseURL;
  },
    data() {
      return {
        name: '',
        nameState: null,
        submittedNames: [],
        baseURL: "",
        login: false,
        
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
};
</script>
<style lang="scss" scoped>
#header {
  font-family: "Quicksand", sans-serif;
  width: 100%;
  height: 65px;
    overflow-x: visible;
}
#popover1 {
    left: 25px !important;
}
.popover2 {
    margin-right: 55rem;
}
#btn-cart {
  background-color: white;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: #d5dadc;
    border-radius: 5px;
  }
}
.Login .Signup{
  font-size: 15px;
  padding: 0 5px 0px 0px
}
.btn-category {
  width:1rem;
  height: 0.375px;
  border-radius:2px;
  margin-left: 0.5rem;
  background-color: white;
  font-size: 15px;
  &:hover {
    background-color: #d5dadc;
    border-radius: 5px;
  }
}
.menu-category {
  list-style: none;
  float: auto;
  padding: 0;
  margin: 0;
  > li {
    padding: 5px 5px 5px 10px;
    margin: 0;
    background-color:#ffffff;
  }
}
.btn-search {
  color: red;
  margin: 0;
  padding-top: 0.5rem;
  margin-left: -2.2rem;
  &:hover {
    cursor: pointer;
  }
}
#input-search {
  background-color: #d5dadc;
  &:focus {
    background-color: white;
  }
}

/*Navigatinon of udemy sites start from here8*/
.main-menu{
  float:left;
  width:160px;
 /* border:1px solid black;*/
  height:48px;
  
}
.main-menu ul li:hover{background-color:#F4F4F4;  }
  

.main-menu ul {
  list-style-type:none;
  
}
.main-menu ul li{
  width:135px;
  display:block;
  height:47px;
  margin-top: -5px;
  margin-left: -41px;
  padding-top:15px;
  text-align:left;
  
}
.main-menu ul li ul {
  display:none;
  margin-top:15px;
  width :00px;
color: steelblue;
  clear:both;
  
}

.main-menu ul li:hover ul{
  display:block;
}
.main-menu ul li .sub-menu {
  width:240px;
  
}
.main-menu ul li ul li{
  display:block;
  margin-left: 99px;
  text-align:left;
  width:240px;
  height:47px;
  background-color:ghostwhite;
  
}
.main-menu ul li .sub-menu-1 {
    margin-top: -85px;  
}
.main-menu ul li .sub-menu-1.any1 {
    margin-top: -150px;  
}
.main-menu ul li:hover ul li ul{
  display:none;
  color: steelblue;
}


.main-menu ul li:hover .sub-menu li:hover .sub-menu-1{
  display:block;
  float:right;
  margin-left:10px;
  margin-top:-16px;
  padding:0px;
 
}
</style>