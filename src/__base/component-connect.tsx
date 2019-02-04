import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

interface IProps {
}

class MyComponent extends PureComponent<IProps, {}> {
   public render(): React.ReactNode {
      return (
         <div> My Component </div>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
   };
};

const mapDispatchToProps = (dispatch: any) => {
   return bindActionCreators({
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);