

export const createUserService = async (name: string, email: string, password: string) => {
    return {
        name,
        email,
        password
    }
};