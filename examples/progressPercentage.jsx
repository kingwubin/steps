import '../assets/index.less';
import '../assets/iconfont.less';
import React from 'react';
import Steps, { Step } from '../src';

const description =
  '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊';

export default () => {
  function test(a) {
    console.log(444444444444, a, 999999999);
  }
  return (
    <Steps progressPercentage={() => <span>a</span>} size="small" current={1}>
      <Step title="已完成" description={description} onClick={test} />
      <Step title="进行中" description={description} />
      <Step title="待运行" description={description} />
      <Step title="待运行" description={description} />
      <Step title="待运行" description={description} />
    </Steps>
  );
};
