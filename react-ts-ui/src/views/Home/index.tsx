import React, { useEffect, useRef, useState } from 'react';
import { Flex, Layout, Typography, Menu, FloatButton } from 'antd';
import {
  HomeContentStyle,
  HomeFooteStyle,
  HomeHeaderStyle,
  HomeLayoutStyle,
  HomeMunuStyle,
  HomeTypographyTextStyle,
} from './index.style';
import type { MenuProps } from 'antd';
import './index.less';
import Main from './Components/Main';
import Projects from './Components/Projects';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

const { Content, Footer, Header } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
const MenuItems: MenuItem[] = [
  { label: '首页', key: 'Home' },
  { label: '关于', key: 'About' },
  { label: '技能', key: 'Skills' },
  { label: '项目', key: 'Project' },
  { label: '联系方式', key: 'Contact' },
];

const Home: React.FC = () => {
  const [current, setCurrent] = useState('Home');
  const scrollTimer = useRef<number | null>(null);
  const onClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    const targetElement = document.getElementById(e.key);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // 处理滚动事件
  const handleScroll = () => {
    // 节流处理，避免频繁触发
    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
    }

    scrollTimer.current = setTimeout(() => {
      // 获取当前滚动位置（加上一定偏移量，提升体验）
      const scrollPosition = window.scrollY + 100;

      // 遍历所有锚点，找到当前可见的锚点
      for (const menu of MenuItems) {
        const key = menu?.key?.toString() ?? 'Home'; // 确保有默认值
        const element = document.getElementById(key);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          // 判断当前滚动位置是否在元素范围内
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (current !== key) {
              setCurrent(key);
            }
            break; // 找到第一个匹配的就跳出循环
          }
        }
      }
    }, 100); // 100ms节流间隔
  };
   // 监听滚动事件
   useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
    };
  }, [current]);
  return (
    <Flex gap="middle" wrap justify="center">
      <Layout style={HomeLayoutStyle}>
        <Header style={HomeHeaderStyle}>
          <Flex gap="middle">
            <Typography.Text
              style={{ color: 'rgb(5 217 232)', ...HomeTypographyTextStyle }}
            >
              Silvana
            </Typography.Text>
            <Typography.Text
              style={{ color: 'rgb(255 42 109)', ...HomeTypographyTextStyle }}
            >
              Web
            </Typography.Text>
          </Flex>
          <Menu
            style={HomeMunuStyle}
            onClick={onClickMenu}
            selectedKeys={[current]}
            mode="horizontal"
            items={MenuItems}
            theme="dark"
          ></Menu>
        </Header>
        <Content style={HomeContentStyle}>
          <Main />
          <About />
          <Skills />
          <Projects />
        </Content>
        <Footer style={HomeFooteStyle}>
          <Contact/>
        </Footer>
      </Layout>
      <FloatButton.BackTop />
    </Flex>
  );
};

export default Home;
