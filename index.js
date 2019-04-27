
//s深拷贝
function clone(obj){
    if(typeof obj !=='object' || obj == null) return obj;
    let newObj = new obj.constructor();
    for(let key in Object.getOwnPropertyDescriptors(obj)){
        newObj[key] = clone(obj[key])
    }
    return newObj;
}