// Reference to RBM API helper
const rbmApiHelper = import('@google/rcsbusinessmessaging');

let params = {
   messageText: 'Hello, world!',
   msisdn: '+12223334444',
};
console.log('in');
// Send a simple message to the device
rbmApiHelper.sendMessage(params, function(response) {
   console.log(response);
});