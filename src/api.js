import Axios from 'axios'
import urls from './URLs.js'

const size = 10;
const appkey = {
    appkey: 'dongmeiqi_1551761333531'
}

const myAjax = Axios.create({
    params: {
        ...appkey
    },
    method: 'get',
    baseURL: urls.baseURL
})

export default {
    findByPage(page=1) {
        return myAjax.get(urls.findByPage, {
            params: {
                page,
                size
            }
        })
    },
    updateStu(data) {
        return myAjax.get(urls.updateStu, {
            params: {
                ...data
            }
        })
    },
    delBySno(sNo) {
        return myAjax.get(urls.delBySno, {
            params: {
                sNo
            }
        })
    },
    stuSearch(search, page) {
        return myAjax.get(urls.stuSearch, {
            params: {
                sex: -1,
                search, 
                page,
                size
            }
        })
    },
    addStu(data) {
        return myAjax.get(urls.addStu, {
            params: {
                ...data
            }
        })
    }
}