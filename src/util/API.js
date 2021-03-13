import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=gender,name,email,picture";

export default {
    getRandomUsers: function () {
        return axios.get(BASEURL)
    }
}
