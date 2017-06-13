function getName(name) {
  alert(name);
}
var KhoaPham = React.createClass({
  a(){
    getName(this.props.ten);
  },
  addStudent(){
    this.state.tongHocvien = parseInt(this.state.tongHocvien) +1;
    this.setState(this.state);
  },
  layThongTin: function () {
    alert(this.props.children);
  },
  getInitialState(){
    return {tongHocvien: this.props.tongHocvien};
  },
  handleClick: function(){
       this.setState({
           active: !this.state.active
       });
   },
  render: function () {
      var buttonSwitch = this.state.active ? "On" : "Off";
      return(
        <div>
          <h2 className="mauxanh">{this.props.ten} - {this.props.namsinh}</h2>
          <div>Số học viên: {this.state.tongHocvien}</div>
          <div>aaa{this.state.sv}</div>
          <p>{this.props.children}</p>
           {/* <button onClick={this.layThongTin}>Thong tin</button>
           <button onClick={this.a}>Thong tin</button>  */}
          {/*<button onClick={()=>{getName(this.props.ten)}}>Thông tin</button>*/}
          <button onClick={()=>{var str = this.props.ten + '---' + this.props.namsinh; getName(str)}}>Thông tin</button>
          <button onClick={this.addStudent}>Thêm sinh viên</button>
          <input type="submit" onClick={this.handleClick} value="Bấm"/>
          <p>{buttonSwitch}</p>
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
var InputTag = React.createClass({
  show(){
    var text = this.refs.sl.value;
    alert(text);
  },
  render(){
    return (
      <div>
        <select ref="sl">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="text" ref="txt" />
        <button onClick={this.show}>Hienthi</button>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
      <InputTag />
      <KhoaPham ten="Tuanhv" namsinh="18.09.1993" tongHocvien="10">Toi la Ha van tuan</KhoaPham>
      <KhoaPham  ten="PhiHH" namsinh="02.01.1993" tongHocvien="20">Tôi là Hà văn Phi</KhoaPham>
  </div>,
  document.getElementById('root')
);
{/*Test ví dụ*/}

var Form = React.createClass({
    focusOnField: function(){
       ReactDOM.findDOMNode(this.refs.textField).focus();
   },
    render: function(){
        return (
            <div>
                <input type="submit" onClick={this.props.onUserClick} />
                <h3>You have pressed the button {this.props.counter} times!</h3>
                <input type="text"  ref="textField" />
                <input type="submit" value="Hãy án vào đây để đc focus" onClick={this.focusOnField}/>
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function(){
        return {
            counter: 0
        }
    },
    onUserClick: function(){
        var newCount = this.state.counter += 1;
        this.setState({
            counter: newCount
        });
    },
    render: function(){
        const numbers = ["a", "b", "c", "d", "e"];
        const listItems = numbers.map((number) =>
        <li  key={number.toString()}>{number}</li>
        );
        return (
            <div>
                <h1> Welcome to the counter app!</h1>
                <ul>{listItems}</ul>
                <Form counter={this.state.counter} onUserClick={this.onUserClick} />
            </div>
        );
    }
});

ReactDOM.render(<App />,  document.getElementById("app"));
