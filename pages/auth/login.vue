<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-4">
                <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                    </ul>
                </div>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email address</label>
                        <input type="text" v-model="formData.email" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password" class="form-label">Password</label>
                        <input type="password" v-model="formData.password" class="form-control" id="password" />
                    </div>
                    <button class="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

const errors = ref([])

const formData = reactive({
    email: "",
    password: ""
});

async function login(){
    try {
        const user = await $fetch(
            '/api/auth/login',
            {
                method: 'POST',
                body: formData
            }
        )
        console.log(user);
        // return navigateTo('/')
    } catch (error) {
        errors.value = Object.values(error.data.data).flat()
    }
}

</script>