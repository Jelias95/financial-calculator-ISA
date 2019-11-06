import { Component, OnInit } from '@angular/core';
import { InstructionDetail } from '../shared/models/instruction-detail.model';

@Component({
  selector: 'app-instruction-set-listing-page',
  templateUrl: './instruction-set-listing-page.component.html',
  styleUrls: ['./instruction-set-listing-page.component.scss']
})
export class InstructionSetListingPageComponent implements OnInit {
  possibleInstructions: Array<InstructionDetail>;

  constructor() {
  }

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

  sortCommands(): Array<InstructionDetail> {
    return this.possibleInstructions.sort(this.sortAtoZ);
  }

  private sortAtoZ(
    commandA: InstructionDetail,
    commandB: InstructionDetail
  ) {
    return commandA.command.toLowerCase() < commandB.command.toLowerCase()
      ? -1
      : commandA.command.toLowerCase() > commandB.command.toLowerCase()
        ? 1
        : 0;
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

}
