import React, { Component } from 'react';
import { connect } from "react-redux";
import { Offline } from "react-detect-offline";

import userService from './services/usersServices.js';
import * as actions from './redux/actions/actions.js';
import SVGIcon from './components/SVGIcon.js';
import UserInfo from './components/UserInfo.js';
import ButtonIcon from './components/ButtonIcon.js';
import './stylesheets/style.css';
import './stylesheets/views/example.css';

class App extends Component {
  componentDidMount(){
    userService.getInitialUsers()
    .then(response => {
      response.data.results.forEach( user => {
        user.showing = 'profile';
      });
      this.props.createInitialUsers(response.data.results);
    }).catch(error => console.log(error));
  }

  handleNewRandomUser = () => {
    userService.getRandomUser()
    .then(response => {
      response.data.results.forEach( user => {
        user.showing = 'profile';
      });
      this.props.addRandomUser(response.data.results[0]);
    }).catch(error => console.log(error));
  }
  
  deleteContact = (index) => {
    const {users} = this.props;
    const newUsers = [...users]; 
    newUsers.splice(index,1);
    this.props.UpdateUsersAfterDelete(newUsers);
  }

  handleSortByName = () => {
    const {users} = this.props;
    const newUsers = [...users]; 
    newUsers.sort((a,b) => {
      if(a.name.first < b.name.first) { 
        return -1; 
      }
      if(a.name.first > b.name.first) { 
        return 1; 
      }
      return 0;
    })
    this.props.sortUsersByName(newUsers);
  }

  showInfo = (info, index) => {
    const {users} = this.props;
    const newUsers = [...users]; 
    const user = newUsers[index];
    if( info === 'profile'){
      user.showing = 'profile';
    } else if( info === 'email'){
      user.showing = 'email';
    } else if( info === 'calendar'){
      const newDate = user.dob.date.replace(/[T]/g, '-').split('-').slice(0,3).reverse().join('/');
      user.newDate = newDate;
      user.showing = 'calendar';
    } else if( info === 'pointer'){
      user.showing = 'pointer';
    } else if( info === 'phone'){
      user.showing = 'phone';
    } else if( info === 'lock'){
      user.showing = 'lock';
    }
    this.props.showInfoFromContact(newUsers);
  }
  


  render() {
    const { users } = this.props;
    return (
      <>
        <ButtonIcon className='add-button wrapper' name='add' color='#fff' width= {25} onClick={this.handleNewRandomUser}/>
        <main>
          <header>
            <div>
              <h1 data-testid='title'>Contacts</h1>
              <p>Your list of contacts</p>
            </div>
            <div>
              { users.length > 1 && (
                <button className='sort-button' onClick={this.handleSortByName}>Sort by name</button>
              )}
            </div>
          </header>
          <section data-testid='slider' className='slider'>
            {users.length > 0 ? ( users.map( (user, index) => {
              return(
                <article key={index}>
                  <div className='wrapper'>
                    <img src={user.picture.large} alt={`${user.name.first} thumbnail`}/>
                  </div>
                  <div className='wrapper-info'>
                    <UserInfo 
                      showing={user.showing}
                      firstName={user.name.first}
                      lastName={user.name.last}
                      email={user.email}
                      date={user.newDate}
                      location={user.location.city}
                      phone={user.cell}
                      username={user.login.username}
                    />
                    <div className='icons'>
                      { user.showing !== 'profile' ? (
                        <ButtonIcon className='icon-button' name='profile' color='#CCC' width= {18} onClick= {() => {this.showInfo('profile', index)}}/>
                        ) : (
                        <ButtonIcon className='icon-button' name='profile' color='#000' width= {18} />
                        )
                      }
                      { user.showing !== 'email' ? (
                        <ButtonIcon className='icon-button' name='email' color='#CCC' width= {18} onClick={() => {this.showInfo('email', index)}} />
                        ) : (
                        <ButtonIcon className='icon-button' name='email' color='#000' width= {18} />
                        )
                      }
                      { user.showing !== 'calendar' ? (
                        <ButtonIcon className='icon-button' name='calendar' color='#CCC' width= {18} onClick={() => {this.showInfo('calendar', index)}} />
                        ) : (
                        <ButtonIcon className='icon-button' name='calendar' color='#000' width= {16} />
                        )
                      }
                      { user.showing !== 'pointer' ? (
                        <ButtonIcon className='icon-button' name='pointer' color='#CCC' width= {18} onClick={() => {this.showInfo('pointer', index)}} />
                        ) : (
                        <ButtonIcon className='icon-button' name='pointer' color='#000' width= {18} />
                        )
                      }
                      { user.showing !== 'phone' ? (
                        <ButtonIcon className='icon-button' name='phone' color='#CCC' width= {18} onClick={() => {this.showInfo('phone', index)}} />
                        ) : (
                        <ButtonIcon className='icon-button' name='phone' color='#000' width= {18} />
                        )
                      }
                      { user.showing !== 'lock' ? (
                        <ButtonIcon className='icon-button' name='lock' color='#CCC' width= {18} onClick={() => {this.showInfo('lock', index)}} />
                        ) : (
                        <ButtonIcon className='icon-button' name='lock' color='#000' width= {18} />
                        )
                      }
                    </div>
                  </div>
                  <ButtonIcon className='delete' name='rubbish' color='#666' width= {25} onClick={() => {this.deleteContact(index)}}/>
                </article>
              )
            })
            ) : (
              <div className='first-message wrapper'>
                <figure>
                  <p>Your list of contacts is empty.</p>
                  <p>Please, press on the "plus" button to add new contacts</p>
                </figure>
              </div>
            )}
          </section>
          <Offline>
            <section className='connection'>
              <figure>
                <SVGIcon name='warning' width={35} fill='#a51010' />
                <h4>Your connection to internet has been lost.</h4>
                <h4>Please, check it out!</h4>
              </figure>
            </section>            
          </Offline>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createInitialUsers: (users) => dispatch(actions.createInitialUsers(users)),
    addRandomUser: (users) => dispatch(actions.addRandomUser(users)),
    UpdateUsersAfterDelete: (users) => dispatch(actions.UpdateUsersAfterDelete(users)),
    sortUsersByName: (users) => dispatch(actions.sortUsersByName(users)),
    showInfoFromContact: (users) => dispatch(actions.showInfoFromContact(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

