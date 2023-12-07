// StompSocket.js
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

const socketURL = process.env.VUE_APP_BACKEND_URL + '/stomp/test';

class StompSocket {
    constructor() {
        this.stompSocket = null;
        this.isConnected = false;

        window.addEventListener('beforeunload', this.handlePageRefresh);
    }
    initializeSocket(username, retryCount = 3) {
        if (!this.stompSocket) {
            let sockJS = new SockJS(socketURL);
            this.stompSocket = Stomp.over(sockJS);
            
            let connectCallback = () => {
                this.isConnected = true;
                return this.stompSocket;
            };
            
            let errorCallback = (error) => {
                this.isConnected = false;
                console.error('Connection error:', error);

                if (retryCount > 0) {
                    console.log('Retrying connection...');
                    this.initializeSocket(username, retryCount - 1);
                } else {
                    console.log('Connection failed after multiple retries.');
                }
              };

            this.stompSocket.connect({ username }, connectCallback, errorCallback);

            // this.stompSocket.disconnect(function() {
            //     alert("See you next time!");
            // });
        }
    }
    getStompSocket() {
        return this.stompSocket;
    }
    
    sendMessage(topic, message) {
        if (this.stompSocket) {
            this.stompSocket.send(topic, message);
        } else {
            console.error('StompSocket is not initialized');
        }
    }

    handlePageRefresh = () => {
        if (this.isConnected) {
            console.log('Socket is Connection');
        } else {
            console.log('Socket is DisConnection');
        }
    };
}
export default new StompSocket();
