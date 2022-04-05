export const AUTHORIZE = "AUTHORIZE"
export const UNAUTHORIZE = "UNAUTHORIZE"

export const setAuthorized = () => ({
    type: AUTHORIZE
})

export const setUnauthorized = () => ({
    type: UNAUTHORIZE
})