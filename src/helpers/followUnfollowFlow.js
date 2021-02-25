export const followUnfollowFlow = async (dispatch, userId, actionCreatorProg, apiMethod, actionCreator) => {
    dispatch(actionCreatorProg(true, userId));
    let data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actionCreatorProg(false, userId));
}