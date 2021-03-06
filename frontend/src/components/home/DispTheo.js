import React, { Component } from 'react'
import actions from '../../services/index'
import './theologians.css'
export class DispTheo extends Component {
    state = {
        allTheologians: [],
        search: ''
    }
    componentDidMount() {
        actions.allTheologians().then(theologian => {

            console.log(theologian)
            this.setState({ allTheologians: theologian.data })
        })

    }



    updateSearch(event) {
        console.log(event.target.value.toLowerCase())
        this.setState({ search: event.target.value })
    }




// fix me
    async theologianLogger(object) {//to post it to the profile
        let user = await actions.addFavTheo(object);
        this.props.setUser(user.data);
    }

    render() {
        let filteredList = [...this.state.allTheologians].filter(
            typings => typings.tname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

        )

        // <h4 className='title'> Works: </h4> {theologian.books}
        // console.log(this.props.user.theologiansPicked, this.state.allTheologians)
        return (
            <div >
                <input placeholder='name of theologian'
                    id='inputsearch' type="text" name="theologian"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
                <div id='list-theo'>
                    {filteredList.map(theologian => {
                        let names = theologian.tname
                         names = names.substring(0,21)
                        let works = <> <h4 className='title'> Works: </h4> {theologian.books} </>
                        return (<div className='theologians' >
                            <p className='description'>
                                <img className='pics' src={theologian.img} />
                                <div className='margins'>
                                    <div className='wrapper-title'>
                                        <h3 className='title inline'>{names}</h3>
                                        {this.props.user.email && (

                                            this.props.user.theologiansPicked.filter(theo => theologian._id === theo._id)[0] ?
                                                <button
                                                    class="add-button inline"
                                                    onClick={() => this.theologianLogger(theologian)}
                                                >remove</button>
                                                :
                                                <button
                                                    class="add-button inline"
                                                    onClick={() => this.theologianLogger(theologian)}
                                                >add</button>)}



                                    </div>

                                    <h4 className='title'>{theologian.years}</h4>
                                    {/* {theologian.description} */}
                                    {/* {works} */}

                                </div>
                            </p>
                        </div>
                        )
                    })} </div>
            </div>
        )
    }
}

export default DispTheo



