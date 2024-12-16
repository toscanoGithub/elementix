// pick-question.ts

export default class RandomPicker<T> {
  private items: T[];
  private availableIndices: Set<number>;

  constructor(items: T[]) {
    if (items.length === 0) {
        throw new Error('Array must not be empty');
      }
  
      // Filter out empty objects
      this.items = items.filter(item => !(item instanceof Object && Object.keys(item).length === 0));
  
      // Ensure we have valid items after filtering
      if (this.items.length === 0) {
        throw new Error('Array must not contain only empty objects');
      }
  
      // Initialize available indices based on the filtered items
      this.availableIndices = new Set(this.items.map((_, index) => index));
  }

  // Method to pick a random element
  pick(): T {
    // If all elements have been picked, reset the available indices
    if (this.availableIndices.size === 0) {
      this.availableIndices = new Set(this.items.map((_, index) => index));
    }

    // Get a random index from the available indices
    const indicesArray = Array.from(this.availableIndices);
    const randomIndex = indicesArray[Math.floor(Math.random() * indicesArray.length)];

    // Remove the selected index from the available indices
    this.availableIndices.delete(randomIndex);

    // Return the corresponding element
    return this.items[randomIndex];
  }
}
