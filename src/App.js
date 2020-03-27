import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Button } from "antd"
import { DownloadOutlined } from '@ant-design/icons';

class App extends React.Component {
  // constructor(props){
  // super(props);
  // this.state = {
  //   value : 0,
  //   arr : ["a", "b", "c","d"],
  //   text: "",
  //   name: ""
  // }


  state = {
    value: 0,
    arr: ["a", "b", "c", "d"],
    text: "",
    name: ""
  }


  Click = e => {

    this.setState({ value: this.state.value + 1 })


  }

  Minus = () => {
    this.setState({ value: this.state.value - 1 })
  }

  reset = () => {
    this.setState({ value: 0 })
  }

  addList = (e) => {
    e.preventDefault()
    let array = [...this.state.arr, this.state.text]
    this.setState({ arr: array, text: "", name: this.state.text })

  }

  delete = idx => () => {

    let array = this.state.arr.filter((item, index) => index !== idx)
    this.setState({ arr: array })

  }
  editText = idx => () => {
    let newText = prompt("what is your new text")
    let array = this.state.arr.map((item, index) => index === idx ? newText : item)
    this.setState({ arr: array })
  }

  input = (e) => {
    e.preventDefault()
    this.setState({ text: e.target.value })

    console.log(this.state.text)
  }



  render() {
    return (
      <div className="App">

        <span>
          <Link to="/resume"> Resume page</Link>
          <Link to="/fackbook"> fackbook page</Link>
          <Link to="/"> Home </Link>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large">Download</Button>
        </span>

          <p>{this.state.value} </p>

          <p>
            <span class="imgWrap" data-testid="bookmark_icon_left_nav"><i class="img sp_G_lHbVsCJY-_1_5x sx_86c092" draggable="false"></i></span>
            <button onClick={this.Click}>Plus</button>
            <button onClick={this.Minus}> Minus</button>
            <button onClick={this.reset}> reset </button>

          </p>

          <p>
            <form>
              What is your name:
  <input type="text" onChange={this.input} value={this.state.text} />

              <button onClick={this.addList}> add list </button>

            </form>
          </p>

          <ul>

            {
              this.state.arr.map((item, index) => {

                return <li> {item}
                  <button onClick={this.delete(index)}> delete </button>
                  {/* <input type="text" style={{display:this.state.arr[index].display}}/> */}
                  <button onClick={this.editText(index)}> edit </button>
                </li>
              })
            }

          </ul>

          <p>
            your name : {this.state.name}
          </p>
      
      </div>
    );
  }

}

export default App;
