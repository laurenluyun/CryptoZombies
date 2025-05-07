async function increase(duration) {

    // Check which method is available and use it consistently
    const sendMethod = web3.currentProvider.send ?
        web3.currentProvider.send.bind(web3.currentProvider) :
        web3.currentProvider.sendAsync.bind(web3.currentProvider);

    // First, let's increase time
    await new Promise((resolve, reject) => {
        sendMethod({
            jsonrpc: "2.0",
            method: "evm_increaseTime",
            params: [duration],
            id: new Date().getTime()
        }, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });

    // Next, let's mine a new block
    await new Promise((resolve, reject) => {
        sendMethod({
            jsonrpc: '2.0',
            method: 'evm_mine',
            params: [],
            id: new Date().getTime()
        }, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });

}

const duration = {

    seconds: function (val) {
        return val;
    },
    minutes: function (val) {
        return val * this.seconds(60);
    },
    hours: function (val) {
        return val * this.minutes(60);
    },
    days: function (val) {
        return val * this.hours(24);
    },
}

module.exports = {
    increase,
    duration,
};