import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop_page.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';

//firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// let's say
const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null 
    }
  }

  unsubscribeFromAuth = null; //this method will for unsubscribe from Auth

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        console.log(userRef);
        
        // storing data into app from database
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          });
        });
      }else{
        this.setState({
          currentUser: null
        }, () => {
          console.log(this.state);
        });
      }

      
      // this.setState({ currentUser: user });
      // console.log(this.state.currentUser);
    })
  }

  // this unmount method will be called when component will unmount from React DOM 
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
