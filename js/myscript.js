const { createApp } = Vue

    createApp({
        data() {
        return {
            email : '',
            emailGroup : [],
        }
    },




    methods:{



        getNewRandomEmail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then( (response) => {
                const result = response.data;
                console.log(result.response);
                this.email = result.response;
                this.emailGroup.push(this.email);
                console.log(this.emailGroup);
            })
        },


    },

    created(){
        this.getNewRandomEmail();
    }


}).mount('#app')

