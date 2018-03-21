import { MOVE } from '../actions/games'


const initialState = [
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
];

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case MOVE:
      return state.map((value, index) => {
        if (index !== payload.index) return value;

          switch (value) {
            case 1:
              return 2;
            case 2:
              return 0;
            default:
              return 1;
          }
        });

    default:
      return state;
  }
};
