// import the quest data
import quests from '../data/quest-data.js';
console.log(quests);

const questList = document.getElementById('quest-list');

for (let quest of quests) {
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