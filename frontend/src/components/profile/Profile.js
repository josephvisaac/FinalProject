import React, { Component, useState, useEffect } from 'react';
import actions from '../../services/index';
import '../home/theologians.css'


export class Profile extends React.Component {
    state = {
        showMe: false,
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

    showDescription = (e, list, func) => {

        this.setState({ showMe: !this.state.showMe })
        console.log(e)
        console.log(list)
        let chosenDescription = list.filter(name => name._id == e)[0].description
        console.log(chosenDescription)


    }


    render() {





        if (!this.props.user.email) {
            this.props.history.push('/log-in')

        }
        if (this.props.user.email) {
            let filteredList = [...this.props.user.theologiansPicked].filter(
                typings => typings.tname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

            )

            return (
                <React.Fragment className = 'background-whole'>
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
                                return (<div key={theologian._id} className='theologians pro-height' >
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

                                            {/* <button onClick= {() => this.showDescription(theologian._id, filteredList)} >show/Hide</button> */}
                                            <div class="dropdown">
                                                <span>Description</span>
                                                <div class="dropdown-content">
                                                    <p>{theologian.description}</p>
                                                </div>
                                            </div>
                                            <br />
                                            
                                            <div class="dropdown">
                                                <span>works</span>
                                                <div class="dropdown-content">
                                                    <ul>
                                                        {theologian.books.map(book => {
                                                            return <li className = 'booklist'>{book}</li>
                                                        })}
                                    
                                                    </ul>
                                                </div>
                                            </div>



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
