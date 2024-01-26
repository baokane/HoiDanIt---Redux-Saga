import { call, put, takeEvery } from "redux-saga/effects"
import { fetchUserFailed, fetchUserPending, fetchUserSuccess } from "../redux/user/user.slide"
import { IUser } from "../types/backend"

const fetchUser = async () => {
    const res = await fetch('http://localhost:8000/users')
    return res.json()
}

function* handleFetchUser() {
    try {
        const users: IUser[] = yield call(fetchUser)
        yield put(fetchUserSuccess(users))
    } catch (error) {
        yield put(fetchUserFailed())
    }
}

function* userSaga() {
    yield takeEvery(fetchUserPending, handleFetchUser)
}
export default userSaga