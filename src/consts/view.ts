const log = (...params: any[]) =>{
    return params.map(x=>typeof x ==='bigint' ? `${x.toString()}n` : x).join(' ')

}

const view = {
    log:
}