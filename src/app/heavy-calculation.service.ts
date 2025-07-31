import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeavyCalculationService {

  constructor() { }

  /**
   * Performs a series of calculations on a large array.
   * This is a deliberately CPU-intensive function to test performance.
   * @param size The number of elements in the array to process.
   * @returns A final calculated number.
   */
  public processLargeArray(size: number): number {
    // 1. Create a large array of numbers.
    const initialArray = Array.from({ length: size }, (_, i) => i + 1);

    // 2. Perform a "heavy" map operation (e.g., some math).
    const mappedArray = initialArray.map(item => (item * Math.sqrt(item)) / 2);

    // 3. Filter the results based on a condition.
    const filteredArray = mappedArray.filter(item => item % 3 === 0);

    // 4. Reduce the final array to a single value.
    const finalResult = filteredArray.reduce((sum, current) => sum + current, 0);

    return finalResult;
  }
}