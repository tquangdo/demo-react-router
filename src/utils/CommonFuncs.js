let timIndexOfArr = (arr_arg, id_arg) => {
    let idx = -1
    arr_arg.every((item, i) => {
        if (id_arg === item.id) {
            idx = i
            return false
        } else return true
    })
    return idx
}

export {
    timIndexOfArr
}
