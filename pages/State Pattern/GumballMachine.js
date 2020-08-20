import State from "./State";
import { NoQuarterState, HasQuarterState, SoldState } from "./StateModule";

export default class GumballMachine extends State {

  
  constructor(count) {
    const noQuarterState = new NoQuarterState(this);
    const hasQuarterState = new HasQuarterState(this);
    const soldState = new SoldState(this);
    const soldOutState = new SoldOutState(this);

    this.state = soldOutState;
    this.candyCount = count;
    if (count > 0) {
      this.setState()
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