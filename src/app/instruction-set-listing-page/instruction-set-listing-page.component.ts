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

}
