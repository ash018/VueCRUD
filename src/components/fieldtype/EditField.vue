<template>
  <div class="container">
    <h1>Edit Fieldtype</h1>
    <form v-on:submit.prevent="updateFieldType">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Field Type Name</label>
            <input type="text" class="form-control" v-model="fieldtype.fieldtype_name"/>
          </div>
        </div>
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-primary" >Edit FieldType</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
    props: ['fid'],
    data(){
        return {
          fieldtype: {
            fieldtype_name: this.$route.query.q
          }
        }
    },
    created: function()
    {
        this.fetchField();
        console.log(this.fid);
    },
    
    methods: {
       fetchField() {
            let uri = 'https://risk-backend.herokuapp.com/api/fieldtype/'+this.fid+'/';
            this.axios.get(uri, this.fieldtype).then((response) => {
               console.log(response);
               
            });
       },
       updateFieldType(){
            let uri = 'https://risk-backend.herokuapp.com/api/fieldtype/'+this.fid+'/';
            this.axios.put(uri, this.fieldtype).then((response) => {
               console.log(response);
               this.$router.push("/fieldtype");
            });
       }

    }
}
</script>