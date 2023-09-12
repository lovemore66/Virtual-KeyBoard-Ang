import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.scss']
})
export class VirtualKeyboardComponent implements OnInit {
  inputText: string = '';
  keyboardLayout: string[][] = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ];
  constructor() { }

  ngOnInit(): void {
  }

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
