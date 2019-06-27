


<template>
    <div class="container">
        <h1>Field Type</h1>
        <router-link :to="{name: 'addfield'}">
            <button class="btn btn-primary">Add Field Type</button>
        </router-link>
        <br>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Field Type Name</td>
                <td colspan="2">Action</td>
            </tr>
            </thead>
            <tbody>
               <tr v-for="fieldtype in fieldtypes" :key="fieldtype.fieldtype_id">
                    <td>{{ fieldtype.fieldtype_id }}</td>
                    <td>{{ fieldtype.fieldtype_name }}</td>
                    
                    <td>
                        <a target="_blank" class="btn btn-success" v-bind:href="'/editfield/'+ fieldtype.fieldtype_id+ '?q='+fieldtype.fieldtype_name" >Edit</a>
                    </td>
                    
                    <td><a target="_blank" class="btn btn-danger" v-bind:href="'/deletefield/'+ fieldtype.fieldtype_id" >Delete</a></td>
                    
                </tr>
            </tbody>
        </table>

        

    </div>


    
    

</template>

<script>
   
    export default {
        data(){
            return{
                fieldtypes: []
            }
        },
        created: function()
        {
            this.fetchItems();
        },
        methods: {
            fetchItems()
            {
              let uri = 'https://risk-backend.herokuapp.com/api/fieldtype';
              this.axios.get(uri).then((response) => {
                  this.fieldtypes = response.data;
              });
            },
            
        }
    }
</script>

