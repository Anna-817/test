const updateProfile = (state, action) => {
    if (state === undefined) {
        return {
            name: 'Иван',
            surname: 'Иванов',
            age: 31
        };
    }
  
    switch (action.type) {
        default:
            return state.profile;
    }
};
  
export default updateProfile;