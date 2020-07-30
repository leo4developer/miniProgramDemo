function cloneDeep(target,map = new WeakMap()) {
  if ( typeof target === 'object') {
     let cloneTarget = Array.isArray(target) ? [] : {};
      
     if(map.get(target)) {
        return target;
    }
     map.set(target, cloneTarget);
     console.log("map:", map);
     for(const key in target){
        cloneTarget[key] = cloneDeep(target[key], map);
     }
     console.log("cloneTarget:", cloneTarget);
     return cloneTarget
  } else {
    console.log("target", target);
    return target
  }
 
}

const obj = {
  a: '1',
  b: '2',
  list: [
    'a',
    'b',
    'c'
  ]
}

const cloneObj = cloneDeep(obj);
// cloneObj.a = 'aaa';
// console.log(obj, cloneObj);