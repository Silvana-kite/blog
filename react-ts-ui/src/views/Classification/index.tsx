import React, { FC } from 'react';
import { Flex, Divider, Typography } from 'antd';
import FlexBox from './Components/FlexBox';
import { HtmlFive, Server, ArithmeticOne } from '@icon-park/react';
import SearchForm from './Components/SearchForm';
import ContentData from './Components/ContentData';

interface FlexItem {
  icon: React.ComponentType;
  label: string;
  count: number | string;
}
type QueryFormState = {
  techStack: string[];
  difficulty: string | null;
  date: string | null;
};
const flexsData: FlexItem[] = [
  { icon: HtmlFive, label: '前端开发', count: 42 },
  { icon: Server, label: '后端开发', count: 12 },
  { icon: ArithmeticOne, label: '算法解析', count: 249 },
];
const Classification: FC = () => {
  const { Title } = Typography;
  const handleQuery = (values: QueryFormState) => {
    console.log('2222查询参数:', values);
    // 这里可以调用API进行查询
  };

  return (
    <Flex vertical gap="middle">
      <SearchForm onQuery={handleQuery} />
      <div className="text-xs text-gray-400">共找到248篇文章</div>
      <Divider />
      <Title level={3}>技术分类</Title>
      <Flex gap="middle" wrap>
        {flexsData.map((item, index) => (
          <FlexBox
            key={index}
            {...item}
            iconProps={{
              strokeWidth: 3,
              strokeLinecap: 'butt',
              className: 'mb-4',
              // 可以覆盖默认的属性
              size: 50,
              fill: '#13a8f8',
            }}
          />
        ))}
      </Flex>
      <Divider />
      <ContentData />
    </Flex>
  );
};

export default Classification;
