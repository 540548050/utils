
//s深拷贝
function clone(obj){
    if(typeof obj !=='object' || obj == null) return obj;
    let newObj = new obj.constructor();
    for(let key in Object.getOwnPropertyDescriptors(obj)){
        newObj[key] = clone(obj[key])
    }
    return newObj;
}
//countDown
function countDown(){
    var timeoutSecond = 5 * 60;
    var hours = Math.floor(this.timeoutSecond / 3600);
    var minute = Math.floor((this.timeoutSecond % 3600) / 60);
    var second = (this.timeoutSecond % 3600) % 60;

    return {
        hours: hours < 10 ? '0' + hours : hours,
        minute: minute < 10 ? '0' + minute : minute,
        second: second < 10 ? '0' + second : second,
    }
}
