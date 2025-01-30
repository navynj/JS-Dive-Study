/**
 * 
 * @param {object} player 
 * @param {string} action 
 * @param {any | undefined} value 
 */
const performAction = (player, action, value) => {
  if(action !== 'gainXP' && action !== 'takeDamage' && action !== 'addItem'){
    throw new Error('an invalid command is provided')
  }
  switch(action){
    case 'gainXP':
      if(typeof value !== "number"){
        throw new Error('an invalid command is provided')
      }
      player.level = player.level + value
      break
    case 'takeDamage':
      if(typeof value !== "number"){
        throw new Error('an invalid command is provided')
      }
      player.stats.health = player.stats.health - value
      break
    case 'addItem':
      player.inventory.push(value)
  }
}

const saveList = []
/**
 * 
 * @param {object} player 
 * @param {string} command 
 * @param {number | undefined} index 
 */
const savePointManager = (player, command, index) => {
  if(command !== 'save' && command !== 'load' && command !== 'rollback'){
    throw new Error('an invalid command is provided')
  }
  
  // const saveList = []
  if(command === 'save'){
    const newPlayer = structuredClone(player)
    saveList.push(newPlayer)
  }
  if(command === 'load'){
    return saveList[index]
  }
  if(command === 'rollback'){
    return saveList[saveList.length - 1]
  }
}

const player1 = {
  id: 1,
  level: 10,
  inventory: ["sword", "shield"],
  stats: { health: 100, mana: 50 },
};

// Gain XP
performAction(player1, "gainXP", 5);
console.log(player1.level); // Output: 15

// Take Damage
performAction(player1, "takeDamage", 20);
console.log(player1.stats.health); // Output: 80

// Add Item
performAction(player1, "addItem", "potion");
console.log(player1.inventory); // Output: ["sword", "shield", "potion"]

const player2 = {
  id: 1,
  level: 10,
  inventory: ["sword", "shield"],
  stats: { health: 100, mana: 50 },
};

// Save the current state
savePointManager(player2, "save");

// Perform actions
performAction(player2, "gainXP", 5); // Gain XP
performAction(player2, "takeDamage", 20); // Take Damage

// Save the updated state
savePointManager(player2, "save");

// Load the first save point
const firstSave = savePointManager(null, "load", 0);
console.log(firstSave.level); // Output: 10
console.log(firstSave.stats.health); // Output: 100

// Rollback to the last save point
const lastSave = savePointManager(null, "rollback");
console.log(lastSave.level); // Output: 15
console.log(lastSave.stats.health); // Output: 80