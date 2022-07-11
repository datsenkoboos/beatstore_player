import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    modules: ['@nuxtjs/tailwindcss'],
    target: 'static',
    router: {
        base: '/beatstore_player/'
    }
})