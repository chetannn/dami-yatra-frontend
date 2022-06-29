import KhaltiCheckout from "khalti-checkout-web"

let config = {
  "publicKey": process.env.KHALTI_PUBLIC_KEY,
  "productIdentity": "1234567890",
  "productName": "Dami Yatra",
  "productUrl": "http://gameofthrones.com/buy/Dragons",
  "eventHandler": {
    onSuccess (payload) {
      console.log(payload);
    },
    onError (error) {
      console.log(error);
    },
    onClose () {
      console.log('widget is closing');
    }
  },
  "paymentPreference": ["KHALTI"],
};

let checkout = new KhaltiCheckout(config)

export default checkout
