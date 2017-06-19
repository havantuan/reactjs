var list;
var Note = React.createClass({
  render(){
    return <div className="div-note">
              {this.props.children}
          </div>
  }
});
function addDiv(){
  ReactDOM.render(<Input />, document.getElementById('div-add'));
}
var List = React.createClass({

    getInitialState(){
      list = this;
      return {mang: []}
    },
    render(){
      return (
        <div className="div-list">
          <button onClick={addDiv}>Thêm</button>
         {
          this.state.mang.map(function (note, index){
            return <Note key={index}>{note}</Note>
          })
        }
        <div id="div-add"></div>
        </div>
      );
    }
});
var Input = React.createClass({
  send(){
      list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
      ReactDOM.unmountComponentAtNode(document.getElementById('div-add')) ;
  },
  render(){
    return <div>
      <input type="text" ref="txt" placeholder="Please press keyboard a few"/>
      <button onClick={this.send}>Gửi</button>
    </div>
  },
  componentDidMount(){
    var list = this;
    $.post("/getNotes", function(data) {
        list.setState({mang: data});
    });
  }

});
ReactDOM.render(<div>
    <List />
  </div>, document.getElementById('root'));
