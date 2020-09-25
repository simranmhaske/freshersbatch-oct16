const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const braintree = require('braintree')

const app = express();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/initializeBraintree', async (req, res) =>  {
    const gateway = braintree.connect({
        "environment": braintree.Environment.Sandbox,
        "merchantId": "czqsmsft5xcjjz79",
        "publicKey": "t2pj654zh56z8pvx",
        "privateKey": "b1a98670d42f1af7f34cec8193d3986e"
    });
    let token = (await gateway.clientToken.generate({})).clientToken;
    res.send({data: token});
});

app.post('/confirmBraintree', async (req, res) =>  {
    const data = req.body;
    const gateway = braintree.connect({
        "environment": braintree.Environment.Sandbox,
        "merchantId": "czqsmsft5xcjjz79",
        "publicKey": "t2pj654zh56z8pvx",
        "privateKey": "b1a98670d42f1af7f34cec8193d3986e"
    });
    let transactionResponse = await gateway.transaction.sale({
        amount: data.amount,
        paymentMethodNonce: data.nonce,
        options: {
            submitForSettlement: true
          }
    });
    
    console.log(transactionResponse);
    res.send({data: transactionResponse});
});


const PORT = process.env.PORT || 8006;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });