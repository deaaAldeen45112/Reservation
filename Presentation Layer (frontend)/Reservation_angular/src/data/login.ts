export class Login{

    private email: string='';

    public get Email() : string {
        return this.email;
    }
    public set Email(v : string) {
        this.email = v;
    }

    private pass : string='';
    public get Pass() : string {
        return this.pass;
    }
    public set Pass(v : string) {
        this.pass = v;
    }

}

