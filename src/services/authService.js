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

export {
    signup
}