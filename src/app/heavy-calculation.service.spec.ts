import { TestBed } from '@angular/core/testing';
import { HeavyCalculationService } from './heavy-calculation.service';

describe('HeavyCalculationService Performance', () => {
  let service: HeavyCalculationService;

  // --- Configuration ---
  // Adjust these values to increase or decrease the test load.
  const ARRAY_SIZE = 75000; // How large the array is for each run.
  const ITERATIONS = 20;   // How many times we call the function.

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeavyCalculationService);
  });

  it(`should execute processLargeArray(${ITERATIONS}) times without errors`, () => {
    // We don't care about the result's value, only that it runs.
    // This test is designed to stress the CPU and measure the test runner's overhead.
    let result;
    for (let i = 0; i < ITERATIONS; i++) {
      result = service.processLargeArray(ARRAY_SIZE);
    }

    // A simple assertion to make sure the code ran and produced a number.
    expect(typeof result).toBe('number');
  });
});