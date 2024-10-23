import * as migration_20241023_141030 from './20241023_141030';
import * as migration_20241023_141051 from './20241023_141051';

export const migrations = [
  {
    up: migration_20241023_141030.up,
    down: migration_20241023_141030.down,
    name: '20241023_141030',
  },
  {
    up: migration_20241023_141051.up,
    down: migration_20241023_141051.down,
    name: '20241023_141051'
  },
];
