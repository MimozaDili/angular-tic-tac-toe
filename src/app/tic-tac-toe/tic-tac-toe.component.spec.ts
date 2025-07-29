import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicTacToeComponent } from './tic-tac-toe.component';

describe('TicTacToeComponent', () => {
  let component: TicTacToeComponent;
  let fixture: ComponentFixture<TicTacToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty board', () => {
    expect(component.squares.length).toBe(9);
    expect(component.squares.every(square => square === null)).toBeTruthy();
    expect(component.xIsNext).toBeTruthy();
    expect(component.winner).toBeNull();
  });

  it('should start with player X', () => {
    expect(component.player).toBe('X');
  });

  describe('makeMove', () => {
    it('should make a move at the specified position', () => {
      component.makeMove(0);
      expect(component.squares[0]).toBe('X');
      expect(component.xIsNext).toBeFalse();
    });

    it('should not allow move on occupied position', () => {
      component.makeMove(0);
      const firstPlayer = component.squares[0];
      component.makeMove(0);
      expect(component.squares[0]).toBe(firstPlayer);
    });

    it('should not allow moves after a winner is determined', () => {
      // X wins with top row
      component.makeMove(0); // X in position 0
      component.makeMove(3); // O in position 3
      component.makeMove(1); // X in position 1
      component.makeMove(4); // O in position 4
      component.makeMove(2); // X in position 2 - wins
      
      // Try to make another move
      component.makeMove(5);
      expect(component.squares[5]).toBeNull(); // Move should not be made
    });
  });

  describe('calculateWinner', () => {
    it('should detect horizontal win', () => {
      component.squares = ['X', 'X', 'X', 'O', 'O', '', '', '', ''] as string[];
      expect(component.calculateWinner()).toBe('X');
    });

    it('should detect vertical win', () => {
      component.squares = ['O', 'X', '', 'O', 'X', '', 'O', '', ''] as string[];
      expect(component.calculateWinner()).toBe('O');
    });

    it('should detect diagonal win', () => {
      component.squares = ['X', 'O', '', '', 'X', 'O', '', '', 'X'] as string[];
      expect(component.calculateWinner()).toBe('X');
    });

    it('should return null when no winner', () => {
      component.squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', ''] as string[];
      expect(component.calculateWinner()).toBeNull();
    });
  });

  describe('restartGame', () => {
    it('should reset the game state', () => {
      // Make some moves
      component.makeMove(0);
      component.makeMove(1);
      component.makeMove(2);
      
      // Restart game
      component.restartGame();
      
      // Verify reset state
      expect(component.squares.every(square => square === null)).toBeTruthy();
      expect(component.xIsNext).toBeTruthy();
      expect(component.winner).toBeNull();
    });
  });
});
