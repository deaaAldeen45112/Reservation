import { Cart } from "./cart";
import { Register } from "./register";

export  class Customer {
    private customer_Id: number=-1;
    private register_Id: number=-1;
    

    public get Customer_Id() : number {return this.customer_Id; }
    public set Customer_Id(v :  number) {this.customer_Id = v;}
    public get Register_Id() : number {return this.register_Id; }
    public set Register_Id(v :  number) {this.register_Id = v;}
    
    /*public get Register() : Register {return this.register; }
    public set Register(v :  Register) {this.register = v;}
    public get Carts() : Cart[] {return this.carts; }
    public set Carts(v :  Cart[]) {this.carts = v;}
    register: Register;
    carts: Cart[];
*/
}