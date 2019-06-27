<template>
  <div class="container">
    <h1>Delete Field Type</h1>
    <form v-on:submit.prevent="deleteFieldType">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Sure Want to delete?</label>
          </div>
        </div>
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-danger" >Delete Field Type</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
    props: ['fid'],
    data(){
        return {
          fieldtype: {}
        }
    },
    created: function()
    {
        this.fetchFieldType();
        console.log(this.fid);
    },
    
    methods: {
       fetchFieldType() {
             let uri = 'https://risk-backend.herokuapp.com/api/fieldtype/'+this.fid+'/';
            this.axios.get(uri, this.fieldtype).then((response) => {
               console.log(response);
               
            });
       },
       deleteFieldType(){
            let uri = 'https://risk-backend.herokuapp.com/api/fieldtype/'+this.fid+'/';
            this.axios.delete(uri, this.fieldtype).then((response) => {
               console.log(response);
               this.$router.push("/fieldtype");
            });
       }

    }
}
</script>