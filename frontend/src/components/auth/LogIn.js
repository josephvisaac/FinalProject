import React, { Component, Fragment } from 'react';
import actions from '../../services/index'

class LogIn extends Component {

    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
         actions.logIn(this.state).then(user => {
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
                
                {/* <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} />
                    <input name="password" type="password" onChange={this.handleChange} />
                    <input type="submit" value="Log In"/>
                </form> */}





            
            	<aside className="col-sm-4">


<div className="card">
<article className="card-body">
	<h4 className="card-title text-center mb-4 mt-1">Log in</h4>
	<hr/>
	{/* <p className="text-success text-center">Some message goes here</p> */}
	<form onSubmit={this.handleSubmit} >
	<div className="form-group">
	<div className="input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
		<input name="email" className="form-control" placeholder="Email or login" type="email" onChange={this.handleChange} />
        

	</div> 
	</div> 
	<div className="form-group">
	<div className="input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		 </div>
	    <input name="password" className="form-control" placeholder="******" type="password"  onChange={this.handleChange}/>
        

	</div> 
	</div> 
	<div className="form-group">
	<button type="submit" className="btn btn-primary btn-block" value="Sign Up" > Log in  </button>
    {/* <input type="submit" value="Sign Up"/> */}

	</div> 
	<p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
	</form>
</article>
</div> 

	</aside> 
















            </Fragment>
        );
    }
}

export default LogIn;