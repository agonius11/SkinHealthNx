import { render } from '@testing-library/react';
import ContentRight from './content-right';
describe('ContentRight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentRight />);
    expect(baseElement).toBeTruthy();
  });
});
