import { Type } from "./Type";

export class Symbol {
  private type: Type;
  private id: string;
  private value: any;

  constructor(type: Type, id: string, value: any) {
    this.id = id;
    this.type = type;
    this.value = value;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public setType(type: Type) {
    this.type = type;
  }

  public getType(): Type {
    return this.type;
  }

  public setValue(value: any) {
    this.value = value;
  }

  public getValue(): any {
    return this.value;
  }
}
