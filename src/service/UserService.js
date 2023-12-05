import axios from 'axios';

const API_URL = process.env.VUE_APP_BACKEND_URL + '/api/users/';

class UserService {
    async guestLogin(nickname) {
        try {
            const response = await axios.post(API_URL + 'guest-login', {}, {
                headers: {
                    'X-Guest-ID': nickname
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error during guest login:', error);
            throw error;
        }
    }

    // async userLogin(nickname) {
    //     try {
    //         const response = await axios.post(API_URL + 'login',{nickname : nickname}, {})
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error', error);
    //         throw error;
    //     }
    // }
}

export default new UserService();
