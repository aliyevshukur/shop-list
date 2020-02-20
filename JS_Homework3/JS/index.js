const createNewUser = () => {
    let newUser = {
        firstName: '',
        secondName: '',
        getLogin: () => (newUser.firstName.charAt(0) + newUser.secondName).toLowerCase(),
        set setFirstName(value) {
            this.firstName = value;
        },
        set setLastName(value) {
            this.secondName = value
        }
    };
    return newUser;
}

let Ivan = createNewUser();
Ivan.setFirstName = 'Ivan';
Ivan.setLastName = 'Kravchenko';
console.log(Ivan.getLogin());