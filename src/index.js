module.exports = function reverse(n) {
    n = Math.abs(n);
    let text = '';
    let text1 = String(n).split('');
    text1.reverse();
    for (let i = 0; i < text1.length; i++) {
        text = text + text1[i];
    }
    return Number(text);

}
