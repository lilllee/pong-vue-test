import router from "@/router";

const API_URL = process.env.VUE_APP_BACKEND_URL + '/api/users/';

const axios = require('axios');

class UserService {
    async guestLogin(nickname) {
        try {
            const url = API_URL + 'guest-login';
            const response = await axios.post(url.toString(), {}, {
                headers: {
                    'X-Guest-ID': nickname
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async isExist(nickname) {
        const url = API_URL + 'exists/' + nickname;
        let response = await axios.get(url.toString(),{}, {});
        console.log(response);
        return response.data;
    }

    async userLogin(nickname, password) {
        console.log(nickname, password)
        /** call login api */
    }

    async create(username, password, email) {
        if (await this.isExist(username)) {
            return false;
        } else {
            const url = API_URL + 'signin';
            try {
                let response = await axios.post(url, {
                    nickname: username,
                    password: password,
                    email: email
                });
                if (response.data.nickname !== "") {
                    localStorage.setItem('lastLoginUser', response.data.nickname);

                    await router.push({name: 'main', params: { nickname : response.data.nickname}});
                } else {
                    console.log(response);
                }
            } catch (error) {
                console.error('Sign-in failed:', error.response);
            }
        }
    }

}

export default new UserService();
