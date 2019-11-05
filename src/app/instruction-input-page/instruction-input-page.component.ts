import { Component, OnInit } from '@angular/core';
import { InstructionDetail } from '../shared/models/instruction-detail.model';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-instruction-input-page',
  templateUrl: './instruction-input-page.component.html',
  styleUrls: ['./instruction-input-page.component.scss']
})
export class InstructionInputPageComponent implements OnInit {
  possibleInstructions: Array<InstructionDetail>;
  availableRegisters: Array<string> = ['$P1', '$P2', '$P3', '$N1', '$N2', '$N3', '$D1', '$D2', '$D3'];

  constructor() { }

  ngOnInit() {
    this.possibleInstructions = [
      {
        command: 'FVR',
        description: 'Calculate future value using registers',
        example: 'FVI, storage register, # of periods, starting principal, interest per period, payment amount per period;',
        opcode: 0
      },
      {
        command: 'SV',
        description: 'Store a value in a register; overwrites previous value',
        example: 'SV, storage register, value;',
        opcode: 1
      },
      {
        command: 'FVI',
        description: 'Calculate future value using immediate values',
        example: 'FVI, storage register, # of periods, starting principal, interest period, payment amount per period;',
        opcode: 2
      },
      {
        command: 'PMTR',
        description: 'Calculate payments to achieve future value using registers',
        example: 'PMTI, storage register, future value, # of periods, starting principal, interest per period;',
        opcode: 3
      },
      {
        command: 'PMTI',
        description: 'Calculate payments to achieve future value using immediate values',
        example: 'PMTI, storage register, future value, # of periods, starting principal, interest per period;',
        opcode: 4
      },
      {
        command: 'IPPR',
        description: 'Calculate interest needed per period to achieve future value using registers',
        example: 'IPPR, storage register, future value, # of periods, starting principal, payment amount per period;',
        opcode: 5
      },
      {
        command: 'IPPI',
        description: 'Calculate interest needed per period to achieve future value using immediate values',
        example: 'IPPI, storage register, future value, # of periods, starting principal, payment amount per period;',
        opcode: 6
      },
      {
        command: 'NPR',
        description: 'Calculate the number of periods to achieve future value using registers',
        example: 'NPR, storage register, future value, starting principal, interest per period, payment amount per period;',
        opcode: 7
      },
      {
        command: 'NPI',
        description: 'Calculate the number of periods to achieve future value using immediate values',
        example: 'NPI, storage register, future value, starting principal, interest per period, payment amount per period;',
        opcode: 8
      },
      {
        command: 'SPR',
        description: 'Calculate the starting principal to achieve future value using registers',
        example: 'SPR, storage register, future value, # of periods, interest per period, payment amount per period;',
        opcode: 9
      },
      {
        command: 'SPI',
        description: 'Calculate the starting principal to achieve future value using immediate values',
        example: 'SPI, storage register, future value, # of periods, interest per period, payment amount per period;',
        opcode: 10
      }
    ];
  }

  parseTextarea() {
    const instructionList: Array<string> = (document.getElementById('instructionList') as HTMLInputElement).value.split('\n');
    this.parseInstructionList(instructionList);
  }

  parseInstructionList(instructionList: Array<string>) {
    for (const instruction of instructionList) {
      const parsedInstruction: Array<string> = instruction.valueOf().split(', ');
      const command = parsedInstruction[0].trim().toUpperCase();
      switch (command) {
        case 'FVI' :{
          this.futureValueImmediate(parsedInstruction);
          break;
        }
        case 'FVR' : {
          this.futureValueWithRegister(parsedInstruction);
          break;
        }
        case 'IPPI' : {
          console.log('IPPI');
          break;
        }
        case 'IPPR' : {
          console.log('IPPR');
          break;
        }
        case 'NPI' : {
          console.log('NPI');
          break;
        }
        case 'NPR' : {
          console.log('NPR');
          break;
        }
        case 'PMTI' : {
          console.log('PMTI');
          break;
        }
        case 'PMTR' : {
          console.log('PMTR');
          break;
        }
        case 'SPI' : {
          console.log('SPI');
          break;
        }
        case 'SPR' : {
          console.log('SPR');
          break;
        }
        case 'SV' : {
          console.log('SV');
          break;
        }
        default : {
          console.log('OOPS! Wrong Command!');
          break;
        }
      }
    }
  }

  futureValueImmediate(parsedInstruction: Array<string>) {}

  futureValueWithRegister(parsedInstruction: Array<string>) {
  }
}
