import quests from '../data/quest-data.js';
import findById from '../data/find-by-id.js';

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('questId'));

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const choices = document.getElementById('choices');

// use our findById function to get the quest data
const quest = findById(quests, searchParams.get('questId'));
console.log(quest)

// hydrate our HTML with the quest data
questTitle.textContent = quest.title;
questImage.src = `../assets/quests/${quest.image}`;
questDescription.textContent = quest.description;

// loop through all our choices, and make a radio for each choice

for(let choice of quest.choices){
    const label = document.createElement("label");
    
    const radio = document.createElement("input");
    radio.name="choice"
    radio.type = "radio";
    radio.value = choice.id;
    
    const span = document.createElement('span');
    span.textContent = choice.description;
    
    label.append(radio, span);
    
    choices.append(label);
}