import { GetToken } from "../../components";
import { connect } from "react-redux";
import { login }  from '../../redux/action'

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {};
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    getToken: (kakaocode)=>{
      dispatch(login(kakaocode))
    }
  };
}
export default connect( reduxStateToReactProps, reduxDispatchToReactProps )(GetToken)