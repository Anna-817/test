const initialStore = {
    profile: {
        name: 'Иван',
        surname: 'Иванов',
        age: 31
    }
};

const profileReducer = (store = initialStore, action) => {  
    switch (action.type) {
        default:
            return store;
    }
};
  
export default profileReducer;