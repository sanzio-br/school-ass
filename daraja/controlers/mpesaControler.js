import  Mpesa from 'mpesa-node'

const mpesaApi = new Mpesa(
    { consumerKey: process.env.CUSTOMERKEY, consumerSecret: process.env.CUSTOMERSECRET
})

export const simulatePay = ()=>{
    mpesaApi
    .c2bSimulate(
        254113608188,
        1,
        'h6dk0Ue2'
    )
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
}