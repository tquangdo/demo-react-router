import React from 'react'
import { Link } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
import { actionThemSPAPI, actionLaySPAPI, actionSuaSPAPI } from '../redux/actions/Action'

class ContaSanphamAction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isUPD: false, // vì KO dùng id là tự tăng mà là string nên cần biến này
      txtID: '',
      txtName: '',
      intPrice: '',
      ckbStatus: true
    }
    this.txtThemSuaSP = 'Thêm sản phẩm'
  }
  onSubmitForm = (e) => {
    e.preventDefault()
    let { isUPD, txtID, txtName, intPrice, ckbStatus } = this.state
    let { dispatch } = this.props
    let spReducer = {
      id: txtID,
      name: txtName,
      price: parseInt(intPrice),
      status: ckbStatus
    }
    if (isUPD) {
      // UPDATE
      dispatch(actionSuaSPAPI(spReducer))
    } else {
      // INSERT
      dispatch(actionThemSPAPI(spReducer))
    }
    this.props.historyObj.goBack()
  }
  // click button "Sửa"
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.reduxprop_sp_desua) {
      let { reduxprop_sp_desua } = nextProps
      this.setState({
        isUPD: true,
        txtID: reduxprop_sp_desua.id,
        txtName: reduxprop_sp_desua.name,
        intPrice: reduxprop_sp_desua.price,
        ckbStatus: reduxprop_sp_desua.status
      })
      this.txtThemSuaSP = 'Sửa sản phẩm'
    }
  }
  componentDidMount() {
    let { matchObj } = this.props
    if (matchObj) {
      let { param_id } = matchObj.params
      let { dispatch } = this.props
      // SELECT
      dispatch(actionLaySPAPI(param_id))
    }
  }
  hamOnChange = (e) => {
    let { name } = e.target
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({ [name]: value })
  }
  render() {
    let { isUPD, txtID, txtName, intPrice, ckbStatus } = this.state
    let domHienMaSP = null
    if (!isUPD) {
      domHienMaSP = (
        <div className="form-group">
          <label>Mã sản phẩm(*):</label>
          <input type="text" className="form-control"
            name="txtID" value={txtID}
            onChange={this.hamOnChange}
            placeholder="Input mã sản phẩm..." />
        </div>
      )
    }
    return (
      <div>
        <div className="panel-heading"><h3>{this.txtThemSuaSP} </h3></div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onSubmitForm} >
            {domHienMaSP}
            <div className="form-group">
              <label>Tên sản phẩm:</label>
              <input type="text" className="form-control"
                name="txtName" value={txtName}
                onChange={this.hamOnChange}
                placeholder="Input tên sản phẩm..." />
            </div>
            <div className="form-group">
              <label>Giá(*):</label>
              <input type="number" className="form-control"
                name="intPrice" value={intPrice}
                onChange={this.hamOnChange}
                placeholder="Input giá sản phẩm..." />
            </div>
            <div className="form-group">
              <label>Trạng thái:</label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox"
                  name="ckbStatus" value={ckbStatus} checked={ckbStatus}
                  onChange={this.hamOnChange}
                />
              Còn hàng
              </label>
            </div>
            <Link to="/sanpham-list" className="btn btn-danger mr-10">
              Trở lại
          </Link>
            {" "}
            <button type="submit" className="btn btn-primary">Lưu</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      reduxprop_sp_desua: state.reducerSPDeSua
    }
  }
)(ContaSanphamAction)
