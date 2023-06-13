const { createApp } = Vue

    createApp({
        data() {
        return {
            message: 'Hello Vue!',

            
            emailGroup : [],
        }
    },




    methods:{



        getNewRandomEmail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (response){
                const result = response.data;
                console.log(result.response);
            })
        },


    },

    created(){
        this.getNewRandomEmail();
    }


}).mount('#app')

