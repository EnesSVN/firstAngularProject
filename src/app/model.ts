export class Model {
  user;
  items;

  constructor() {
    this.user = 'Enes';
    this.items = [
      new TodoItem('Kahvaltı', false),
      new TodoItem('Okul', false),
      new TodoItem('Angular', false),
      new TodoItem('React', false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
