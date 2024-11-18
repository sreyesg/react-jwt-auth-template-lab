const BACKEND_URL = "http://localhost:3000"

const signup = async(formData) => {
    try {
        
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