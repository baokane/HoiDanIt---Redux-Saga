import { all } from "redux-saga/effects"
import counterSaga from "./counterSaga"
import userSaga from "./userSaga"

// }
function* RootSaga() {
    console.log('im root saga')
    yield all([
        counterSaga(),
        userSaga()
    ])
    // code after all-effect
}

export default RootSaga