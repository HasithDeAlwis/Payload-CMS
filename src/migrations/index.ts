import * as migration_20241023_141030 from './20241023_141030';
import * as migration_20241023_141051 from './20241023_141051';
import * as migration_20241108_215032 from './20241108_215032';
import * as migration_20241211_173509 from './20241211_173509';

export const migrations = [
  {
    up: migration_20241023_141030.up,
    down: migration_20241023_141030.down,
    name: '20241023_141030',
  },
  {
    up: migration_20241023_141051.up,
    down: migration_20241023_141051.down,
    name: '20241023_141051',
  },
  {
    up: migration_20241108_215032.up,
    down: migration_20241108_215032.down,
    name: '20241108_215032',
  },
  {
    up: migration_20241211_173509.up,
    down: migration_20241211_173509.down,
    name: '20241211_173509'
  },
];
