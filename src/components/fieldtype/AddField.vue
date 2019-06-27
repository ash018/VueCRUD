<template>
  <div class="container">
    <h1>Create A Field Type</h1>
    <router-link :to="{name: 'fieldtype'}">
      <button class="btn btn-default">Show List</button>
    </router-link>
    <form v-on:submit.prevent="addFieldtype">
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
          <button class="btn btn-primary" >Create Fieldtype</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
    data(){
        return {
          fieldtype: {}
        }
    },
    methods: {
       addFieldtype() {
             let uri = 'https://risk-backend.herokuapp.com/api/fieldtype/';
             this.axios.post(uri, this.fieldtype).then((response) => {
               console.log(response);
               this.$router.push("/fieldtype");
            });
       }
    }
}
</script>