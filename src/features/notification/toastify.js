import Toastify from 'toastify-js'

const notification = (message,duration) => {
    console.log(message);
    console.log(duration);
    Toastify({
        text: `${message}`,
        duration: `${duration}`
        }).showToast();
}

export default notification
