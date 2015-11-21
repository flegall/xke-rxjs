import Yolk from 'yolk';
import Rx from 'rx';

export function Input() {

  const displayValue = new Rx.BehaviorSubject('TEST');
  const handleChange = this.createEventHandler(ev => ev.target.value);

  handleChange.subscribe(displayValue);

  handleChange
    //.withLatestFrom(displayValue, (_, val) => val)
    .filter(val => val.length > 0)
    .subscribe(s => {
      console.log(`next => ${s}`)
    });

  return (
    <div>
      <input type="text" onKeyUp={handleChange} value={displayValue}/>
      {displayValue}
    </div>
  );
}
