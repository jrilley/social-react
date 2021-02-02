const initialState = {
    users: [
        {id: 1, name: 'Anton Dmytrenko', sex: 'Male', country: 'Ukraine', avatar: 'http://1.bp.blogspot.com/-e1ygQH9Rzyo/UxsDOZkbW3I/AAAAAAAAAyA/CyZPV-9UK9g/s1600/9P1nv0t-gxE.jpg'},
        {id: 2, name: 'Varvara Lopatkova', sex: 'Female', country: 'Russia', avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg'},
        {id: 3, name: 'Andrey Ustrica', sex: 'Male', country: 'Belarus', avatar: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'}]
};

const userReducer = (state = initialState, action) => {
    return state;
};

export default userReducer;