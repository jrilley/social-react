const initialState = {
    friends: [
        {id: 1, name: 'Anton', img: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'},
        {id: 2, name: 'Roman', img: 'https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg'},
        {id: 3, name: 'Platon', img: 'https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg'},
        {id: 4, name: 'Baton', img: 'https://download-cs.net/steam/avatars/3412.jpg'},
        {id: 5, name: 'Ilon', img: 'https://cs11.pikabu.ru/post_img/big/2020/04/26/10/1587922073141910862.jpg'}
    ]
};

const friendsReducer = (state = initialState, action) => {
    return state;
};

export default friendsReducer;