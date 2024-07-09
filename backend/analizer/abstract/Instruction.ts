import { Tree } from "../symbol/Tree";
import { SymbolsTable } from "../symbol/SymbolsTable";
import { Type } from "../symbol/Type";

export abstract class Instruction {
  private type: Type;
  private line: number;
  private column: number;

  constructor(type: Type, line: number, colum: number) {
    this.type = type;
    this.line = line;
    this.column = colum;
  }

  public getType(): Type {
    return this.type;
  }

  abstract interpret(tree: Tree, table: SymbolsTable): any;
}
