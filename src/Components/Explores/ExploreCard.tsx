import React, { use } from 'react';
import { Itechnology } from '../../Types/Explore';
import Card from './Card';

interface exploreProps {
  explorePromise: Promise<Itechnology[]>;
}

const ExploreCard = ({ explorePromise }: exploreProps) => {
  const ExploreCard = use(explorePromise);
  console.log(ExploreCard, 'explore');
  return (
    <div>
      <Card ExploreCard={ExploreCard} />
    </div>
  );
};

export default ExploreCard;
