/* Task-4

1) How to compare two JSON have the same properties without order?
    a. var obj1 = {name:"person 1 ",age:5}
    b. var obj2 = {age:5, name: "person1"}*/

//comparing two objects whose order are not same passing two objects in the argumebnt
function noOrder(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            if (typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
                if (!isEqual(obj1[objKey], obj2[objKey])) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    return true;
}
console.log(noOrder(obj1, obj2));