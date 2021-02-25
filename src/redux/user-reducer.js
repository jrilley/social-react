import {usersApi} from "../api/usersApi";
import {followApi} from "../api/followApi";
import {followUnfollowFlow} from "../helpers/followUnfollowFlow";
import {objectInArray} from "../helpers/objectInArray";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingProgress: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: objectInArray(state.users, "id", action.userId, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: objectInArray(state.users, "id", action.userId, {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.inProgress
                    ? [...state.isFollowingProgress, action.uId]
                    : state.isFollowingProgress.filter(id => id !== action.uId)
            };
        default:
            return state;
    }
};

export const requestUsers = (page, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    usersApi.getUsers(page, pageSize)
        .then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
};

export const unFollowTC = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, toggleFollowingProgress, followApi.unfollow, unFollow);
};

export const followTC = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, toggleFollowingProgress, followApi.follow, follow);
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: CHANGE_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (inProgress, uId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, inProgress, uId});

export default userReducer;