import { AuthRepository } from '@core/auth/domain/repository/AuthRepository'

export async function login(repository: AuthRepository, userName: string, password: string) {
    return repository.login(userName, password)
}