import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile'
import actions from './services/index'
import './index.css'

import { DispTheo } from './components/home/DispTheo';
class App extends Component {
  
  state = { }
  
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    this.setState({...user.data})
    console.log('coolest ')

  }

  setUser = (user) => this.setState(user)
  
  logOut = async () => {
    let res = await actions.logOut()
    this.setUser({email:null, createdAt: null, updatedAt: null, _id: null }) //FIX 
  }

  render(){

    return (
    <BrowserRouter>
     

      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto">

        
        <NavLink  class="nav-item active nav-link" to="/">Home</NavLink>
        <NavLink  class="nav-item active nav-link" to="/DispTheo"> Theologians</NavLink>

        </ul>
  
        {this.state.email ? 
          <Fragment>
            <span className = 'white'>Welcome  {this.state.email}!</span>
          <NavLink onClick={this.logOut} to='/'>Log Out</NavLink>
           <NavLink to="/profile">Profile</NavLink>
           </Fragment>
           :
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

           <ul class="navbar-nav mr-auto ">

           <Fragment>
            <NavLink class="nav-item active nav-link " to="/sign-up">Register</NavLink>
            <NavLink class="nav-item active nav-link" to="/log-in"> Log In</NavLink>
           </Fragment>
            </ul>
          </div>

          }
        
      </nav>






        {/* <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="index.html" class="navbar-brand">Home</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button> */}

        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <NavLink class="nav-item active nav-link" to="/sign-up">Sign Up |</NavLink>
           <NavLink class="nav-item active nav-link" to="/log-in">Log In |</NavLink> */}
                {/* <a href="#" class="nav-item active nav-link">Theologians</a> */}
                {/* <a href="#" class="nav-item active nav-link">Register</a> */}
                {/* <a href="#" class="nav item active nav-link">Sign in</a> */}
                {/* <a href="#" class="nav item active nav-link">Log out</a> */}
                {/* <a href="#" class="nav item active nav-link">Profile</a> */}





                {/* <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nossos serviços</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a href="#" class="dropdown-item">Divisão Militar</a>
                        <a href="#" class="dropdown-item">Divisão Corporativa</a>
                        <a href="#" class="dropdown-item">Aplicações para a área de saúde</a>
                    </div>
                </li> */}
            {/* </ul> */}

            
        {/* </div> */}
    {/* </nav> */}





















      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/sign-up" render={(props)=><SignUp {...props} setUser={this.setUser} />} />
        <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={this.setUser}/>} />
        <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state}/>} />
      
        <Route exact path="/DispTheo" render={(props) => <DispTheo {...props} user={this.state}/>} />
        
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
  }
}
export default App;









// <nav class="navbar navbar-expand navbar-dark bg-dark">
// <a href="index.html" class="navbar-brand">Home</a>
// <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
//     <span class="navbar-toggler-icon"></span>
// </button>

// <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//         <a href="#" class="nav-item active nav-link">Quem somos</a>
//         <a href="#" class="nav-item active nav-link">Nossa história</a>
//         <a href="#" class="nav item active nav-link">Localidades</a>

//         <li class="nav-item dropdown">
//             <a href="#" class="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nossos serviços</a>
//             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <a href="#" class="dropdown-item">Divisão Militar</a>
//                 <a href="#" class="dropdown-item">Divisão Corporativa</a>
//                 <a href="#" class="dropdown-item">Aplicações para a área de saúde</a>
//             </div>
//         </li>
//     </ul>

//     <form action="#" method="post" class="form-inline my-2 mylg-0">
//         <input type="search" name="buscar" id="buscar" class="form-control mr-sm-2" placeholder="Buscar em todo o site" aria-label="Buscar"/>
//         <button class="btn btn-outline-success" type="submit">Pesquisar</button>
//     </form>
// </div>
// </nav>