export class Register{

    constructor(){}
private name : string='';

public get Name() : string {
    return this.name;
}
public set Name(v : string) {
    this.name = v;
}
private email : string='';
public get Email() : string {
    return this.email;
}
public set Email(v : string) {
    this.email = v;
}
private password : string='';
public get Password() : string {
    return this.password;
}
public set Password(v : string) {
    this.password = v;
}
private phone : string='';
public get Phone() : string {
    return this.phone;
}
public set Phone(v : string) {
    this.phone = v;
}
private roleName : string='';
public get RoleName() : string {
    return this.roleName;
}
public set RoleName(v : string) {
    this.roleName = v;
}



}