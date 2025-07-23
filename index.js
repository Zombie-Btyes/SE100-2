// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
// let TotalMSFTStockOpeningPrices = 0;

// for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
//   TotalMSFTStockOpeningPrices += MSFTStockClosingPrices[i];
// }

// console.log(TotalMSFTStockOpeningPrices); 

// const MSFTStockClosingPrices = [
// {
// 	Monday: 254.12,
// 	Tuesday: 253.12,
// 	Wednesday: 256.97,
// 	Thursday: 257.52,
// 	Friday: 258.93
// },
// {
// 	Monday: 292.20,
// 	Tuesday: 289.73,
// 	Wednesday: 291.04,
// 	Thursday: 294.55,
// 	Friday: 296.29
// }]

// // Write your code below
// let i = 0
// let sumOfPrices = 0
// while (i < MSFTStockClosingPrices.length){
//     for (let weekday in MSFTStockClosingPrices[i]){
//         sumOfPrices += MSFTStockClosingPrices[i][weekday]
//     }
//     i++
// }
// console.log(sumOfPrices)


// for (let key of MSFTStockClosingPrices) {
//     for (let day in key) {
//         sumOfStockDailyClosePrice += key[day];
//     }
// }
// console.log(sumOfStockDailyClosePrice);

// for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
// 	sumOfStockDailyClosePrice += MSFTStockClosingPrices[i].Monday + MSFTStockClosingPrices[i].Tuesday + MSFTStockClosingPrices[i].Wednesday + MSFTStockClosingPrices[i].Thursday + MSFTStockClosingPrices[i].Friday;
// }

// sumOfStockDailyClosePrice = MSFTStockClosingPrices[0].Monday + MSFTStockClosingPrices[0].Tuesday + MSFTStockClosingPrices[0].Wednesday + MSFTStockClosingPrices[0].Thursday + MSFTStockClosingPrices[0].Friday +
// MSFTStockClosingPrices[1].Monday + MSFTStockClosingPrices[1].Tuesday + MSFTStockClosingPrices[1].Wednesday + MSFTStockClosingPrices[1].Thursday + MSFTStockClosingPrices[1].Friday;

// console.log(sumOfStockDailyClosePrice); 

// const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
// const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];
// function getBetween(prices, stockName) {
//     let count = 0;
//     for (let price of prices) {
//         if (price > 254 && price < 257) {
//             count++;
//             // console.log(price);
//         }
//     }
//     console.log(`Total count of prices between 254 and 257: ${count}`);
// }

// getBetween(MSFTStockClosingPrices, 'MSFT');
// getBetween(AAPLStockClosingPrices, 'AAPL');

const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

// Write your code below
// function sortPerformanceInAscOrder(performance) {
//     return performance.slice().sort((a, b) => a - b);
// }
// console.log(sortPerformanceInAscOrder(StockDailyPerformance));

const sortPerformanceInAscOrder = performance => performance.slice().sort((a, b) => a - b);
console.log(sortPerformanceInAscOrder(StockDailyPerformance));