import React from 'react'

class SanPhamList extends React.Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading"><h3 className="panel-title">Danh sách sản phẩm</h3></div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="danger">
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default SanPhamList
