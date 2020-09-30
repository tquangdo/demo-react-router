import React from 'react'
import { Link } from 'react-router-dom'

class SanPhamItem extends React.Component {
  render() {
    let { list, chiso } = this.props
    let statusClass = list.status ? 'warning' : 'default'
    let statusName = list.status ? 'Còn hàng' : 'Hết hàng'
    return (
      <tr>
        <td>{chiso + 1} </td>
        <td>{list.id} </td>
        <td>{list.name} </td>
        <td>{list.price} </td>
        <td>
          <span className={`label label-${statusClass}`} >{statusName} </span>
        </td>
        <td>
          <Link
            to={`/sanphamlist/${list.id}/edit`}
            className="btn btn-success"
          >Sửa
          </Link>
          &nbsp;
          <button
            type="button" className="btn btn-danger" onClick={() => {
              if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
                // cmt out trên để fix lỗi "no-restricted-globals"
                this.props.xoaSPItem(list.id)
              }
            }}
          >Xóa</button>
        </td>
      </tr>
    )
  }
}

export default SanPhamItem
