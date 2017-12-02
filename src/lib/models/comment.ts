export class Comment {
  ID: number;
  UserID: number;
  UserName: string; // J'ai la flemme de faire les sous classes
  Content: string;
  Validate: boolean;
  Deleted: boolean;

  constructor(
    ID: number,
    UserID: number,
    UserName: string,
    Content: string,
    Validate: boolean,
    Deleted: boolean,
  ) {
    this.ID  = ID;
    this.UserID  = UserID;
    this.UserName  = UserName;
    this.Content = Content;
    this.Validate  = Validate;
    this.Deleted = Deleted;
  }
}
