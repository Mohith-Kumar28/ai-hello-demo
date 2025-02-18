'use client';

import { BaseGraph } from './graphs/BaseGraph';
import { graphCardsData } from '../data/graphCardsData';

export function GraphCards() {
  return (
    <div className='grid gap-3 lg:grid-cols-8 xl:grid-cols-8'>
      {graphCardsData.map((graph) => (
        <BaseGraph key={graph.title} {...graph} />
      ))}
    </div>
  );
}
