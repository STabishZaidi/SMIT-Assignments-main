// var input() =
function num(a) {

    return function num1(b) {
        return function num2(c) {
            return function num3(d) {
                return a + b + c + d
            }
        }
    }
}
//  num (2)(2)(2)(2)
console.log(num(2)(2)(2)(2))
