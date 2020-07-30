import Publisher from './Publisher';
 
export default class PrdPublisher extends Publisher {
  constructor() {
    super();
    this.prdState = null;
    this.observers = [];

  }
  getState() {
    console.log('PrdPublisher.getState invoked');
    return 
  }

  setState(state) {
    console.log('prdPublisher.setState invoked');
    this.prdState = state;
    this.notify();
  }
}