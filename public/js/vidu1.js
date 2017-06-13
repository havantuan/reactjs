var Com = React.createClass(
    {
      add(){
        this.setState({num: this.state.num+1});
      },
      getInitialState(){
        return {num: 0}
      },
    render: function(){
      return (
        <button onClick={this.add}>Hello {this.state.num}</button>
        );
      }
    }
);
var Album = React.createClass(
  {
    pre(){
      this.setState({hinh: this.state.hinh == 1?1 : this.state.hinh-1})
    },
    next(){
      this.setState({hinh: this.state.hinh == 7 ? this.state.hinh = 7 : this.state.hinh+1})
    },
    getInitialState(){
      return {
        hinh: 1
      };
    },
    render(){
      return (
        <div className="div-album">
          <img src={"images/"+this.state.hinh+".jpg"} height="150" width="200"/>
          <hr />
          <button onClick={this.next}>Next</button>
          <button onClick={this.pre}>Previous</button>
        </div>
      );
    }
  }
);
ReactDOM.render(
    <Album />, document.getElementById('root')
);
