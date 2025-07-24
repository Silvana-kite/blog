import { Button, Flex, Image } from 'antd';
import React from 'react';
import {
  MainButtonStyle,
  MainFlexItemStyle,
  MainFlexStyle,
  MainIconStyle,
} from './index.style';
import './index.less';
import { DownOutlined } from '@ant-design/icons';
const Main: React.FC = () => {
  const toProject = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div style={{position: 'relative'}}>
      <Flex id="Home" wrap align="center" style={MainFlexStyle}>
        <Flex style={MainFlexItemStyle} vertical>
          <p className="text-1">I'M A</p>
          <p className="cyberpunk-text" data-text="FRONT-END">
            FRONT-END
          </p>
          <p>DEVELOPER</p>
          <Flex>
            <Button
              style={MainButtonStyle}
              className="pink-btn"
              onClick={() => toProject('Project')}
            >
              VIEW MY WORK
            </Button>
            <Button style={MainButtonStyle} className="blue-btn">
              CONTACT ME
            </Button>
          </Flex>
        </Flex>
        <div className="right-container">
          <div className="profile-image-wrapper">
            <div className="profile-gradient-overlay"></div>
            <Image
              alt="Profile image"
              className="profile-image"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              preview={false}
            />
          </div>
        </div>
      </Flex>
      <DownOutlined style={MainIconStyle} className='down-icon'onClick={() => toProject('About') } />
    </div>
  );
};

export default Main;
