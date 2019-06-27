
 <style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

 </style>
 
  

<template>
    <div class="container">
        <h1>Risks</h1>
        <router-link :to="{name: 'add'}">
            <button class="btn btn-primary">Add Risk</button>
        </router-link>
        <br>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Risk Name</td>
                <td colspan="2">Action</td>
            </tr>
            </thead>
            <tbody>
               <tr v-for="risk in risks" :key="risk.risk_id">
                    <td>{{ risk.risk_id }}</td>
                    <td>{{ risk.risk_name }}</td>
                    
                    <td>
                        <a target="_blank" class="btn btn-success" :data-node=" risk.risk_id " v-on:click="takeClickEdit(risk.risk_id)" >Edit</a>
                    </td>
                    
                    <td><a target="_blank" class="btn btn-danger" v-on:click="takeClickDelete(risk.risk_id)" >Delete</a></td>

                    <td>
                        <a target="_blank" class="btn btn-primary" :data-node=" risk.risk_id " v-on:click="addField(risk.risk_id)" style="color:white;">Add Field</a>
                    </td>

                    <td>
                        <a target="_blank" class="btn btn-warning" :data-node=" risk.risk_id " v-on:click="addPost(risk.risk_id)" >Add Post</a>
                    </td>
                    
                    <td>
                        <a target="_blank" class="btn btn-secondary" :data-node=" risk.risk_id " v-on:click="viewPost(risk.risk_id)" style="color:white;">View Post</a>
                    </td>

                </tr>
            </tbody>
        </table>

        <div v-if="showModal">
            <transition name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">

                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Risk</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="showModal = false">&times;</span>
                            </button>
                        </div>
                        <div class="container">
                            
                            <form v-on:submit.prevent="updateRisk">
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label>Risk Name</label>
                                    <input type="text" id="EditVal" class="form-control" v-model="risk.risk_name" />
                                  </div>
                                </div>
                                </div>
                                <br />
                                <div class="form-group">
                                  <button class="btn btn-primary" >Edit Risk</button>
                                </div>
                            </form>
                          </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                            
                        </div>
                    </div>
                </div>

                </div>
              </div>
            </transition>
          </div>

          <div v-if="showModalDel">
            <transition name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">

                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Delete Risk</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="showModalDel = false">&times;</span>
                            </button>
                        </div>
                        <div class="container">
                            
                            <form v-on:submit.prevent="deleteRisk">
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label>Sure Want to delete? </label>
                                    <input type="text" id="EditVal" class="form-control" v-model="risk.risk_name" readonly/>
                                  </div>
                                </div>
                                </div>
                                <br />
                                <div class="form-group">
                                  <button class="btn btn-danger" >Delete Risk</button>
                                </div>
                            </form>
                          </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="showModalDel = false">Close</button>
                            
                        </div>
                    </div>
                </div>

                </div>
              </div>
            </transition>
          </div>

          <div v-if="addFieldModal">
            <transition name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">

                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Select Field & Add a Label</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="addFieldModal = false">&times;</span>
                            </button>
                        </div>
                        <div class="container">
                            
                            <form v-on:submit.prevent="submitField">
                              <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select class="form-control" v-model="field.field_fieldtype_id">
                                          <option disabled value="">Select Field Type</option>
                                          <option v-for="fieldtype in fieldtypes" :key="fieldtype.fieldtype_id" v-bind:value="fieldtype.fieldtype_id">{{ fieldtype.fieldtype_name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Add Label" id="EditVal" class="form-control" v-model="field.field_label" />
                                    </div>
                                    
                                  </div>
                                
                                </div>
                                <br />
                                <div class="form-group">
                                  <button class="btn btn-primary" >Add Field</button>
                                </div>
                            </form>
                          </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="addFieldModal = false">Close</button>
                            
                        </div>
                    </div>
                </div>

                </div>
              </div>
            </transition>
          </div>

          <div v-if="addPostModal">
            <transition name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">

                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Select Field & Add a Label</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="addPostModal = false">&times;</span>
                            </button>
                        </div>
                        <div class="container">
                            
                            <form v-on:submit.prevent="submitPost()">
                              <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        

                                        <div v-for="(field,index) in fields" :key="field.field_id" :index="index">
                                          <label >{{ field.field_label }}</label>
                                          <input type="hidden"  v-model="posts.field_id[index]"  />
                                          <input v-bind:type="field.field_fieldtype_id.fieldtype_name" class="form-control" v-model="posts.parent_id[index]"/>
                                        </div>



                                    </div>
                                    
                                    
                                  </div>
                                
                                </div>
                                <br />
                                <div class="form-group">
                                  <button class="btn btn-primary" >Submit</button>
                                </div>
                            </form>
                          </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="addPostModal = false">Close</button>
                            
                        </div>
                    </div>
                </div>

                </div>
              </div>
            </transition>
          </div>

          <div v-if="viewPostModal">
            <transition name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">

                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Posted Value</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="viewPostModal = false">&times;</span>
                            </button>
                        </div>
                        <div class="container">
                            
                            
                          <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    
                                    <table class="table table-hover">
                                        <thead>
                                         <tr>
                                            <td  v-for="label in labelArr" :key="label">{{ label }}</td>
                                          </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr v-for="n in rowCount" :key="n">


                                                  <td v-for="x in colCount" :key="x">{{ valueArr[(n-1)+(x-1)*rowCount] }}</td> 
                                                 
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                    
                                </div>
                              </div>
                            </div>
                          </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="viewPostModal = false">Close</button>
                        </div>
                    </div>
                </div>

                </div>
              </div>
            </transition>
          </div>

    </div>


    
    

</template>

<script>
   
    export default {
        data(){
            return{
                risks: [],
                showModal: false,
                showModalDel: false,
                addFieldModal: false,
                addPostModal: false,
                viewPostModal: false,
                riskid: '',
                postid:{
                  post_id:''
                },
                risk: {
                    risk_name: ''
                },

                fieldtype: {
                    fieldtype_name: ''
                },

                field: {
                    field_id:'',
                    field_risk_id:'',
                    field_label:'',
                    field_fieldtype_id: ''
                },

                customField: {
                    field_id:'',
                    field_label:'',
                    field_risk_id: {
                        risk_id:'',
                        risk_name:''
                    },
                    field_fieldtype_id: {
                        fieldtype_id:'',
                        fieldtype_name:''
                    }
                },

                post: {
                    post_id:'',
                    post_value:'',
                    post_field_id:''
                },

                customPost:{
                    post_uid:'',
                    post_id:'',
                    post_value:'',
                    post_field_id:{
                        field_id:'',
                        field_label:'',
                        field_risk_id:{
                            risk_id:'',
                            risk_name:''
                        },
                        field_fieldtype_id:{
                            fieldtype_id:'',
                            fieldtype_name:''
                        }
                    }
                },

                singlePost: {
                  post_val: ''
                },

                fieldtypes: [],

                fields:[],

                posts:{
                  parent_id: [],
                  field_id:[]
                },

                submitFields:{
                  parent_id: []
                },

                labelArr:[],
                valueArr:[],
                finalValueArr:[],
                colCount:'',rowCount:''

            }
        },
        created: function()
        {
            this.fetchItems();
            /*
            let ckeditor2 = document.createElement('script');    ckeditor.setAttribute('src',"//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js");
            document.head.appendChild(ckeditor2);

            let ckeditor = document.createElement('script');    ckeditor.setAttribute('src',"//maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js");
            document.head.appendChild(ckeditor);
            */
            
        },
        methods: {
            fetchItems()
            {
              let uri = 'https://risk-backend.herokuapp.com/api/risk';
              this.axios.get(uri).then((response) => {
                  this.risks = response.data;
              });
            },
            updateRisk(){
                let uri = 'https://risk-backend.herokuapp.com/api/risk/'+this.riskid+'/';
                this.axios.put(uri, this.risk).then((response) => {
                   console.log(response);
                   this.$router.push("/risk");
                });

                this.showModal = false;
                window.location.reload();
            },
            takeClickEdit(id){
                this.showModal = true;
                let uri = 'https://risk-backend.herokuapp.com/api/risk/'+id+'/';
                this.axios.get(uri, this.risk).then((response) => {
                console.log(response.data.risk_name);
                this.risk.risk_name = response.data.risk_name;
                this.riskid = id;
            });

            },

            takeClickDelete(id){
                this.showModalDel = true;
                let uri = 'https://risk-backend.herokuapp.com/api/risk/'+id+'/';
                this.axios.get(uri, this.risk).then((response) => {
                console.log(response.data.risk_name);
                this.risk.risk_name = response.data.risk_name;
                this.riskid = id;
            });

            },

            deleteRisk(){
                let uri = 'https://risk-backend.herokuapp.com/api/risk/'+this.riskid+'/';
                this.axios.delete(uri, this.risk).then((response) => {
                   console.log(response);
                   this.$router.push("/risk");
                });

                this.showModalDel = false;
                window.location.reload();
           },

           addField(id){
                this.addFieldModal = true;
                let uri = 'https://risk-backend.herokuapp.com/api/fieldtype/';
                this.axios.get(uri, this.risk).then((response) => {
                console.log(response.data);
                this.fieldtypes = response.data;
                this.field.field_risk_id = id;
              });
           },

           submitField(){
                let uri = "https://risk-backend.herokuapp.com/api/field/";
                
                
                this.axios.post(uri, this.field).then((response) => {
                   console.log(response);
                   this.addFieldModal = false;
                   window.location.reload();
                });
                
           },

           addPost(id){
                this.addPostModal = true;
                let uri = 'https://risk-backend.herokuapp.com/api/cform/?risk_id='+id;
                this.axios.get(uri, this.customField).then((response) => {
                
                this.customField = response.data;
               
                var i;

                for(i=0;i<response.data.length;i++){
                    this.posts.field_id[i] = response.data[i].field_id;


                }

                

                this.fields = response.data;

                this.riskid = id;


                
              }).catch(function(error) {
                console.log(error);
              });
           },

           submitPost(){
                let uri1 = "https://risk-backend.herokuapp.com/api/maxpost/?risk_id="+this.riskid;

                 
                
                this.axios.get(uri1).then((response) => {
                  var j;
                  var pId;
                  if(response.data.length>0){
                      this.postid = response.data;
                      var parsedobj = JSON.parse(JSON.stringify(this.postid));
                      
                      pId= parsedobj[0].post_id + 1;

                      

                      
                      let uri2 = 'https://risk-backend.herokuapp.com/api/post/';
                      for(j=0;j<this.posts.parent_id.length;j++){
                          this.post= {}
                          this.post.post_id = pId;
                          this.post.post_value = this.posts.parent_id[j];
                          this.post.post_field_id = this.posts.field_id[j];
                          
                          
                          this.axios.post(uri2, this.post).then((response) => {
                              console.log(response);
                          });
                          
                      }

                      window.location.reload();

                  }
                  
                  else{
                      
                      pId   = response.data.length + 1;
                      
                      
                      let uri2 = 'https://risk-backend.herokuapp.com/api/post/';
                      
                      for(j=0;j<this.posts.parent_id.length;j++){
                          this.post= {}
                          this.post.post_id = pId;
                          this.post.post_value = this.posts.parent_id[j];
                          this.post.post_field_id = this.posts.field_id[j];
                         console.log(this.post.post_value);
                         console.log(this.posts.field_id[j]);
                          
                          this.axios.post(uri2, this.post).then((response) => {
                          console.log(response);
                        });
                        
                      }
                      
                      window.location.reload();
                  } 
                  
                });

                
                
           },

           viewPost(id){
              this.viewPostModal = true;
              let uri =  'https://risk-backend.herokuapp.com/api/allpost/?risk_id='+id;
              this.labelArr=[];
              this.valueArr=[];
              this.finalValueArr=[];
              this.axios.get(uri, this.customPost).then((response) => {
                
                this.customPost = response.data;
               
                var parsedobj = JSON.parse(JSON.stringify(response.data));
                
                var i;
                console.log(parsedobj);
                for(i=0;i<parsedobj.length;i++){
                    this.labelArr.push(parsedobj[i].post_field_id.field_label);
                    this.valueArr.push(parsedobj[i].post_value);
                }
                
                this.labelArr = Array.from(new Set(this.labelArr))
                
                console.log(this.valueArr);
                this.colCount = this.labelArr.length;
                this.rowCount = this.valueArr.length/this.colCount;
                this.riskid = id; 

                
               

              }).catch(function(error) {
                console.log(error);
              });
           }

        }
    }
</script>

