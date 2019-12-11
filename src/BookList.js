import React, { Component } from 'react'
// import { jsonResponse } from './fakeData'

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                  {
                      "title": "A COLUMN OF FIRE"
                  },
                  {
                      "title": "A Dangerous Fortune"
                  },
                  {
                      "title": "Code to Zero"
                  },
                  {
                      "title": "EDGE OF ETERNITY"
                  },
                  {
                      "title": "EYE OF THE NEEDLE"
                  },
                  {
                      "title": "FALL OF GIANTS"
                  },
                  {
                      "title": "FALL OF GIANTS"
                  },
                  {
                      "title": "Lie Down With Lions"
                  },
                  {
                      "title": "On Wings of Eagles"
                  },
                  {
                      "title": "PILLARS OF THE EARTH"
                  }
              ],
              inputValue: ""
        };
    }

    onInputChange(e){
      let temp = this.state.results.slice(0);
      this.setState({
        inputValue: e.target.value,
        results: temp.push({"title": e.target.value})
      })
      console.log(this.state.results);
    }


    render() {
        return (
            <div className="bookListMain">
                <div className="header">
                <form>
                    <input onChange ={ (e) => this.onInputChange(e) }placeholder="Book" />
                    <button>
                        Add Book
                    </button>
                    <button> Get Top 10 Books by Ken Follet</button>
                </form>
                <ul>
                {this.state.results.map(items => (
                  <li key = {items.title}>{items.title}</li>
                ))}
                </ul>
                </div>
            </div>
        )
    }
}
export default BookList
