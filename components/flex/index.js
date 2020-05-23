import MakeGeneric from './generic';

export const Row = MakeGeneric({
  flexDirection: 'row',
});

export const Col = MakeGeneric({
  flexDirection: 'column',
});

export const RowCenter = MakeGeneric({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ColCenter = MakeGeneric({
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
});
