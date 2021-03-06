// import the quest data
import quests from '../data/quest-data.js';
import { getUser } from '../data/storage-utils.js';
import { hasCompletedAllQuests } from './has-completed-all-quests.js';
console.log(quests);

const user = getUser();

if (user.hp <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../results');
}

const questList = document.getElementById('quest-list');

for (let quest of quests) {
    if (user.completed[quest.id]){
        // if user has completed the quest
        createQuestSpan(quest);
    } else {
        // else
        createQuestLink(quest);
    }
}

function createQuestSpan(quest){
    const span = document.createElement('span');
    span.innerText = `${quest.title} COMPLETED!`;
    questList.appendChild(span);
}

function createQuestLink(quest){
    const questHref = `../quest/?questId=${quest.id}`;
    console.log(questHref);
    // generate an anchor tag for each quest
    //  use the quest's ID as the query parameter
    const questLink = document.createElement('a');
    // <a href="./quest/?id=monsters">A Den of Monsters</a>
    // <a href="./quest/?id=treasure">A Golden Treasure</a>
    // <a href="./quest/?id=dragon">A HAIRY!!! Dragon</a>
    questLink.href = questHref;
    questLink.textContent = quest.title;

    // append link to page
    questList.appendChild(questLink);
}