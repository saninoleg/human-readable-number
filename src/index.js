module.exports = function toReadable (number) {
  let digits = ['','one','two','three','four','five','six','seven','eight','nine'];
  let teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let arrNumber = String(number).split('');
  if(number === 0) {
    return "zero";
  }
  if(arrNumber.length === 1) {
    return digits[number];
  }
  if(arrNumber.length === 2) {
      if(arrNumber[0] == 1){
        return teens[arrNumber[1]];
      }
      else if(arrNumber[1] == 0){
        return dozens[arrNumber[0]];
      }
    return `${dozens[arrNumber[0]]} ${digits[arrNumber[1]]}`;
  }
  if(arrNumber.length === 3){
      if(arrNumber[1] == 0 &&  arrNumber[2] == 0){
        return digits[arrNumber[0]] + " hundred";
      }
      else if(arrNumber[1] == 0){
        return `${digits[arrNumber[0]]} hundred ${digits[arrNumber[2]]}`;
      }
      else if(arrNumber[1] == 1){
        return `${digits[arrNumber[0]]} hundred ${teens[arrNumber[2]]}`;
      }
      else if(arrNumber[2] == 0){
        return `${digits[arrNumber[0]]} hundred ${dozens[arrNumber[1]]}`;
      }
    return `${digits[arrNumber[0]]} hundred ${dozens[arrNumber[1]]} ${digits[arrNumber[2]]}`;
  }
}
