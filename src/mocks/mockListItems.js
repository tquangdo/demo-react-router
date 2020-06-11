import React from 'react'
import ContaTrangChu from "../containers/ContaTrangChu"
import ContaNotFound from "../containers/ContaNotFound"
import ContaSanphamList from '../containers/ContaSanphamList'
import ContaSanphamAction from '../containers/ContaSanphamAction'
import pJson from '../../package.json'

var menu_list_items = [
    {
        label: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        label: "Sản phẩm",
        to: "/sanpham-list",
        exact: false
    }
]
var route_items = [
    {
        path: "/",
        exact: true,
        component: () => <ContaTrangChu />
    },
    {
        path: "/" + pJson.name,
        exact: false,
        component: () => <ContaTrangChu />
    },
    // {
    //     path: "/sanphamlist/:param_id",
    //     exact: false,
    //     component: ({ match }) => <SanPham matchObj={match} /> // PHẢI là ({match}) chứ KO phải (match)
    // },
    // {
    //     path: "/login",
    //     exact: false,
    //     component: ({ location }) => <Login locationObj={location} />
    // },
    // {
    //     path: "/sanphamlist",
    //     exact: false,
    //     component: ({ match, location }) => <SanPhamList matchObj={match} locationObj={location} />
    // },
    {
        path: "/sanpham-list", // PHẢI là "/sanpham-list", KO được là "/sanphamlist" để phân biệt với /add & /edit
        exact: false,
        component: () => <ContaSanphamList />
    },
    {
        path: "/sanphamlist/add",
        exact: false,
        component: ({ history }) => <ContaSanphamAction historyObj={history} />
    },
    {
        path: "/sanphamlist/:param_id/edit",
        exact: false,
        component: ({ match, history }) => <ContaSanphamAction matchObj={match} historyObj={history} />
    },
    // PHẢI để <ContaNotFound> sau cùng, nếu ko dù exact=true vẫn NG!!!
    {
        path: "",
        exact: false,
        component: () => <ContaNotFound />
    }
]

export { menu_list_items, route_items }