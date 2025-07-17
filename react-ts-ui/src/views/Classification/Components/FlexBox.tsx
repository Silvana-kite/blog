import React, { FC } from 'react';
import { Flex } from 'antd';

type IconComponent = React.ComponentType<{
  theme?: string;
  size?: number | string;
  fill?: string;
  strokeWidth?: string | number;
  strokeLinecap?: string;
  className?: string;
}>;
interface FlexBoxProps {
  icon: IconComponent;
  label: string;
  count: number | string;
  iconProps?: Omit<React.ComponentProps<IconComponent>, 'children'>;
}
const FlexBox: FC<FlexBoxProps> = ({
  icon: Icon,
  label,
  count,
  iconProps = {},
}) => {
  const FlexStyle = {
    padding: '24px 36px',
  };
  return (
    <Flex
      style={FlexStyle}
      vertical
      justify="center"
      align="center"
      className="w-1/5 border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
    >
      <Icon theme="outline" size="42" fill="#37b4ff" {...iconProps} />
      <div>{label}</div>
      <span className="text-xs text-gray-500">{count}篇文章</span>
    </Flex>
  );
};

export default FlexBox;
