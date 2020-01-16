function updateObjectWithKeyAndValue(object, key, value){
  var obj = {key: value}
  var newObj = object.assign({}, obj);
  return newObj;
}
