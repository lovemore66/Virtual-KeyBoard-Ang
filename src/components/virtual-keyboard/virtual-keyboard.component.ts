import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss'],
})
export class VirtualKeyboardComponent implements OnInit {
  inputText: string = '';
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
      { key: '+', shift: '+' },
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
      { key: 'Enter' }],
    [
      { key: 'Shift' },
      { key: 'z' },
      { key: 'x' },
      { key: 'c' },
      { key: 'v' },
      { key: 'space' },
      { key: 'b' },
      { key: 'n' },
      { key: 'm' },
      { key: 'Ctrl' }],
  ];
  constructor() {}

  ngOnInit(): void {}

  onKeyClick(key: string): void {
    if (key === 'Backspace') {
      this.inputText = this.inputText.slice(0, -1);
    } else if (key === 'Shift') {
      // Handle shift key logic (you can implement shift functionality here)
    } else if (key === ' ') {
      // Handle space key by adding a space to the input text
      this.inputText += ' ';
    } else {
      // Handle regular key press by appending the key to the input text
      this.inputText += key;
    }
  }
}
