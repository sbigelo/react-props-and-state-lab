import React from 'react'

class Pet extends React.Component {
  


  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  
  adoptButton = (isAdopted, id) => {
    if(isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    }
    else {
      return <button onClick={this.handleClick} className="ui primary button">Adopt pet</button>
    }
  }
  
  render() {
    const {name, gender, type, age, weight, isAdopted, id} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">Type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.adoptButton(isAdopted, id)}
        </div>
      </div>
    )
  }
}

export default Pet
