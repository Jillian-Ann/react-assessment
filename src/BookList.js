import React, { Component } from 'react'
// import { jsonResponse } from './fakeData'

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
              inputValue: ""
        };
    }

    onInputChange(e){
      this.setState({
        inputValue: e.target.value,
      })
    }

    addBookTitle(){
      let results = this.state.results
      results.push({"title": this.state.inputValue})

      this.setState({
        results,
        inputValue: ""
      })
    };

    listItems() {
    let items = this.state.results;
    return (
      <ul>
        {
          items.map((val, index) => {
            return (
              <li key={index}>
                { val.title }
              </li>
            );
          })
        }
      </ul>
    );
  }

  componentWillMount(){
    this.setState({
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
  })
}


    render() {
        return (
            <div className="bookListMain">
                <div className="header">

                <form>
                    <input onChange ={ (e) => this.onInputChange(e) }placeholder="Book" />
                    <button onClick = {() => this.addBookTitle() }>
                        Add Book
                    </button>
                    <button> Get Top 10 Books by Ken Follet</button>
                </form>

                { this.listItems() }

                </div>
            </div>
        )
    }
}
export default BookList
