import { getUserByUsername } from "~~/server/db/users"
import bycrpt from 'bcrypt'
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt"
import { userTransformer } from "~~/server/transformers/user"
import { createRefreshToken } from "~~/server/db/refreshTokens"

export default defineEventHandler(async(event) => {
    const body = await useBody(event)
    const {username, password} = body
    if(!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid Params'
        }))
    }

    // is the user Registered
    const user = await getUserByUsername(username)
    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }
    // compare passwords
    const doesThePasswordMatch = await bycrpt.compare(password, user.password)
    if (!doesThePasswordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }
    // Generate Tokens with json webtoken
    // Acces token
    // Refresh token
    const {accessToken, refreshToken } = await generateTokens(user)

    // Save it inside db
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    // Add http only cookie
    sendRefreshToken(event, refreshToken)

    return {
        user: userTransformer(user),
        access_Token: accessToken
    }
})