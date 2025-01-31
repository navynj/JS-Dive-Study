
function performAction(player, action, value) {
    switch (action) {
        case "gainXP":
            player.level += value;
            break;
        case "takeDamage":
            if (player.stats.health > value) {
                player.stats.health -= value;
            }
            break;
        case "addItem":
            player.inventory.push(value);
            break;
        default:
            break;
    }
};

const playerHistory = [];
function savePointManager(player, command, i) {
    let updatePlayer = {};

    switch (command) {
        case "save":
            updatePlayer = structuredClone(player);
            playerHistory.push(updatePlayer);
            break;
        case "load":
            updatePlayer = playerHistory[i];
            break;
        case "rollback":
            updatePlayer = playerHistory.pop(playerHistory);
            break;
        default:
            break;
    }
    return updatePlayer;
}

const player = {
    id: 1,
    level: 10,
    inventory: ["sword", "shield"],
    stats: { health: 100, mana: 50 },
};

// Save the current state
savePointManager(player, "save");

// Perform actions
performAction(player, "gainXP", 5); // Gain XP
performAction(player, "takeDamage", 20); // Take Damage

// Save the updated state
savePointManager(player, "save");

// Load the first save point
const firstSave = savePointManager(null, "load", 0);
console.log(firstSave.level); // Output: 10
console.log(firstSave.stats.health); // Output: 100

// Rollback to the last save point
const lastSave = savePointManager(null, "rollback");
console.log(lastSave.level); // Output: 15
console.log(lastSave.stats.health); // Output: 80  