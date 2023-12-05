// StompSocket.js
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

let stompSocket = null;
const socketURL = process.env.VUE_APP_BACKEND_URL + '/stomp/test';


export const initializeSocket = (username) => {
    if (!stompSocket) {
        const socketJs = new SockJS(socketURL);
        stompSocket = Stomp.over(socketJs);
        stompSocket.connect({ username }, () => {});
    }
};

export const getStompSocket = () => {
    return stompSocket;
};
