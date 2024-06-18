export class Auth {
    private _access_token: string
    private _refresh_token: string
    private _expire_token: number
    private _type_token: string

    constructor(
        access_token: string,
        refresh_token: string,
        expire_token: number,
        type_token: string
    ) {
        this._access_token = access_token
        this._refresh_token = refresh_token
        this._expire_token = expire_token
        this._type_token = type_token
    }

    /* Getters and Setters */

    // access token
    get accessToken(): string {
        return this._access_token
    }
    set accessToken(access_token: string) {
        this._access_token = access_token
    }

    // refresh token
    get refreshToken(): string {
        return this._refresh_token
    }
    set refreshToken(refresh_token: string) {
        this._refresh_token = refresh_token
    }

    // expire token
    get expireToken(): number {
        return this._expire_token
    }
    set expireToken(expire_token: number) {
        this._expire_token = expire_token
    }

    // refresh token
    get typeToken(): string {
        return this._type_token
    }
    set typeToken(type_token: string) {
        this._type_token = type_token
    }


}