import { withLogger } from '../helper/withLoggerComponent';
import { Button } from './Button';

const mock = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  {
    number: 5,
  },
  {
    number: 6,
  },
  {
    number: 7,
  },
  {
    number: 8,
  },
  {
    number: 9,
  },
  {
    number: 10,
  },
];

const ButtonWithLogger = withLogger(Button);

function List() {
  function onClick() {
    console.log("outer");
  }

  return mock.map(item => {
    return (
      <div key={item.number}>
        <ButtonWithLogger
          onClick={onClick}
          content={item.number}
        >
          {item.number}
        </ButtonWithLogger>
      </div>
    );
  });
}

export { List };
