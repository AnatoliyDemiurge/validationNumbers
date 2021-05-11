//Проверка на непустой не нулл и на то что это не любой символ кроме цифры или десятичной дроби
const str = document.querySelector('.field');
const btn = document.querySelector('.btn');
str.addEventListener('input',()=>{
    var strValue = str.value;
    console.log(typeof(strValue));
    var strValueClean = strValue.split('.');
    const regexp = /[^0-9 | ^\.]/mg;
    if ((typeof(strValue)) == null || strValue == '' || strValue.match(regexp) || (strValueClean.length > 2)){
        console.log('Вводите только целые числа или десятиченые дроби');
    }else{
        let strOutput = strValue,
            maxNumber = 201.23;
        var strValueCleanFractionPart = strValueClean[1];
        var strValueCleanUnitPart = strValueClean[0];
        var strNulsCleanUnitPart = strValueCleanUnitPart.split('');
        if (strNulsCleanUnitPart[0] == 0) {
            setTimeout(function(){
                let newStr = strNulsCleanUnitPart.join('');
                let newResult = parseInt(newStr,10);
                strValueCleanUnitPart = newResult;
                if (strValueClean.length > 1){
                    strOutput = strValueCleanUnitPart + '.' + strValueCleanFractionPart;
                }else{
                    strOutput = strValueCleanUnitPart;
                }
                str.value = strOutput;
            },100)
        }
        if (strValueClean.length > 1) {
            if (strValueCleanFractionPart.length > 2) {
                setTimeout(function(){ 
                    let arr = strValueCleanFractionPart.split('');
                    let removedArr = arr.splice(0,2); 
                    let newStr = removedArr.join('');  
                    strValueCleanFractionPart = newStr;
                    strOutput = strValueCleanUnitPart + '.' + strValueCleanFractionPart;
                    str.value = strOutput;
                },100);
            }
        }
        if (str.value > maxNumber) {
            str.value = maxNumber;
            
        }
    }
});
