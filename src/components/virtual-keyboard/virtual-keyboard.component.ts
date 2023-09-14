import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss'],
})
export class VirtualKeyboardComponent implements OnInit {
  inputText: string = '';
  isShiftOn: boolean = false;
  isCapsLocksOn: boolean = false;
  isControlOn: boolean = false;

  keyboardLayout: any[][] = [
    [
      { key: '1', shift: '!' },
      { key: '2', shift: '@' },
      { key: '3', shift: '#' },
      { key: '4', shift: '$' },
      { key: '5', shift: '%' },
      { key: '6', shift: '^' },
      { key: '7', shift: '&' },
      { key: '8', shift: '*' },
      { key: '9', shift: '(' },
      { key: '0', shift: ')' },
      { key: '-', shift: '_' },
      { key: '=', shift: '+' },
    ],
    [
      { key: 'Tab' },
      { key: 'q' },
      { key: 'w' },
      { key: 'e' },
      { key: 'r' },
      { key: 't' },
      { key: 'y' },
      { key: 'u' },
      { key: 'i' },
      { key: 'o' },
      { key: 'p' },
      { key: 'Backspace' },
    ],
    [
      { key: 'Caps Lock' },
      { key: 'a' },
      { key: 's' },
      { key: 'd' },
      { key: 'f' },
      { key: 'g' },
      { key: 'h' },
      { key: 'k' },
      { key: 'l' },
      { key: 'Enter' },
    ],
    [
      { key: 'Shift' },
      { key: 'z' },
      { key: 'x' },
      { key: 'c' },
      { key: 'v' },
      { key: 'Space' },
      { key: 'b' },
      { key: 'n' },
      { key: 'm' },
      { key: 'Ctrl' },
    ],
  ];
  constructor() {}

  ngOnInit(): void {}

  changeToUppercase(key: string) {
    if (this.isCapsLocksOn) {
      return key.toUpperCase();
    }
    return key;
  }

  onKeyClick(key: string, shift: string): void {
    if (key === 'Backspace') {
      this.inputText = this.inputText.slice(0, -1);
    } else if (key === 'Shift') {
      this.isShiftOn = !this.isShiftOn;
    } else if (key === 'Caps Lock') {
      this.isCapsLocksOn = !this.isCapsLocksOn;
    } else if (key === 'Space') {
      this.inputText += ' ';
    } else {
      if (this.isShiftOn && shift !== undefined) {
        this.inputText += this.changeToUppercase(shift);
      } else {
        this.inputText += this.changeToUppercase(key);
      }
    }
  }
}
