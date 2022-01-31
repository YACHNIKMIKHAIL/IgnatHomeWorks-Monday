import axios from "axios";

export const RequestAPI = {
    getSuccess(success: boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {"success": success})
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(e => alert(e.response.data.errorText))
    }
}