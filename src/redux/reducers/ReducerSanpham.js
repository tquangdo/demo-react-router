import * as aTypes from '../constants/ActionTypes'
import { timIndexOfArr } from '../../utils/CommonFuncs'

let reducerSanpham = (state = [], action) => {
    let stateTmp
    let chiso = -1
    let { sp_arg, id_arg } = action
    switch (action.type) {
        case aTypes.R_SP:
            return sp_arg
        case aTypes.C_SP:
            stateTmp = [...state]
            stateTmp.push(sp_arg) // nếu KO dùng reducer mà connect direct json-server thì KO cần xử lí này
            return stateTmp
        case aTypes.D_SP:
            stateTmp = [...state]
            chiso = timIndexOfArr(stateTmp, id_arg)
            if (chiso !== -1) {
                stateTmp.splice(chiso, 1) // thay vì SELECT lại server sẽ tốn performance thì xử lí FE
            }
            return stateTmp
        case aTypes.U_SP:
            stateTmp = [...state]
            chiso = timIndexOfArr(stateTmp, sp_arg.id)
            if (chiso !== -1) {
                stateTmp[chiso] = sp_arg // nếu KO dùng reducer mà connect direct json-server thì KO cần xử lí này
            }
            return stateTmp
        default:
            return state
    }
}

export default reducerSanpham
