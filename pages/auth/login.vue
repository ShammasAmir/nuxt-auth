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
                    <button :disabled="loading" class="btn btn-primary">
                        Login
                        <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useToast } from "vue-toastification";

const errors = ref([])
const loading = ref(false)

const formData = reactive({
    email: "",
    password: ""
});

const toast = useToast();

async function login(){
    try {
        loading.value = true
        const user = await $fetch(
            '/api/auth/login',
            {
                method: 'POST',
                body: formData
            }
        )
        toast.success("You logged in successfully !")
        return navigateTo('/')
    } catch (error) {
        errors.value = Object.values(error.data.data).flat()
    } finally {
        loading.value = false
    }
}

</script>