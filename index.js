function countDown(n) {
    while (n >= 0) {
        console.log(n--)
    }
}

function writeCards(names) {
    let r = []
    for (let name of names) {
        r.push(`Thank you, ${name}, for the wonderful surprise gift!`)
    }
    return r
}