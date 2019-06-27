
<template>
  <div class="container">
    <h1>Edit Risk</h1>
    <form v-on:submit.prevent="updateRisk">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Risk Name</label>
            <input type="text" id="EditVal" class="form-control"  v-model="risk.risk_name"/>
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
          risk: {
            risk_name: this.$route.query.q
          },
          name: 'hello',
        }
    },
    created: function()
    {
        //this.fetchRisk();
        console.log(this.riskid);
    },

    watch: {
        risk() {
             let uri = 'http://127.0.0.1/api/risk/'+this.riskid+'/';
            this.axios.get(uri, this.risk).then((response) => {
               console.log(response.data.risk_name);
               this.risk.risk_name = response.data.risk_name;
               
            });
       }
    },
    
    methods: {
       fetchRisk() {
             let uri = 'https://risk-backend.herokuapp.com/api/risk/'+this.riskid+'/';
            this.axios.get(uri, this.risk).then((response) => {
               console.log(response.data.risk_name);
               this.risk.risk_name = response.data.risk_name;
               
            });
       },
       updateRisk(){
            let uri = 'https://risk-backend.herokuapp.com/api/risk/'+this.riskid+'/';
            this.axios.put(uri, this.risk).then((response) => {
               console.log(response);
               this.$router.push("/risk");
            });
       }

    }
}
</script>