// Code your solution in this file!
function distanceFromHqInBlocks(blockValue){
    let result = Math.abs(blockValue - 42);
    return result 
}

function distanceFromHqInFeet(blockValue){
    let result = distanceFromHqInBlocks(blockValue) * 264;
    return result;
}

function distanceTravelledInFeet(start, blockValue){
    let result = Math.abs(start - blockValue) * 264;
    return result
}

function calculatesFarePrice(start, blockValue) {
    let result = Math.abs(start - blockValue) * 264;
    if (result <= 400) {
        return 0;
    } else if (result > 400 && result < 2000) {
        return (result - 400) * 0.02;
    } else if (result > 2000 && result <= 2500){
        return 25;
    } else if (result > 2500)
        return 'cannot travel that far'
};