import React, { PureComponent } from 'react';

interface IProps {
}

interface IStates {
}

export default class MyComponent extends PureComponent<IProps, IStates> {
   public render(): React.ReactNode {
      return (
         <div>
            My Component
        </div>
      );
   }
}
