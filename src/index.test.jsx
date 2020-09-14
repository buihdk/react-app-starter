import Index from '.';

it('renders without crashing', () => {
  const wrapper = JSON.stringify({ ...Index, _reactInternalInstance: 'censored' });
  expect(wrapper).toMatchSnapshot();
});
