import { render } from '@testing-library/react-native';
import Home from './index';

describe('Home', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Bem-vindo ao meu portfólio!')).toBeDefined();
  });
});

