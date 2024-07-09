import { SymbolsTable } from "./SymbolsTable";
import { Instruction } from "../abstract/Instruction";
import { Errors } from "../exceptions/Errors";

export class Tree {
  private instructions: Array<Instruction>;
  private console: string;
  private globalTable: SymbolsTable;
  private errors: Array<Errors>;

  constructor(instructions: Array<Instruction>) {
    this.instructions = instructions;
    this.console = "";
    this.globalTable = new SymbolsTable();
    this.errors = new Array<Errors>();
  }

  public getConsole(): string {
    return this.console;
  }

  public setConsole(console: string): void {
    this.console = console;
  }

  public getInstructions(): Array<Instruction> {
    return this.instructions;
  }

  public setInstructions(instructions: Array<Instruction>): void {
    this.instructions = instructions;
  }
  public getGlobalTable(): SymbolsTable {
    return this.globalTable;
  }

  public setGlobalTable(globalTable: SymbolsTable) {
    this.globalTable = globalTable;
  }

  public getErrors(): Array<Errors> {
    return this.errors;
  }
}
