import * as aTypes from './../constants/ActionTypes'
import callAPI from '../../utils/APICaller'

// reducerSanpham
// INSERT
var actionThemSP = (sp_arg) => {
    return {
        type: aTypes.C_SP,
        sp_arg
    }
}
var actionThemSPAPI = (sp_arg) => {
    return async (dispatch) => {
        const res = await callAPI('sanpham', 'POST', sp_arg)
        if (typeof res !== 'undefined') {
            if (res.status !== 201) {
                alert('Thêm sản phẩm NG!!! Lỗi status trả về: ' + res.status)
            } else {
                await dispatch(actionThemSP(res.data)) // thông thường res.data = sp_arg
                alert('Thêm sản phẩm OK!')
            }
        }
    }
}
// SELECT
var actionHienSP = (sp_arg) => {
    return {
        type: aTypes.R_SP,
        sp_arg
    }
}
var actionHienSPAPI = () => {
    return async (dispatch) => {
        const res = await callAPI('sanpham', null)
        if (typeof res !== 'undefined') {
            dispatch(actionHienSP(res.data))
        }
        else {
            alert('Lấy data từ API bị lỗi!!!')
        }
    }
}
// UPDATE
//   SELECT(UPDATE)
var actionLaySP = (sp_arg) => {
    return {
        type: aTypes.UR_SP,
        sp_arg
    }
}
var actionLaySPAPI = (id_arg) => {
    return async (dispatch) => {
        const res = await callAPI(`sanpham/${id_arg}`, null)
        if (typeof res !== 'undefined') {
            dispatch(actionLaySP(res.data))
        }
        else {
            alert('Lấy data từ API bị lỗi!!!')
        }
    }
}
//   UPDATE(UPDATE)
var actionSuaSP = (sp_arg) => {
    return {
        type: aTypes.U_SP,
        sp_arg
    }
}
var actionSuaSPAPI = (sp_arg) => {
    return async (dispatch) => {
        const res = await callAPI(`sanpham/${sp_arg.id}`, 'PUT', sp_arg)
        if (typeof res !== 'undefined') {
            if (res.status !== 200) {
                alert('Sửa sản phẩm NG!!! Lỗi status trả về: ' + res.status)
            } else {
                await dispatch(actionSuaSP(res.data)) // thông thường res.data = sp_arg
                alert('Sửa sản phẩm OK!')
            }
        }
    }
}
// DELETE
var actionXoaSP = (id_arg) => {
    return {
        type: aTypes.D_SP,
        id_arg
    }
}
var actionXoaSPAPI = (id_arg) => {
    return async (dispatch) => {
        const res = await callAPI(`sanpham/${id_arg}`, 'DELETE', null)
        if (typeof res !== 'undefined') {
            if (res.status === 200) { // OK
                await dispatch(actionXoaSP(id_arg))
                alert('Xóa data từ API OK!')
            } else {
                alert('Xóa data từ API bị lỗi!!!')
            }
        } else {
            alert('Xóa data từ API bị lỗi!!!')
        }
    }
}

export {
    actionHienSPAPI, actionXoaSPAPI, actionThemSPAPI, actionLaySPAPI, actionSuaSPAPI
}
