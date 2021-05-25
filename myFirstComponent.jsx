import React from 'react'; // import potrzebnych bibliotek

class MyFirstComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      nazwa: "Bartek" 
    }
  }

  myFirstFunction() { 
    console.log("Hello");
  }

  render() {
    return (
      <div>
        
        <button onClick={() => this.myFirstFunction()}>Click me!</button> {}
        Hello {this.state.nazwa} {}
      </div>
    );
  }
}

export default MyFirstComponent;
