<template>
  <div class="container">
    <h1>Create A Risk</h1>
    <router-link :to="{name: 'risk'}">
      <button class="btn btn-default">Show List</button>
    </router-link>
    <form v-on:submit.prevent="addRisk">
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
          <button class="btn btn-primary" >Create Risk</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
    data(){
        return {
          risk: {}
        }
    },
    methods: {
       addRisk() {
             let uri = 'http://127.0.0.1:8000/api/risk/';
            this.axios.post(uri, this.risk).then((response) => {
               console.log(response);
               this.$router.push("/risk");
            });
       }
    }
}
</script>