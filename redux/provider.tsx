import { Provider } from 'react-redux';
import { store } from './store';

interface Children{
    children: JSX.Element | JSX.Element[] | string | string[];
}

export function ReduxProvider({ children } : Children) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}