import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const Good = ({ goods }) => (
  <ul>
    {goods.map((good, index) => (
      <li data-cy="Good" key={index}>
        {good}
      </li>
    ))}
  </ul>
);

export const App = () => {
  const [sorted, setSorted] = useState(goodsFromServer);
  const [sortMode, setSortMode] = useState(null);

  const sortAlphabetically = () => {
    setSorted([...sorted].sort((good1, good2) => good1.localeCompare(good2)));
    setSortMode('alphabetical');
  };

  const sortByLength = () => {
    setSorted([...sorted].sort((good1, good2) => good1.length - good2.length));
    setSortMode('length');
  };

  const reset = () => {
    setSorted(goodsFromServer);
    setSortMode(null);
  };

  const reverse = () => {
    setSorted([...sorted].reverse());
    setSortMode('reversed');
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': sortMode !== 'alphabetical',
          })}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': sortMode !== 'length',
          })}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': sortMode !== 'reversed',
          })}
          onClick={reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-info is-light"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <Good goods={sorted} />
    </div>
  );
};
