export class Type {
  private type: dataType;

  constructor(type: dataType) {
    this.type = type;
  }

  public setType(type: dataType) {
    this.type = type;
  }

  public getType(): dataType {
    return this.type;
  }
}

export enum dataType {
  INTEGER,
  DOUBLE,
  BOOLEAN,
  STRING,
  CHAR,
  VOID,
}
