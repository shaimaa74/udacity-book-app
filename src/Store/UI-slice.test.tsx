import store from './store';
import { UIActions } from './UI-slice';

test('should set state to initial state', () => {
    const state = store.getState();
    expect(state.ui.errorMsg).toEqual('');
});

test("should call showError action", () => {
    const newState = UIActions.showError({
        errorMsg: 'error message'
    });
    expect(newState.payload.errorMsg).toEqual('error message');
});
