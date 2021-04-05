class Todo {
  id!: number;
  title!: string;
  done!: boolean;

  public cssClassDoned = (): string => {
    return this.done ? 'completed' : '';
  };
}

export default Todo;
