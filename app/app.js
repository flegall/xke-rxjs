import Yolk from 'yolk'

import {Counter} from './counter'
import {Input} from './input';

Yolk.render(
  <div>
    <Input/>
    <Counter/>
  </div>,
  document.getElementById('container'));
