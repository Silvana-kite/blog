import React, { FC, useEffect, useState } from 'react';
import { Form, Select, Radio, DatePicker } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';

type QueryFormState = {
  techStack: string[];
  difficulty: string | null;
  date: string | null;
};
type QueryFormProps = {
  initValues?: Partial<QueryFormState>;
  onQuery: (values: QueryFormState) => void;
};

const options: CheckboxGroupProps<string>['options'] = [
  { label: '全部', value: 'all' },
  { label: '入门', value: 'easy' },
  { label: '进阶', value: 'middle' },
  { label: '高级', value: 'high' },
];
const SearchForm: FC<QueryFormProps> = ({ initValues, onQuery }) => {
  const [formState, setFormState] = useState<QueryFormState>({
    techStack: initValues?.techStack || [], // 技术栈
    difficulty: initValues?.difficulty || null, // 难度等级
    date: initValues?.date || null, // 更新时间
  });
  // 处理单个值的变化
  const handleChange = <K extends keyof QueryFormState>(
    key: K,
    value: QueryFormState[K],
  ) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };
  // 值变化时触发查询
  useEffect(() => {
    onQuery(formState);
  }, [formState, onQuery]);
  return (
    <Form layout="inline">
      <Form.Item label="技术栈">
        <Select
          mode="multiple"
          style={{ width: 360 }}
          onChange={(e) => handleChange('techStack', e)}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
      </Form.Item>
      <Form.Item label="难度等级">
        <Radio.Group
          block
          options={options}
          defaultValue="all"
          optionType="button"
          buttonStyle="solid"
          onChange={(e) => handleChange('difficulty', e.target.value)}
        />
      </Form.Item>
      <Form.Item label="更新时间">
        <DatePicker
          format="YYYY-MM-DD"
          onChange={(e) => handleChange('difficulty', e.format('YYYY-MM-DD'))}
        />
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
