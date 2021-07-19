export function makeUser(formData){
    const newUser = {
        // gold: 0,
        hp: 35,
        name: formData.get('name'),
        race: formData.get('race'),
        completed: {}
    };
    // newUser.gold = 0;
    // newUser.hp = 35;
    
    // newUser['gold'] = 0;
    // newUser['hp'] = 35;

    const key = 'gold';
    newUser[key] = 0;
    // newUser['gold'] = 0
    // { gold: 0 }
    return newUser;
}