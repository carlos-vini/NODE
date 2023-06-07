module.exports = {
    mult(a, b){
        console.log(a*b)
    },

    div(a,b){
        let verify = (a <= 0 || b <= 0) ? console.log('Error') : console.log(a/b);
    }
}