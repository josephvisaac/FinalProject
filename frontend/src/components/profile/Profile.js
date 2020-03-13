import React, { Component, useState, useEffect } from 'react';
import actions from '../../services/index';



//  const  theologianLogger = (object) => {//to post it to the profile
//     // let user = await actions.addFavTheo(object);
//     // props.setUser(user.data);
    
//  actions.addFavTheo(object);
//  props.setUser(user.data);

  
    

//     // let user = await actions.addFavTheo(object);
//     // object.setUser(user);

//     // window.location.reload(true);
// }







const Profile = (props) => {
    if (!props.user.email) {
        props.history.push('/log-in')
    }

    const  theologianLogger = async (object) => {//to post it to the profile
        // let user = await actions.addFavTheo(object);
        // props.setUser(user.data);
        
    //  actions.addFavTheo(object);
     let response =  await actions.addFavTheo(object);
     console.log(response)
     props.setUser(response.data);

    //  props.setUser(user.data);
    
      
        
    
        // let user = await actions.addFavTheo(object);
        // object.setUser(user);
    
        // window.location.reload(true);
    }
    


    console.log(props.user.theologiansPicked)
    // const [state, setState] = useState({ theo: [], theologiansFav: [] })//all theologians;

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // actions.allTheologians().then(theologian => {
    //         // console.log('the', theologian)
    //         // let copyState = { ...state }
    //         // copyState['theo'] = [...theologian.data]
    //         // copyState['theologiansFav'] = props.user.theologiansFav
    //         // console.log(props)
    //         // console.log('length:', props.user.theologiansFav.length)
    //         // setState(copyState)
    //     })
    // }, [])


// a =false

    // for(let i = 0; i < state.theo.length; i++){
    //     if(props.user.theologiansFav[i] ==){

    //     }
    // }


    if (props.user.email)
        return (
            <React.Fragment>
                <div>
                    {props.user.theologiansPicked.map(theologian => {
                        // for (let i = 0; i < state.theologiansFav.length; i++) {
                        //     if (theologian._id == props.user.theologiansFav[i]) {
                        let works = <> <h4 className='title'> Works: </h4> {theologian.books} </>
                        return (<div className='theologians' >
                            <p className='description'>
                                <img className='pics' src={theologian.img} />
                                <div className='margins'>
                                    <div className='wrapper-title'>
                                        <h3 className='title inline'>{theologian.tname}</h3>
                                        {props.user.email && (

                                            
                                                <button
                                                    class="add-button inline"
                                                    // props = {props.user}
                                                    onClick={() => theologianLogger(theologian)}
                                                >remove</button>
                                               
                                               
                                               )}
                                    </div>

                                    <h4 className='title'>{theologian.years}</h4>
                                    {theologian.description}
                                    {works}
                                </div>
                            </p>
                        </div>



                        )
                        //     }
                        // }
                    }
                    )
                    }

                </div>
            </React.Fragment>
        )
    else return (
        null
    )
}

export default Profile;
