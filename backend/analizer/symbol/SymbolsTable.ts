import { Symbol } from "./Symbol";

export class SymbolsTable {
  private previousTable: SymbolsTable | any;
  private table: Map<string, Symbol>;
  private name: string;

  constructor(anterior?: SymbolsTable) {
    this.table = new Map<string, Symbol>();
    this.name = "";
    this.previousTable = anterior;
  }

  public getPrevious(): SymbolsTable {
    return this.previousTable;
  }

  public setPrevious(anterior: SymbolsTable): void {
    this.previousTable = anterior;
  }

  public getTable(): Map<string, Symbol> {
    return this.table;
  }

  public setTabl(tabla: Map<string, Symbol>) {
    this.table = tabla;
  }

  public getVariable(id: string) {
    return "";
  }

  public setVariable(simbolo: Symbol) {}

  public getName(): string {
    return this.name;
  }

  public setName(nombre: string) {
    this.name = nombre;
  }
}
