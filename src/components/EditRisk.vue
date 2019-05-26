<template>
  <div class="container">
    <h1>Edit Risk</h1>
    <form v-on:submit.prevent="updateRisk">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Risk Name</label>
            <input type="text" class="form-control" v-model="risk.risk_name"/>
          </div>
        </div>
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-primary" >Edit Risk</button>
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
       updateRisk(){
            let uri = 'http://127.0.0.1:8000/api/risk/'+this.riskid+'/';
            this.axios.put(uri, this.risk).then((response) => {
               console.log(response);
               this.$router.push("/risk");
            });
       }

    }
}
</script>