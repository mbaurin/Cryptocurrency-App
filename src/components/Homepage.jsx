import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi.js';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const glogalStats = data?.data?.stats;

  console.log(data);
  
  if (isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={glogalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(glogalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(glogalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(glogalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(glogalStats.totalMarkets)}/></Col>
      </Row>
    </>
    );
};

export default Homepage;
