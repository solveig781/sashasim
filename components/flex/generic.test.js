import { addGeneric } from './generic';

test('Should generate the css string', () => {
  expect(addGeneric('testA', 'test-a', { testA: 5 })).toEqual('test-a: 5;');
});
