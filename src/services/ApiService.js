import axios from "axios";
import { USERS_API } from "../constants/main";

export const ApiService = {
    fetchUsers: async () => {
        return await axios.get(USERS_API);
    },
    fetchUserById: async (id) => {
        return await axios.get(`${USERS_API}/${id}`);
    }
}