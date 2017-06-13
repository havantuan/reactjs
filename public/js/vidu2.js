var Image = React.createClass(
  {
    getInitialState(){
      return {hinh: 1}
    },
    render(){
      return (
        <img src={"images/"+this.state.hinh+".jpg"} height="150" width="200"/>
      )
    }
  }
);
ReactDOM.render(<Image />, document.getElementById("root"));
