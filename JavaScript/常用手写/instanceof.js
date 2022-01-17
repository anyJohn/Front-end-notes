function myInstanceof(obj, func) {
  if (!(obj && ["object", "function"].includes(typeof obj))) {
    return false;
  }
  let proto = obj;
  while (true) {
    if (proto === null) {
      return false;
    } else if (proto === func.prototype) {
      return true;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }
}
function Person() {}
let p = new Person();
console.log(myInstanceof({}, Object)); // true
console.log(myInstanceof(p, Person)); // true
console.log({}, Person); // false
