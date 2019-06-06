


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
                       
                        <a target="_blank" class="btn btn-success" v-bind:href="'/edit/'+ risk.risk_id + '?q='+risk.risk_name" >Edit</a>
                       
                    </td>
                    
                    <td><a target="_blank" class="btn btn-danger" v-bind:href="'/delete/'+ risk.risk_id" >Delete</a></td>
                    
                </tr>
            </tbody>
        </table>

        

    </div>


    
    

</template>

<script>
   
    export default {
        data(){
            return{
                risks: []
            }
        },
        created: function()
        {
            this.fetchItems();
        },
        methods: {
            fetchItems()
            {
              let uri = 'https://risk-backend.herokuapp.com/api/risk';
              this.axios.get(uri).then((response) => {
                  this.risks = response.data;
              });
            },
            updateRisk: function() {
              this.loading = true;
              this.axios.put('https://risk-backend.herokuapp.com/api/risk/${this.currentRisk.risk_id}/',this.currentRisk)
                  .then((response) => {
                    this.loading = false;
                    this.currentRisk = response.data;
                    this.fetchItems();
                  })
                  .catch((err) => {
                    this.loading = false;
                    console.log(err);
                  })
            },
        }
    }
</script>

