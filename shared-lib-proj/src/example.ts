import * as ebisu from 'ebisu-js';
export function predictTest(): number {
    return ebisu.predictRecall([1,1,1], 3, true);
}