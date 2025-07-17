import React, { FC } from 'react';

type IconComponent = React.ComponentType<{
  theme?: string;
  size?: number | string;
  fill?: string;
}>;
interface StatCardProps {
  icon: IconComponent;
  count: number | string;
  label: string;
  iconSize?: number | string;
}
const StatCard: FC<StatCardProps> = ({
  icon: Icon,
  count,
  label,
  iconSize = 24,
}) => (
  <div className="flex-1 flex flex-col items-center justify-between border-2 border-gray-200 py-4">
    <Icon theme="outline" size={iconSize} fill="#37b4ff" />
    <span className="leading-9 text-lg font-bold">{count}</span>
    <span className="leading-4 text-base text-gray-700">{label}</span>
  </div>
);

export default StatCard;
