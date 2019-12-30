export interface LoginRequestBody {
  readonly email: string
  readonly password: string
}

export interface LoginResponseBody {
  readonly id: string
  readonly email: string
  readonly session: {
    readonly key: string
    readonly expiresAt: string
    readonly passwordSetAt: string
  }
}
