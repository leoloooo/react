const theme = {
  color: {
    primaryColor: '#C20C0C',
    green: '#31c27c',
    red: '#e94f4f',
    blue: '#108ee9'
  },
  size: {
    arrowOffset: 10, // 自定义箭头边距
    arrowSize: 40 // 自定义箭头大小
  },
  mixin: {
    wrapV1: `
      width: 1100px;
      margin: 0 auto;`,
    textNoWrap: `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    `
  }
};

export default theme;
