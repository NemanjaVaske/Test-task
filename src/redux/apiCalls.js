import { fetchStart, fetchSuccess, fetchFailure } from './usersSlice';

export const fetchUsers = async (search, dispatch) => {
    dispatch(fetchStart());
    try {
        const res = await fetch(`https://api.github.com/search/users?q=${search}`);
        const data = await res.json();
        if(data.items.length<1){
            dispatch(fetchSuccess(null));
        }
        else{
            //decide to show only 10 users, by default is 30
            dispatch(fetchSuccess(data.items.slice(0,10)));
        }
    } catch (error) {
        dispatch(fetchFailure());
    }
}