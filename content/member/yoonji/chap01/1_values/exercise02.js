function performAction(player, action, value) {
  switch (action) {
    case 'gainXP':
      if (value > 0) {
        player.level += value;
      }
      break;
    case 'takeDamage':
      const hp = player.stats.health - value;
      player.stats.health = hp < 0 ? 0 : hp;
      break;
    case 'addItem':
      player.inventory.push(value);
      break;
  }
}

const savePointManager = (() => {
  const savePoints = [];

  return (player, command, index) => {
    switch (command) {
      case 'save':
        const savePoint = structuredClone(player);
        savePoints.push(savePoint);
        break;
      case 'load':
        if (savePoints[index]) {
          return structuredClone(savePoints[index]);
        } else {
          throw new Error(`Save point at index ${index} not exists`);
        }
      case 'rollback':
        if (savePoints.length) {
          return savePoints.pop();
        } else {
          throw new Error('No save points available.');
        }
        break;
      default:
        throw new Error('Invalid command is provided.');
    }
  };
})();

const player = {
  id: 1,
  level: 10,
  inventory: ['sword', 'shield'],
  stats: { health: 100, mana: 50 },
};

// ✅ Initial save state
console.log('=== Initial Save ===');
savePointManager(player, 'save');

// ✅ Basic gameplay actions
console.log('=== Basic Gameplay Actions ===');
performAction(player, 'gainXP', 5);
console.log(player.level); // 15

performAction(player, 'takeDamage', 20);
console.log(player.stats.health); // 80

performAction(player, 'addItem', 'potion');
console.log(player.inventory); // ["sword", "shield", "potion"]

// ✅ Save state after initial actions
console.log('=== Save After First Actions ===');
savePointManager(player, 'save');

// ✅ Edge case tests
console.log('=== Edge Cases ===');
// Ensure health does not drop below 0
performAction(player, 'takeDamage', 200);
console.log(player.stats.health); // 0

// Check if duplicate items can be added
performAction(player, 'addItem', 'potion');
console.log(player.inventory); // ["sword", "shield", "potion", "potion"]

// Verify negative XP gain (should be restricted)
performAction(player, 'gainXP', -10);
console.log(player.level); // (Should remain 15 if negative XP is not allowed)

// ✅ Save state after edge cases
console.log('=== Save After Edge Cases ===');
savePointManager(player, 'save');

// ✅ Load specific save points
console.log('=== Load Specific Save Points ===');
console.log(savePointManager(null, 'load', 0)); // First save point (level 10, health 100)
console.log(savePointManager(null, 'load', 1)); // Second save point (level 15, health 80)
console.log(savePointManager(null, 'load', 2)); // Third save point (health 0, inventory with two potions)

// ✅ Rollback to last save
console.log('=== Rollback to Last Save ===');
const rolledBackState = savePointManager(null, 'rollback');
console.log(rolledBackState); // Third save point (health 0, two potions)

// ✅ Verify loading an invalid save point index (should throw an error)
console.log('=== Load Invalid Save Point Index (Expect Error) ===');
try {
  savePointManager(null, 'load', 10); // Non-existent index
} catch (error) {
  console.log(error.message); // "Invalid save point index"
}

// ✅ Immutable save test (modifying a loaded save should not affect the stored data)
console.log('=== Immutable Save Test ===');
const savedState = savePointManager(null, 'load', 0);
savedState.level = 999;
console.log(savePointManager(null, 'load', 0).level); // 10 (Should remain unchanged)

// ✅ Deep Copy validation (ensure stats are not shared by reference)
console.log('=== Deep Copy Validation ===');
performAction(player, 'takeDamage', 30);
console.log(player.stats.health); // 0 (Already 0, should not go negative)

const deepCopyTest = savePointManager(null, 'load', 0);
console.log(deepCopyTest.stats.health); // 100 (Should remain unchanged)

// ✅ Consecutive rollback tests
console.log('=== Consecutive Rollbacks ===');
savePointManager(null, 'rollback'); // Restores second save point
savePointManager(null, 'rollback'); // Restores first save point

// ✅ Verify rollback with no save points left (should throw an error)
console.log('=== Rollback Without Save Points (Expect Error) ===');
try {
  savePointManager(null, 'rollback'); // Expected error
} catch (error) {
  console.log(error.message); // "No save points available to rollback"
}
