// Refresh tokens
let refreshTokens: any = {};

export default defineEventHandler(async (event) => {
    const user = {
        sub: '83692',
        name: 'Alice Adams',
        email: 'alice@example.com',
        department: 'Engineering',
        birthdate: '1975-12-31',
        picture: 'https://github.com/nuxt.png'
    }
    return user
})
