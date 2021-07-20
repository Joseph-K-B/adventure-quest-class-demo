import quests from '../data/quest-data.js';

export function hasCompletedAllQuests(user){
    // loop through each item in quests
    //      if quest id is not in user.completed -- return false
    // return true

    for (let quest of quests){
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}