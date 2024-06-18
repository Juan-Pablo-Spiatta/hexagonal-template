// auth - domain
import { Auth } from '@core/auth/domain/entities/Auth'
import type { AuthRepository } from '@core/auth/domain/repository/AuthRepository'

// http
// import { Axios as Http } from '@http/axios'

// const httpClient = new Http()

export function createAuthRepository(): AuthRepository {
    return {
        login
    }
}

async function login(userName: string, password: string): Promise<Auth> {
    return new Promise((resolve, reject) => {
        try {
            const response = userName === 'jspiatta' && password === 'jspiatta123'

            if (response) {
                resolve(new Auth('accesstoken123', 'refreshtoken123', 5000, 'Bearer'))
            } else {
                reject('invalid_user_or_password')
            }
        } catch (error) {
            reject(error)
        }
    })
}
