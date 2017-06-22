var list;
var Note = React.createClass({
  save(){
    var note = this;
    $.post("/update", {idSua: this.props.id, noiDung:this.refs.txt.value}, function(data){
      list.setState({mang: data});
      note.setState({onEdit: false});
    });
  },
  cancel(){
    this.setState({onEdit: false});
  },
  delete(){
    $.post("/delete", {idXoa: this.props.id}, function(data){
      list.setState({mang: data});
    });
  },
  edit(){
    this.setState({onEdit: true});
  },
  getInitialState(){
    return {onEdit: false}
  },
  render(){
      if(this.state.onEdit){
        return (<div className="div-note">
                  <input defaultValue={this.props.children} ref="txt"/>
                  <button onClick={this.save}>Lưu</button>
                  <button onClick={this.cancel}>Hủy</button>
              </div>);
      }else {
        return (<div className="div-note">
                  <p>{this.props.children}</p>
                  <button onClick={this.delete}>Xóa</button>
                  <button onClick={this.edit}>Sửa</button>
              </div>);
      }

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
            return <Note key={index} id={index}>{note}</Note>
          })
        }
        <div id="div-add"></div>
        </div>
      );
    }
});
var Input = React.createClass({
  send(){
      $.post("/add", {note: this.refs.txt.value}, function (data){
          list.setState({mang: data});
      });
      ReactDOM.unmountComponentAtNode(document.getElementById('div-add')) ;
  },
  render(){
    return <div>
      <input type="text" ref="txt" placeholder="Please press keyboard a few"/>
      <button onClick={this.send}>Gửi</button>
    </div>
  },
  componentDidMount(){
    var that = this;
    console.log(list);
    $.post("/getNotes", function(data) {
        that.setState({mang: data});
    });
  }

});
ReactDOM.render(<div>
    <List />
  </div>, document.getElementById('root'));
