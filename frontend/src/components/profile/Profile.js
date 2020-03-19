import React, { Component, useState, useEffect } from 'react';
import actions from '../../services/index';
import '../home/theologians.css'


export class Profile extends React.Component {
    state = {
        // theologians: [...this.props.user.theologiansPicked],
        search: '',
        // allTheologians: [...this.props.user.theologiansPicked]
    }


    async theologianLogger(object) {//to post it to the profile
        let user = await actions.addFavTheo(object);
        this.props.setUser(user.data);
    }


    updateList = (event) => {

        console.log(event.target.value.toLowerCase())
        this.setState({ search: event.target.value })
    }




    render() {
        // console.log(this.props.user.theologiansPicked)


        if (!this.props.user.email) {
            this.props.history.push('/log-in')

        }
        if (this.props.user.email) {
            let filteredList = [...this.props.user.theologiansPicked].filter(
                typings => typings.tname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

            )

            return (
                <React.Fragment>
                    <div>
                        <input placeholder='name of theologian'
                            id='inputsearch' type="text" name="theologian"
                            value={this.state.search}
                            onChange={this.updateList.bind(this)}
                        />
                        {/* props.user.theologiansPicked */}
                        <div id='list-theo'>

                            {filteredList.map(theologian => {

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

        }


        else return (
            null
        )
    }
}

export default Profile;
