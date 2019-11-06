import { Component, OnInit } from '@angular/core';
import { InstructionDetail } from '../shared/models/instruction-detail.model';

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
        example: 'FVI, storage register, # of periods, starting principal, interest per period;',
        opcode: this.generateOpcode('FVR')
      },
      {
        command: 'SV',
        description: 'Store a value in a register; overwrites previous value',
        example: 'SV, storage register, value;',
        opcode: this.generateOpcode('SV')
      },
      {
        command: 'FVI',
        description: 'Calculate future value using immediate values',
        example: 'FVI, storage register, # of periods, starting principal, interest period;',
        opcode: this.generateOpcode('FVI')
      },
      {
        command: 'PMTRB',
        description: 'Calculate number of payments at beginning of period to achieve future value using registers',
        example: 'PMTRB, storage register, future value, # of periods, starting principal, interest per period;',
        opcode: this.generateOpcode('PMTRB')
      },
      {
        command: 'PMTIB',
        description: 'Calculate number of payments at beginning of period to achieve future value using immediate values',
        example: 'PMTIB, storage register, future value, # of periods, starting principal, interest per period;',
        opcode: this.generateOpcode('PMTIB')
      },
      {
        command: 'PMTRE',
        description: 'Calculate number of payments at end of period to achieve future value using registers',
        example: 'PMTRE, storage register, future value, # of periods, starting principal, interest per period;',
        opcode: this.generateOpcode('PMTRE')
      },
      {
        command: 'PMTIE',
        description: 'Calculate number of payments at end of period to achieve future value using immediate values',
        example: 'PMTIE, storage register, future value, # of periods, starting principal, interest per period;',
        opcode: this.generateOpcode('PMTIE')
      },
      {
        command: 'IPPR',
        description: 'Calculate interest needed per period to achieve future value using registers',
        example: 'IPPR, storage register, future value, # of periods, starting principal;',
        opcode: this.generateOpcode('IPPR')
      },
      {
        command: 'IPPI',
        description: 'Calculate interest needed per period to achieve future value using immediate values',
        example: 'IPPI, storage register, future value, # of periods, starting principal;',
        opcode: this.generateOpcode('IPPI')
      },
      {
        command: 'NPR',
        description: 'Calculate the number of periods to achieve future value using registers',
        example: 'NPR, storage register, future value, starting principal, interest per period;',
        opcode: this.generateOpcode('NPR')
      },
      {
        command: 'NPI',
        description: 'Calculate the number of periods to achieve future value using immediate values',
        example: 'NPI, storage register, future value, starting principal, interest per period;',
        opcode: this.generateOpcode('NPI')
      },
      {
        command: 'SPR',
        description: 'Calculate the starting principal to achieve future value using registers',
        example: 'SPR, storage register, future value, # of periods, interest per period;',
        opcode: this.generateOpcode('SPR')
      },
      {
        command: 'SPI',
        description: 'Calculate the starting principal to achieve future value using immediate values',
        example: 'SPI, storage register, future value, # of periods, interest per period;',
        opcode: this.generateOpcode('SPI')
      }
    ];
  }

  generateOpcode(command: string): string {
    let decimalCommand = 0;
    for (let i = 0; i < command.length; i++) {
      const parseCommand = command.charCodeAt(i);
      decimalCommand += parseCommand;
    }
    let opcode = decimalCommand.toString(16).toUpperCase();
    opcode = '0x' + opcode;
    return opcode;
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
