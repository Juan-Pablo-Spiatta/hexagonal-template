import type { Auth } from '@core/auth/domain/entities/Auth'

export interface AuthRepository {
    login: (userName: string, password: string) => Promise<Auth>
}