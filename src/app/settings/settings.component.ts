import { Component, Output, EventEmitter } from '@angular/core';
import { GameSettingsService } from '../services/game-settings.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(public settings: GameSettingsService) {}

  get playerXName() { return this.settings.playerXName; }
  set playerXName(val: string) { this.settings.playerXName = val; }
  get playerOName() { return this.settings.playerOName; }
  set playerOName(val: string) { this.settings.playerOName = val; }
  get markerX() { return this.settings.markerX; }
  set markerX(val: string) { this.settings.markerX = val; }
  get markerO() { return this.settings.markerO; }
  set markerO(val: string) { this.settings.markerO = val; }

  @Output() settingsChange = new EventEmitter<{ playerXName: string; playerOName: string; markerX: string; markerO: string }>();

  submitSettings() {
    this.settingsChange.emit({
      playerXName: this.playerXName,
      playerOName: this.playerOName,
      markerX: this.markerX,
      markerO: this.markerO
    });
  }
}
