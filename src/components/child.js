import React from "react";


export default class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
  }

  // static getDerivedStateFromProps(props) {
  //   console.log("ChildGetDerivedStateFromProps");
  //   return null;
  // }

  componentDidMount() {
    console.log("Child Did Mount");
  }

  // shouldComponentUpdate(prevProps) {
  //   // console.log("ChildShouldComponentUpdate");
  //   if (this.props === prevProps) {
  //     return false
  //   };

  //   return true;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child didUpdate");
  }

  componentWillUnmount() {
    console.log("Child willUnmount");
  }

  render() {
    console.log("Child render");

    return (
      <div>
        CHILD: {this.props.counter}
      </div>
    );
  }
}
