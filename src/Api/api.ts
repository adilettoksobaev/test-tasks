import Axios from "axios";

export const API = {
    async person() {
        return await Axios.get(`person.json`).then(res => res.data);
    }
}