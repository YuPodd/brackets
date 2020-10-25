module.exports = function check(str, bracketsConfig) {
    let stack = [];
    if (str.length % 2 !== 0) {
        return false;
    }
    stack.push(str.charAt(0));
    for (let i = 1; i < str.length; i++) {

        let y = str.charAt(i);

        if (stack.length == 0) {
            stack.push(y);
            continue;
        }
        let x = stack.pop();


        if (isMatch(x, y, bracketsConfig)) {
            // nic
        } else {
            stack.push(x);
            stack.push(y);
        }

    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}

let isMatch = function (x, y, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (x == bracketsConfig[i][0] && y == bracketsConfig[i][1]) {
            return true;
        }
    }
    return false;
}
