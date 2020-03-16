import React, { Component, useState, useEffect } from 'react';
import actions from '../../services/index';
import '../home/theologians.css'



//  const  theologianLogger = (object) => {//to post it to the profile
//     // let user = await actions.addFavTheo(object);
//     // props.setUser(user.data);

//  actions.addFavTheo(object);
//  props.setUser(user.data);



//     // let user = await actions.addFavTheo(object);
//     // object.setUser(user);

//     // window.location.reload(true);
// }







class Profile extends React.Component {
    state = {
        theologians: [...this.props.user.theologiansPicked],
        search: '',
        filteredList: [...this.props.user.theologiansPicked]
    }


    theologianLogger = async (object) => {

        let response = await actions.addFavTheo(object);
        console.log(response)
        this.props.setUser(response.data);


    }


    updateList = (event) => {
        let search = event.target.value
        let filteredList = [...this.props.user.theologiansPicked].filter(
            typings => typings.tname.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
        this.setState({ filteredList })
    }








    render() {

        if (!this.props.user.email) {
            this.props.history.push('/log-in')
        }
        if (this.props.user.email)





            return (
                <React.Fragment>
                    <div>
                        <input placeholder='name of theologian'
                            id='inputsearch' type="text" name="theologian"

                            onChange={this.updateList}
                        />
                        {/* props.user.theologiansPicked */}
                <div id='list-theo'>

                        {this.state.filteredList.map(theologian => {

                            let works = <> <h4 className='title'> Works: </h4> {theologian.books} </>
                            return (<div className='theologians' >
                                <p className='description'>

                                    <img className='pics' src={theologian.img} />
                                    <div className='margins'>
                                        <div className='wrapper-title'>
                                            <h3 className='title inline'>{theologian.tname}</h3>
                                            {this.props.user.email && (


                                                <button
                                                    class="add-button inline"
                                                    onClick={() => this.theologianLogger(theologian)}
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

                    </div>
                </React.Fragment>
            )
        else return (
            null
        )
    }
}

export default Profile;
