import jsonwebtoken from 'jsonwebtoken'

// Refresh tokens
let refreshTokens: any = {};

export default defineEventHandler(async (event) => {

    // console.log('New request: ' + getRequestURL(event))
    console.log('New request: ', event.context)
    // const name = getRouterParam(event, 'name')
    const {username, password} = await readBody(event)
    //username: kminchelle
    const valid = username.length && password === '0lelplR'
    const expiresIn = 15
    const refreshToken =
        Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

    if (!valid) {
        throw new Error('Invalid username or password')
    }

    const accessToken = jsonwebtoken.sign(
        {
            username,
            picture: 'https://github.com/nuxt.png',
            name: 'User ' + username,
            scope: ['test', 'user']
        },
        'dummy',
        {
            expiresIn
        }
    )

    refreshTokens[refreshToken] = {
        accessToken,
        user: {
            username,
            picture: 'https://github.com/nuxt.png',
            name: 'User ' + username
        }
    }

    return {
        token: {
            accessToken,
            refreshToken
        }
    }
})
