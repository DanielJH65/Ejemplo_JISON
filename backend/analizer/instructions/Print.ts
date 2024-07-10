import { Instruction } from "../abstract/Instruction";
import { Errors } from "../exceptions/Errors";
import { SymbolsTable } from "../symbol/SymbolsTable";
import { Tree } from "../symbol/Tree";
import { Type, dataType } from "../symbol/Type";

export class Print extends Instruction {
  private expression: Instruction;
  constructor(expression: Instruction, line: number, column: number) {
    super(new Type(dataType.VOID), line, column);
    this.expression = expression;
  }

  interpret(tree: Tree, table: SymbolsTable): any {
    let value = this.expression.interpret(tree, table);
    if (value instanceof Errors) return value;
    if (this.expression.getType().getType() === dataType.STRING) {
      value = value.replaceAll("\\'", "'");
      value = value.replaceAll('\\"', '"');
      value = value.replaceAll("\\t", "\t");
      value = value.replaceAll("\\n", "\n");
      value = value.replaceAll("\\\\", "\\");
    }
    tree.setConsole(tree.getConsole() + value.toString() + "\n");
    return null;
  }
}
