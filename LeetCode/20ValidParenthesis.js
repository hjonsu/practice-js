/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    if (s.length % 2 === 1) return false;

    if (s[0] ===  "}" || s[0] ===  ")" ||  s[0] ===  "]") return false;

    let stack = [] 
    for (let i=0; i<s.length; i++) {
        if (obj[s[i]]) {
            stack.push(s[i]);
        } else if (obj[stack.pop()] !== s[i]) {
            return false
        }
    }
    return stack.length === 0;
}