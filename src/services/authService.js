const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

const signup = async(formData) => {
    try {
        console.log(BACKEND_URL,'BACKEND')
        const res = await fetch(`${BACKEND_URL}/users/signup`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(formData)
    
        })
        const json = await res.json()
        if(json.error){
            throw new Error(json.error)
        }
        return json

    } catch (error) {
        console.log(error)
    }

}

const signin = async(formData) => {
    const res = await fetch(`${BACKEND_URL}/users/signin`, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(formData)
    })
    const json = await res.json()
    if(json.error){
        return new Error(json.error)
    }
    if(json.token){
        const user = JSON.parse(atob(json.token.split('.')[1]))
        return user
    }
    
}
export {
    signup, signin
}