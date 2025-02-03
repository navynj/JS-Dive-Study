
function performAction(player, action, value) {
    switch (action) {
        case "gainXP":
            player.level += value;
            break;
        case "takeDamage":
            if (player.stats.health > value) {
                player.stats.health -= value;
            } else {
                player.stats.health = 0;
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
let msg = "";
function savePointManager(player, command, i) {
    switch (command) {
        case "save":
            const updatePlayer = structuredClone(player);
            playerHistory.push(updatePlayer);
            break;
        case "load":
            if (i < 0 || i >= playerHistory.length) {
                throw new Error(`Invalid save point index`);
            }
            return structuredClone(playerHistory[i]);
        case "rollback":
            const length = playerHistory.length;
            if (length === 0) {
                throw new Error(`No save points available to rollback`);
            }
            const rollbackPlayer = structuredClone(playerHistory[length - 1]);
            playerHistory.pop()
            return rollbackPlayer;
        default:
            throw new Error(`Error: The command is invalid.`);
    }
}

const player = {
    id: 1,
    level: 10,
    inventory: ['sword', 'shield'],
    stats: { health: 100, mana: 50 },
};

// ✅ Initial save state
console.log("=== Initial Save ===");
savePointManager(player, "save");

// ✅ Basic gameplay actions
console.log("=== Basic Gameplay Actions ===");
performAction(player, "gainXP", 5);
console.log(player.level); // 15

performAction(player, "takeDamage", 20);
console.log(player.stats.health); // 80

performAction(player, "addItem", "potion");
console.log(player.inventory); // ["sword", "shield", "potion"]

// ✅ Save state after initial actions
console.log("=== Save After First Actions ===");
savePointManager(player, "save");

// ✅ Edge case tests
console.log("=== Edge Cases ===");
// Ensure health does not drop below 0
performAction(player, "takeDamage", 200);
console.log(player.stats.health); // 0

// Check if duplicate items can be added
performAction(player, "addItem", "potion");
console.log(player.inventory); // ["sword", "shield", "potion", "potion"]

// ✅ Save state after edge cases
console.log("=== Save After Edge Cases ===");
savePointManager(player, "save");

// ✅ Load specific save points
console.log("=== Load Specific Save Points ===");
console.log(savePointManager(null, "load", 0)); // First save point (level 10, health 100)
console.log(savePointManager(null, "load", 1)); // Second save point (level 15, health 80)
console.log(savePointManager(null, "load", 2)); // Third save point (health 0, inventory with two potions)

// ✅ Rollback to last save
console.log("=== Rollback to Last Save ===");
const rolledBackState = savePointManager(null, "rollback");
console.log(rolledBackState); // Third save point (health 0, two potions)

// ✅ Verify loading an invalid save point index (should throw an error)
console.log("=== Load Invalid Save Point Index (Expect Error) ===");
try {
    savePointManager(null, "load", 10); // Non-existent index
} catch (error) {
    console.log(error.message); // "Invalid save point index"
}

// ✅ Immutable save test (modifying a loaded save should not affect the stored data)
console.log("=== Immutable Save Test ===");
const savedState = savePointManager(null, "load", 0);
savedState.level = 999;
console.log(savePointManager(null, "load", 0).level); // 10 (Should remain unchanged)

// ✅ Deep Copy validation (ensure stats are not shared by reference)
console.log("=== Deep Copy Validation ===");
performAction(player, "takeDamage", 30);
console.log(player.stats.health); // 0 (Already 0, should not go negative)

const deepCopyTest = savePointManager(null, "load", 0);
console.log(deepCopyTest.stats.health); // 100 (Should remain unchanged)
// ✅ Consecutive rollback tests
console.log("=== Consecutive Rollbacks ===");
const rolledBackState1 = savePointManager(null, 'rollback'); // Restores second save point
console.log(rolledBackState1);
const rolledBackState2 = savePointManager(null, 'rollback'); // Restores first save point
console.log(rolledBackState2);

// ✅ Verify rollback with no save points left (should throw an error)
console.log("=== Rollback Without Save Points (Expect Error) ===");
try {
    savePointManager(null, "rollback"); // Expected error
} catch (error) {
    console.log(error.message); // "No save points available to rollback"
}