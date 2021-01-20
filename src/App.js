import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop_page.component';
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

//firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// let's say
const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
)

class App extends React.Component {
  unsubscribeFromAuth = null; //this method will for unsubscribe from Auth

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        console.log(userRef);
        
        // storing data into app from database
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
          // now updated with the redux action setCurrentUser
          // previously it was set with the component class state, this.state with constructor
          // but now we removed constructor
        });
      }else{
        setCurrentUser(user);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => 
            this.props.currentUser ? 
            (<Redirect to='/' />) :
            (<SignInAndSignUp />) 
          } />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// this is the second argument and first should null here
// where the first one should be the mapStateToProps which will map to the props( one in App.js for redirecting and another one is
// in header.component)
// and the second one should be the mapDispatchProps which will dispatch the props
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchProps)(App);

// first argument of connect() should be null here
