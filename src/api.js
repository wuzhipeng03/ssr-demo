export function fetchItem(id) {
    const datas = {
        1:'data-1',
        2:'data-2',
        3:'data-3'
    }
    return new Promise(function (resolve,reject) {
        resolve(datas[id]);
    })
}