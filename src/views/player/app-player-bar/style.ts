import styled from 'styled-components';
import pip from '@/assess/imgs/pip.png';

export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 51px;
  background-position: 0 0;
  z-index: 99;
  background-repeat: repeat;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
  }
`;

export const Control = styled.div<{ state: number }>`
  //接收传来的参数
  display: flex;
  align-items: center;
  .prev,
  .next {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .next {
    background-position: -80px -130px;
  }
  .next:hover {
    background-position: -110px -130px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    cursor: pointer;
    background-position: ${(props) => (props.state === 0 ? '0 -165px' : '0 -204px')};
    //原来 0 -204px;
    //点击后切换到0 -166px
  }
`;
export const PlayInfo = styled.div`
  .img {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }
  .info {
    width: 580px;
  }
  display: flex;
  .song {
    display: flex;
    align-items: center;
    .song-name {
      color: white;
      margin-left: 10px;
      font-size: 12px;
    }
    .singer-name {
      color: #a1a1a1;
      margin-left: 10px;
      font-size: 10px;
    }
  }
  .progress {
    display: flex;
    align-items: center;
    height: 9px;
    .ant-slider {
      width: 493px;
      margin: 0 10px;
      .ant-slider-rail {
        height: 9px;
      }
    }
  }
  .time {
    display: flex;
    color: #a1a1a1;
    font-size: 11px;
    margin-left: 5px;
    .divider {
      margin: 0 3px;
    }
    .current {
      color: white;
    }
  }
`;
//传入playmode
interface IOperator {
  playmode: number;
}
export const Operator = styled.div<IOperator>`
  display: flex;
  align-items: center;
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .left {
    display: flex;
    align-items: center;
    .pip {
      background: url(${pip}) no-repeat 0 0;
      //hover效果
      &:hover {
        background-position: 0 -24px;
        position: relative;
        top: -1px;
      }
    }
    .favor {
      background-position: -90px -163px;
      &:hover {
        background-position: -90px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }
  .right {
    position: relative;
    display: flex;
    align-items: center;
    &::after {
      position: absolute;
      content: '|';
      display: block;
      width: 2px;
      height: 2px;
      background-color: #333;
      bottom: 25px;
      margin-left: 5px;
    }
    .volume {
      margin-left: 20px;
      background-position: 0 -247px;
      &:hover {
        background-position: -29px -247px;
      }
    }
    .loop {
      background-position: ${(props) => {
        switch (props.playmode) {
          case 0:
            return '-1px -343px';
          case 1:
            return '-66px -344px';
          case 2:
            return '-66px -248px';
          default:
            return '-1px -343px';
        }
      }};
      &:hover {
        background-position: ${(props) => {
          switch (props.playmode) {
            case 0:
              return '-31px -343px';
            case 1:
              return '-66px -344px';
            case 2:
              return '-66px -248px';
            default:
          }
        }};
      }
    }
    .playlist {
      width: 60px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`;
