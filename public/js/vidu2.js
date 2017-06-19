var Note = React.createClass({
    render(){
      return(
        <div>
          <img src={this.props.src} height="150" width="200"/>
          <p>{this.props.children}</p>
        </div>
      )
    }
});
var List = React.createClass({
  add(){
    this.state.mang.push("Liver","Tot");
    this.setState(this.state);
  },
  getInitialState(){
    return {mang: [
      {srcHinh:"images/1.jpg",noidung: "hinh1"},
      {srcHinh:"images/2.jpg",noidung: "hinh2"},
      {srcHinh:"images/3.jpg",noidung: "hinh3"},
      {srcHinh:"images/4.jpg",noidung: "hinh4"}
    ]}
  },
  render(){
    return(
      <div>
      <button onClick={this.add}>Thêm</button>
        {
          this.state.mang.map(function(note, index) {
            return <Note key={index} src={note.srcHinh}>{note.noidung}</Note>
          })
        }
      </div>
    )
  }
});
ReactDOM.render(
  <div>
      <List />
  </div>
  , document.getElementById('root'));
