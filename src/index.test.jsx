import { act } from '@testing-library/react';

it('mounts the app into #root', async () => {
  await act(async () => {
    await import('.');
  });
  expect(document.getElementById('root').childElementCount).toBeGreaterThan(0);
});
