export class User {
    public id?: string;
    public name!: string;
    public email!: string;
    public password!: string;

    constructor(props:User, id?:number){
        Object.assign(this, props)
    }
  }