import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameSettingsService {
  playerXName: string = '';
  playerOName: string = '';
  markerX: string = 'X';
  markerO: string = 'O';

  setSettings(settings: { playerXName: string; playerOName: string; markerX: string; markerO: string }) {
    this.playerXName = settings.playerXName;
    this.playerOName = settings.playerOName;
    this.markerX = settings.markerX;
    this.markerO = settings.markerO;
  }

  getSettings() {
    return {
      playerXName: this.playerXName,
      playerOName: this.playerOName,
      markerX: this.markerX,
      markerO: this.markerO,
    };
  }
}
