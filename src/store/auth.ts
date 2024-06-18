import { defineStore } from 'pinia'
import { ComputedRef, computed, ref } from 'vue'

// auth - infra
import { createAuthRepository } from "@core/auth/infraestructure/repositories/auth.repository"
const authRepository = createAuthRepository()

// auth - application
import { login } from '@core/auth/application/login'

// auth - domain 
import type { Auth } from '@core/auth/domain/entities/Auth'


export const useAuthStore = defineStore('auth', () => {
    // state
    const authState = ref<Auth>()

    // computed
    const authStateComputed: ComputedRef<Auth | null> = computed(() => {
        return authState.value
            ? authState.value
            : null
    })

    // methods
    function auth(userName: string, password: string) {
        try {
            login(authRepository, userName, password)
                .then(auth => {
                    authState.value = auth
                })
                .catch(err => {
                    throw new Error(err)
                })
        } catch (error) {
            console.log(error)
        }
    }


    return { auth, authStateComputed }
})