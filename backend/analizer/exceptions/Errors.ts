export class Errors {
  private errorType: string;
  private desc: string;
  private line: number;
  private column: number;

  constructor(errorType: string, desc: string, line: number, column: number) {
    this.errorType = errorType;
    this.desc = desc;
    this.line = line;
    this.column = column;
  }

  public getDesc(): string {
    return this.desc;
  }
  public getErrorType(): string {
    return this.errorType;
  }
  public getline(): number {
    return this.line;
  }
  public getColumn(): number {
    return this.column;
  }
  public getErrores(): any {
    return {
      tipo: this.errorType,
      desc: this.desc,
      line: this.line,
      column: this.column,
    };
  }
  public toString(): string {
    return (
      "----- Error " +
      this.errorType +
      ": " +
      this.desc +
      "en la linea " +
      this.line +
      " y columna " +
      this.column +
      " ----"
    );
  }
}
