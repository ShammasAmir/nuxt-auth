<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <NuxtLink class="navbar-brand" to="/">NUXT-AUTH</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Posts</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="logout" href="#">Logout</a>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active" to="/auth/register">Register</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active" to="/auth/login">Login</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();

async function logout(){
    await useFetch('/api/auth/logout' , {
        method : 'POST'
    });
    toast.warning("You logged out !");
    return navigateTo('/');
}

</script>