import styled from 'styled-components';
import rank_bg from '@/assess/imgs/rank.bg.png';
import icon from '@/assess/imgs/iconall_sprite.png';
import btnCover from '@/assess/imgs/btn_sprite.png';
import playlist from '@/assess/imgs/playlist.png';
export const RankingWrapper = styled.div`
  .content {
    background: url(${rank_bg}) repeat-y center 0;
    min-height: 700px;
    border: 1px solid #d3d3d3;
    display: flex;
    .right {
      flex: 1;
      .top {
        padding: 40px;
        .songListInfo {
          display: flex;
          .song-left {
            width: 150px;
            height: 150px;
            background-color: pink;
            position: relative;
            &::before {
              content: '';
              width: 156px;
              height: 156px;
              border: 1px solid #ccc;
              position: absolute;
              top: -4px;
              left: -4px;
            }
          }
          .song-right {
            padding: 10px 20px;
            .time {
              font-size: 12px;
              color: #666666;
            }
            .update {
              display: inline-block;
              margin-left: 5px;
              font-size: 12px;
              color: #999999;
            }
            .time {
              line-height: 35px;
              padding-left: 13px;
              position: relative;
              //加图片
              &:before {
                content: '';
                width: 13px;
                height: 13px;
                background-image: url(${icon});
                background-position: -18px -682px;
                position: absolute;
                left: -2px;
                top: 2px;
              }
            }
            .btn {
              margin-top: 20px;
              display: flex;
              align-items: center;
              cursor: pointer;

              .pl {
                display: inline-block;
                width: 61px;
                height: 31px;
                line-height: 31px;
                font-size: 12px;
                text-align: right;
                padding-right: 5px;
                border-radius: 2px;
                background-image: url(${btnCover});
                background-position: 0 -632px;
                color: #fffdef;
                &:hover {
                  background-position: 0 -718px;
                }
              }
              .pr {
                display: inline-block;
                width: 31px;
                height: 31px;
                border-radius: 2px;
                background-image: url(${btnCover});
                background-position: 0 -1589px;
                position: relative;
                top: 1px;
                &:hover {
                  background-position: -40px -1589px;
                }
              }
              .favor {
                margin: 5px;
                display: inline-block;
                width: 84px;
                height: 31px;
                line-height: 31px;
                background-image: url(${btnCover});
                background-position: 0 -977px;
                font-size: 11px;
                text-align: right;
                color: #333;
                position: relative;
                padding-right: 1px;
                &:hover {
                  background-position: 0 -1063px;
                }
                &::before {
                  content: '';
                  width: 9px;
                  height: 31px;
                  background-image: url(${btnCover});
                  background-position: right -1020px;
                  position: absolute;
                  top: 0;
                  left: 80px;
                  z-index: 1;
                }
              }
              .share {
                display: inline-block;
                margin: 5px;
                width: 72px;
                height: 31px;
                font-size: 11px;
                color: #333;
                line-height: 31px;
                text-align: right;
                background-image: url(${btnCover});
                background-position: 0 -1225px;
                position: relative;
                &:hover {
                  background-position: 0 -1268px;
                }
                &::before {
                  content: '';
                  width: 9px;
                  height: 31px;
                  background-image: url(${btnCover});
                  background-position: right -1020px;
                  position: absolute;
                  top: 0;
                  left: 68px;
                }
              }
              .download {
                display: inline-block;
                margin: 5px;
                width: 54px;
                height: 31px;
                font-size: 11px;
                color: #333;
                line-height: 31px;
                text-align: right;
                background-image: url(${btnCover});
                background-position: 0 -2761px;
                position: relative;
                &:hover {
                  background-position: 0 -2805px;
                }
                &::before {
                  content: '';
                  width: 9px;
                  height: 31px;
                  background-image: url(${btnCover});
                  background-position: right -1020px;
                  position: absolute;
                  top: 0;
                  left: 50px;
                }
              }
              .comments {
                display: inline-block;
                margin: 5px;
                width: 78px;
                height: 31px;
                font-size: 11px;
                color: #333;
                line-height: 31px;
                text-align: right;
                background-image: url(${btnCover});
                background-position: 0 -1465px;
                position: relative;
                &:hover {
                  background-position: 0 -1508px;
                }
                &::before {
                  content: '';
                  width: 9px;
                  height: 31px;
                  background-image: url(${btnCover});
                  background-position: right -1020px;
                  position: absolute;
                  top: 0;
                  left: 74px;
                }
              }
            }
          }
        }
      }
      .bottom {
        padding: 0 30px 40px 40px;
        .bottom-top {
          display: flex;
          justify-content: space-between;
          padding-bottom: 5px;
          text-align: center;
          //选择第一个span

          span:first-child {
            font-size: 20px;
          }

          span:nth-child(2) {
            display: inline-block;
            font-size: 12px;
            color: #666;
            margin-left: -400px;
            margin-top: 9px;
          }

          span:last-child {
            font-size: 12px;
            color: #666;
            margin-top: 9px;
            > span {
              margin-left: 5px;
              color: red;
            }
          }
        }
        .bottom-bottom {
          .songRank {
            > div {
              display: flex;
              justify-content: space-between;
              > span {
                font-size: 12px;
                color: #666;
              }
            }
          }
          .musicName {
            display: flex;
            align-items: center;
            > span {
              font-size: 12px;
              color: #666;
            }
          }
          .musicName1 {
            display: flex;
            align-items: center;
            position: relative;
            pointer-events: none;
            > span {
              display: inline-block;
              margin-left: 22px;
              font-size: 12px;
              color: #666;
            }
            &::before {
              content: '';
              width: 17px;
              height: 17px;
              background-image: url(${playlist});
              background-position: 0 -103px;
              position: absolute;
              top: 10px;
              left: 8px;
              cursor: pointer;
              pointer-events: auto;
              //添加hover
            }
            &:hover::before {
              background-position: 0 -128px;
            }
          }

          .img {
            width: 50px;
            height: 50px;
            background-color: pink;
            margin-right: 30px;
            position: relative;
            &::before {
              content: '';
              width: 17px;
              height: 17px;
              background-image: url(${playlist});
              background-position: 0 -103px;
              position: absolute;
              top: 16px;
              right: 0;
              left: 57px;
              cursor: pointer;
              //添加hover
            }
            &:hover::before {
              background-position: 0 -128px;
            }
          }
          .musicTime {
            .playbtn {
              display: flex;
              position: relative;
              cursor: pointer;
              align-items: center;
              right: 5px;
              .add {
                background-image: url(${icon});
                width: 13px;
                height: 13px;
                background-position: 0 -700px;
                position: absolute;
                &:hover {
                  background-position: -22px -700px;
                }
              }
              .favor {
                background-image: url(${playlist});
                width: 17px;
                height: 15px;
                background-position: 0 -174px;
                position: absolute;
                left: 20px;
                &:hover {
                  background-position: -20px -174px;
                }
              }
              .share {
                background-image: url(${playlist});
                width: 17px;
                height: 15px;
                background-position: 0 -195px;
                position: absolute;
                left: 40px;
                &:hover {
                  background-position: -20px -195px;
                }
              }
              .download {
                display: inline-block;
                background-image: url(${playlist});
                width: 17px;
                height: 15px;
                background-position: -81px -174px;
                position: absolute;
                left: 60px;
                &:hover {
                  background-position: -104px -174px;
                }
              }
            }
            .time {
              font-size: 12px;
              font-weight: normal;
              color: #666;
            }
          }
          .singerName {
            font-size: 12px;
            position: relative;
            top: -2px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            border-left: 1px solid rgb(229, 229, 229);
            border-right: 1px solid rgb(229, 229, 229);
            border-bottom: 1px solid rgb(229, 229, 229);
          }

          thead th {
            background-image: url(${playlist});
            background-repeat: no-repeat;
            background-position: -1px -56px;
            border-bottom: 1px solid rgb(229, 229, 229);
            border-top: 3px solid red; /* 上边框红色 */
            padding: 8px 10px;
            text-align: left;
            height: 18px;
            line-height: 18px;
          }
          .p {
            width: 50px;
          }
          .title {
            font-size: 12px;
            color: #666;
            font-weight: lighter;
            width: 120px;
          }
          .time {
            font-size: 12px;
            color: #666;
            font-weight: lighter;
            width: 70px;
          }
          .singer {
            font-size: 12px;
            color: #666;
            font-weight: lighter;
          }

          tbody td {
            border-bottom: 1px solid rgb(229, 229, 229); /* 每一行之间的分隔线 */
            padding: 10px;
          }

          tbody tr:nth-child(odd) {
            background-color: rgb(247, 247, 247); /* 奇数行背景色 */
          }

          tbody tr:nth-child(even) {
            background-color: rgb(255, 255, 255); /* 偶数行背景色 */
          }

          tbody tr:last-child td {
            border-bottom: none; /* 最后一行没有底部边框，因为整体表格已经有底部边框 */
          }
        }
      }
    }
  }
  .left {
    width: 240px;
    box-sizing: border-box;
    .title {
      margin-top: 20px;
      h2 {
        padding: 0 10px 12px 15px;
        font-size: 14px;
        color: #000;
      }
      ul > li {
        width: 100%;
        display: flex;
        padding: 10px 10px 12px 15px;
        align-items: center;
      }
      .item {
        cursor: pointer;
        font-size: 12px;
        box-sizing: border-box;
        &:hover {
          background-color: rgb(244, 244, 244);
        }
        .desc {
          padding-left: 10px;
          .update {
            padding-top: 5px;
            color: rgb(153, 153, 153);
          }
        }
      }
    }
  }
`;
