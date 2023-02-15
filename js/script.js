var googleFinance = require('google-finance');

console.log("Started...");

googleFinance.companyNews({
    symbol: "NASDAQ:AAPL",
}, function (err, news) {
    console.log(err);
    console.log(news);
});

console.log("Finished!");


