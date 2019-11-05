import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruction-input-page',
  templateUrl: './instruction-input-page.component.html',
  styleUrls: ['./instruction-input-page.component.scss']
})
export class InstructionInputPageComponent implements OnInit {

  constructor() { }

  availableRegisters: Array<string> = ['$P1', '$P2', '$P3', '$N1', '$N2', '$N3', '$D1', '$D2', '$D3'];

  ngOnInit() {
  }

  parseTextarea() {
    let instructionList: Array<string> = (document.getElementById('instructionList') as HTMLInputElement).value.split('\n');
    this.createInstructionSet(instructionList);
  }

  createInstructionSet(instructionList: Array<string>) {
    for (let instruction of instructionList) {
      console.log(instruction);
    }
  }

}
