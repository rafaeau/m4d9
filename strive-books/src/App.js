import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import fantasyBooks from './fantasyBooks.json'
import BookList from './components/BookList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Registration from './components/Registration'
import MyNavbar from './components/MyNavbar'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'



function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar/>
        <header className="App-header">
          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
          <Route path="/" exact render={() => <BookList books={fantasyBooks} />} />
          <Route path="/register" exact component={Registration} />
        </header>
      </div>
    </Router>
  )
}

export default App
