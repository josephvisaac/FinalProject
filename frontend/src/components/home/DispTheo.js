import React, { Component } from 'react'
import actions from '../../services/index'
import './theologians.css'

export class DispTheo extends Component {
    state = {
        allTheologians: []
    }
    componentDidMount(){
        actions.allTheologians().then(theologian => {
            
            console.log(theologian)
            this.setState({allTheologians: theologian.data})
            })
        
    }
    idLogger(id){
        console.log(id)
        

    }

    render() {
        
        // <h4 className='title'> Works: </h4> {theologian.books}
        
        return (
            <div>
          {this.state.allTheologians.map(theologian => {
            
              let works = <> <h4 className='title'> Works: </h4> {theologian.books} </> 
              return (<div className='theologians' >
                     <p className = 'description'>
                    <img className='pics' src={theologian.img} /> 
                        <div className='margins'>
                     <div className = 'wrapper-title'>   
                     <h3 className='title inline'>{theologian.name}</h3> 
                     <button props={theologian._id} class="add-button inline" onClick={ () => this.idLogger(theologian._id)} >add</button>  </div>
                        
                        <h4 className='title'>{theologian.years}</h4> 
                         {theologian.description}
                            {works}
                       
                        </div>
                  
                  
                  </p>
                   
              

              
              
              
              
              
              
              </div>
                
                
                
                )
          } )}
            </div>
        )
    }
}

export default DispTheo



