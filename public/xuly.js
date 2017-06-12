var KhoaPham = React.createClass({
  render: function ( ) {
      return(
        <div>
          <h2 className="mauxanh">TuanDz {this.props.ten}</h2>
          <p>{this.props.children}</p>
          <KhoaHoc />
        </div>
      );
  }
});
var KhoaHoc = React.createClass({
  render: function(){
    return(<h4>To day is 11.6</h4>)
  }
});

ReactDOM.render(
  <div>
      <KhoaPham ten="Tuanhv">Toi la Ha van tuan</KhoaPham>
      <KhoaPham  ten="PhiHH"/>
  </div>,
  document.getElementById('root')
);
