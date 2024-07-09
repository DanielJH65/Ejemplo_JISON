import { Tree } from "../analizer/symbol/Tree";
import { SymbolsTable } from "../analizer/symbol/SymbolsTable";
import { Instruction } from "../analizer/abstract/Instruction";

export class InterpreterModel {
  static async start({ input }: { input: string }) {
    try {
      const parser = require("../analizer/analizer.js");
      const result: Array<Instruction> = parser.parse(input);
      const ast: Tree = new Tree(result);
      const table: SymbolsTable = new SymbolsTable();
      table.setName("Global");
      ast.setGlobalTable(table);
      ast.setConsole("");
      for (const ins of ast.getInstructions()) {
        ins.interpret(ast, table);
      }
      return { console: ast.getConsole() };
    } catch (e: unknown) {
      console.error(e);
    }
  }
}
