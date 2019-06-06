
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
                        <a target="_blank" class="btn btn-success" :data-node=" risk.risk_id " v-on:click="edit(risk.risk_id)" >Edit</a>
                    </td>
                    
                    <td><a target="_blank" class="btn btn-danger" v-bind:href="'/delete/'+ risk.risk_id" >Delete</a></td>
                    
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
                            <button type="button" class="btn btn-primary">Save changes</button>
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
                riskid: '',
                risk: {
                    risk_name: ''
                },
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
            edit(id){
                this.showModal = true;
                let uri = 'https://risk-backend.herokuapp.com/api/risk/'+id+'/';
                this.axios.get(uri, this.risk).then((response) => {
                console.log(response.data.risk_name);
                this.risk.risk_name = response.data.risk_name;
                this.riskid = id;
            });

            }

        }
    }
</script>

