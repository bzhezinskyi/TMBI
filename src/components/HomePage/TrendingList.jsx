import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import HorizontalScroll from 'react-horizontal-scrolling';
import { getTrending } from 'services/themoviedb/themoviedb.services';
import TrendingCard from './TrendingCard';

export default function TrendingList() {
  const [trendingList, setTrendingList] = useState();
  const [targetTime, setTargetTime] = useState('day');

  const createTrandingList = async timeWindow => {
    const data = await getTrending({
      mediaType: 'all',
      timeWindow,
    }).then();
    return setTrendingList(data.results);
  };

  useEffect(() => {
    createTrandingList(targetTime);
  }, [targetTime]);

  if (!trendingList) {
    return;
  }
  return (
    <>
      <h3 style={{ display: 'inline-block' }} className="me-3">
        У тренді
      </h3>
      <ButtonGroup size="sm">
        <Button
          variant={targetTime === 'day' ? 'success' : 'outline-success'}
          onClick={() => setTargetTime('day')}
        >
          Сьогодні
        </Button>
        <Button
          variant={targetTime === 'week' ? 'success' : 'outline-success'}
          onClick={() => setTargetTime('week')}
        >
          Цього тижня
        </Button>
      </ButtonGroup>
      <HorizontalScroll>
        {trendingList.map(item => (
          <TrendingCard key={item.id} item={item} />
        ))}
      </HorizontalScroll>
    </>
  );
}
