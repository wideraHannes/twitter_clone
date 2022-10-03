
export default () => {
    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }
    const setUser = (newUser) => {
        const authUser = useAuthToken()
        authUser.value = newUser
    }

    const login = ({username, password}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })
                /* accestoken and user in memory -> when refresh both gone  */
                setToken(data.access_Token)
                setUser(data.user)
                console.log(data)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const refreshToken = () => {
        return Promise( async (res, rej) => {
            try {
                const data = await $fetch('/api/auth/refresh')
                setToken(data.access_Token)
            } catch (error) {
                
            }
        })
    }

    // called when refresh the page
    const initAuth = () => {
        return Promise( async (res, rej) => {
            try {
                await refreshToken()
            } catch (error) {
                
            }
        })
    }

    return {
        login,
        useAuthUser
    }
}