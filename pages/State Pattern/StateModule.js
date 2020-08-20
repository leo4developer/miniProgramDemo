import State from "./State";

export class NoQuarterState extends State {
  // 初始化糖果机
  constructor(gumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  inserQuarter() {
    console.log('您投入了一个硬币');
    //转换为有硬币的状态
    this.gumballMachine.state = this.gumballMachine.hasQuarterState;
  }
  ejectQuarter() {
    console.log('没有硬币，无法弹出');
  }
  turnCrank() {
    console.log('请先投币');
  }
  dispense() {
    console.log('没有投币，无法发放糖果');
  }
}
export class HasQuarterState extends State {
  // 初始化糖果机
  constructor(gumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  inserQuarter() {
    console.log('请不要重复投币！');
    this.returnQuarter();
  }
  ejectQuarter() {
    this.returnQuarter();
    this.gumballMachine.state=this.gumballMachine.noQuarterState;
    console.log('没有硬币，无法弹出');
  }
  turnCrank() {
    console.log('转动曲轴，准备发糖');
    this.gumballMachine.state=this.gumballMachine.soldState;
  }
  dispense() {
    console.log("this method don't support");
  }
}
export class SoldState extends State {
  // 初始化糖果机
  constructor(gumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  inserQuarter() {
    console.log('已投币，请等待糖果');
    //转换为有硬币的状态
    this.gumballMachine.returnQuarter();
  }
  ejectQuarter() {
    console.log('无法退币，正在发放糖果');
  }
  turnCrank() {
    console.log('已按过曲轴，请等待');
  }
  dispense() {
    const candyCount = this.gumballMachine.candyCount;
    if (candyCount > 0) {
      console.log('发放糖果');
      candyCount--;
      this.gumballMachine.candyCount = candyCount;
      if (candyCount > 0) {
        this.gumballMachine.state = this.gumballMachine.noQuarterState;
        return;
      }
    }
    console.log('抱歉，糖果售尽');
    this.gumballMachine.state = this.gumballMachine.soldState;
  }
}
export class SoldOutState extends State {
  // 初始化糖果机
  constructor(gumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  inserQuarter() {
    console.log('糖果已经售尽');
    //转换为有硬币的状态
    this.gumballMachine.returnQuarter();
  }
  ejectQuarter() {
    console.log('没有硬币，无法退币');
  }
  turnCrank() {
    console.log('糖果已经售尽');
  }
  dispense() {
    console.log('糖果已经售尽');
  }
}
