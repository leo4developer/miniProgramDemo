import State from "./State";
import { NoQuarterState, HasQuarterState, SoldState } from "./StateModule";

export default class GumballMachine extends State {

  
  constructor(count) {
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.soldOutState = new SoldOutState(this);

    this.state = soldOutState;
    this.candyCount = count;
    if (count < 0) {
      this.state = soldOutState;
    }
  }
  inserQuarter() {
    this.state.inserQuarter();
  }
  ejectQuarter() {
    this.state.ejectQuarter();
  }
  turnCrank() {
    this.state.turnCrank();
  }
  dispense() {
    this.state.dispense();
  }

}