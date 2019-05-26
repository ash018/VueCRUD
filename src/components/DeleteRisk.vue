<template>
  <div class="container">
    <h1>Delete Risk</h1>
    <form v-on:submit.prevent="deleteRisk">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Sure Want to delete?</label>
          </div>
        </div>
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-danger" >Delete Risk</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
    props: ['riskid'],
    data(){
        return {
          risk: {}
        }
    },
    created: function()
    {
        this.fetchRisk();
        console.log(this.riskid);
    },
    
    methods: {
       fetchRisk() {
             let uri = 'http://127.0.0.1:8000/api/risk/'+this.riskid+'/';
            this.axios.get(uri, this.risk).then((response) => {
               console.log(response);
               
            });
       },
       deleteRisk(){
            let uri = 'http://127.0.0.1:8000/api/risk/'+this.riskid+'/';
            this.axios.delete(uri, this.risk).then((response) => {
               console.log(response);
               this.$router.push("/risk");
            });
       }

    }
}
</script>