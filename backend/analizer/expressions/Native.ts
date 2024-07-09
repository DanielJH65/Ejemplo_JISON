import { Instruction } from "../abstract/Instruction";
import { Tree } from "../symbol/Tree";
import { SymbolsTable } from "../symbol/SymbolsTable";
import { Type } from "../symbol/Type";

export class Native extends Instruction {
  private value: any;

  constructor(type: Type, value: any, line: number, column: number) {
    super(type, line, column);
    this.value = value;
  }

  interpret(tree: Tree, table: SymbolsTable) {
    return this.value;
  }
}
