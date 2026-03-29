import * as migration_20260329_113246 from './20260329_113246';
import * as migration_20260329_hero_solutions_image_source from './20260329_hero_solutions_image_source';

export const migrations = [
  {
    up: migration_20260329_113246.up,
    down: migration_20260329_113246.down,
    name: '20260329_113246',
  },
  {
    up: migration_20260329_hero_solutions_image_source.up,
    down: migration_20260329_hero_solutions_image_source.down,
    name: '20260329_hero_solutions_image_source'
  },
];
