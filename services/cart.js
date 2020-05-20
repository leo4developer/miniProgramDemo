export default class Cart {
  constructor() {
    this._presentList = [];
    this._selectedPresentId = '';
    this._selectedPresentStatus = false;
  }
  fetchPresentList() {
    const list = [
     {id:'11', name: 'aa'},
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
      { id: '11', name: 'aa' },
    ];

    list.forEach(elem => {
      elem.checked = false;
    });

    this._presentList = list;
  }
  get presentList() {
    return this._presentList;
  }
  set selectedPresentId(id) {
    this._selectedPresentId = id;
  }
  get selectedPresentId() {
    return this._selectedPresentId;
  }
  set selectedPresentStatus(checked) {
    this._selectedPresentStatus = checked;
  }
  get selectedPresentStatus() {
    return this._selectedPresentStatus;
  }
}