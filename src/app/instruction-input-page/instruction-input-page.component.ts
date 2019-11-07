import { Component, OnInit } from '@angular/core';
import { InstructionDetail } from '../shared/models/instruction-detail.model';
import { RegisterDetail } from '../shared/models/register-detail.model';

@Component({
  selector: 'app-instruction-input-page',
  templateUrl: './instruction-input-page.component.html',
  styleUrls: ['./instruction-input-page.component.scss']
})
export class InstructionInputPageComponent implements OnInit {
  possibleInstructions: Array<InstructionDetail>;
  registers: Array<RegisterDetail>;
  machineInstructionDisplay: string;

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
    this.registers = [
      {
        displayName: 'CUR1',
        machineName: 'C1'
      },
      {
        displayName: 'CUR2',
        machineName: 'C2'
      },
      {
        displayName: 'CUR3',
        machineName: 'C2'
      },
      {
        displayName: 'NUM1',
        machineName: 'N1'
      },
      {
        displayName: 'NUM2',
        machineName: 'N2'
      },
      {
        displayName: 'NUM3',
        machineName: 'N3'
      },
      {
        displayName: 'PER1',
        machineName: 'P1'
      },
      {
        displayName: 'PER2',
        machineName: 'P2'
      },
      {
        displayName: 'PER3',
        machineName: 'P3'
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

  convertDecimalToHex(decimal: number): string {
    let hexNumber = decimal.toString(16).toUpperCase();
    hexNumber = '0x' + hexNumber;
    return hexNumber;
  }

  submitInstructionSet() {
    const instructionSet: Array<string> = (document.getElementById('instructionList') as HTMLInputElement).value.split('\n');
    this.parseInstructionSet(instructionSet);
    this.translateInstructionSet(instructionSet);
  }

  translateInstructionSet(instructionSet: Array<string>) {
    this.machineInstructionDisplay = '';
    for (const instruction of instructionSet) {
      const parsedInstruction: Array<string> = instruction.valueOf().split(',');
      const command = parsedInstruction[0].trim().toUpperCase();
      const opcodeIndex = this.possibleInstructions.map((inst) => inst.command).indexOf(command);
      this.machineInstructionDisplay = this.machineInstructionDisplay + this.possibleInstructions[opcodeIndex].opcode + ', ';
      for (let i = 1; i < parsedInstruction.length; i++) {
        if (this.registers.map((reg) => reg.displayName).indexOf(parsedInstruction[i].trim().toUpperCase()) !== -1) {
          const machineNameIndex = this.registers.map((reg) => reg.displayName).indexOf(parsedInstruction[i].trim().toUpperCase());
          this.machineInstructionDisplay = this.machineInstructionDisplay + this.registers[machineNameIndex].machineName;
        } else {
          this.machineInstructionDisplay =
            this.machineInstructionDisplay + this.convertDecimalToHex(parseInt(parsedInstruction[i].trim(), 10));
        }
        if (i < parsedInstruction.length - 1) {
          this.machineInstructionDisplay = this.machineInstructionDisplay + ', ';
        }
      }
      this.machineInstructionDisplay = this.machineInstructionDisplay + '\n';
      (document.getElementById('instructionResult') as HTMLInputElement).value = this.machineInstructionDisplay;
    }
  }

  parseInstructionSet(instructionSet: Array<string>) {
    for (const instruction of instructionSet) {
      const parsedInstruction: Array<string> = instruction.valueOf().split(',');
      const command = parsedInstruction[0].trim().toUpperCase();
      switch (command) {
        case 'FVI': {
          this.futureValueImmediate(parsedInstruction);
          break;
        }
        case 'FVR': {
          this.futureValueWithRegister(parsedInstruction);
          break;
        }
        case 'IPPI': {
          console.log('IPPI');
          break;
        }
        case 'IPPR': {
          console.log('IPPR');
          break;
        }
        case 'NPI': {
          console.log('NPI');
          break;
        }
        case 'NPR': {
          console.log('NPR');
          break;
        }
        case 'PMTI': {
          console.log('PMTI');
          break;
        }
        case 'PMTR': {
          console.log('PMTR');
          break;
        }
        case 'SPI': {
          console.log('SPI');
          break;
        }
        case 'SPR': {
          console.log('SPR');
          break;
        }
        case 'SV': {
          this.storeValue(parsedInstruction);
          break;
        }
        default: {
          console.log('OOPS! Wrong Command!');
          break;
        }
      }
    }
  }

  storeValue(parsedInstruction: Array<string>) {
    const storageRegisterIndex = this.registers.map((reg) => reg.displayName).indexOf(parsedInstruction[1].trim().toUpperCase());
    const storageRegister = this.registers[storageRegisterIndex].machineName;
    (document.getElementById(storageRegister) as HTMLInputElement).value = parsedInstruction[2];
  }

  futureValueImmediate(parsedInstruction: Array<string>) {
    const storageRegisterIndex = this.registers.map((reg) => reg.displayName).indexOf(parsedInstruction[1].trim().toUpperCase());
    const storageRegister = this.registers[storageRegisterIndex].machineName;
    const periods = Number(parsedInstruction[2]);
    const startingPrincipal = Number(parsedInstruction[3]);
    const interestRate = Number(parsedInstruction[4]) / 100;
    const futureValue = startingPrincipal * (1 + (interestRate * periods));
    (document.getElementById(storageRegister) as HTMLInputElement).value = String(futureValue);
  }

  futureValueWithRegister(parsedInstruction: Array<string>) { }
}
