import React from 'react';
import ShowArea from './ShowArea';
import Buttons from './Button';
import { Color } from './color';

function Main() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}

export default Main