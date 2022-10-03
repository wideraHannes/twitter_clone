// we tranform the data we receive in app
export const userTransformer = (user) => {
    const {id,name, email, username, profileImage} = user
    return { id,name, email, username, profileImage }
}