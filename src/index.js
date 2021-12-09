import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Garden from './garden/Garden';
// import Button from './button/Button';
import './button/button.css'

class App extends React.Component{
    constructor (props){
        super(props);
        this.state = { farm: []};
        this.gardenSize = 25
    }


    // fonction qui renvoit un tableau de 25 éléments
     generateGarden(gardenSize){
        let tab = []
        for(let i = 0; i< gardenSize; i++){
            tab.push({id : i, emoji: ""})
            // console.log(tab)
        }
        return tab
    }

    // fonction spécifique du cycle de vie du composant : indique ce qu'il se passe au 1er montage du composant (montage = render dans le DOM)
    componentDidMount(){
        this.AddGarden(this.gardenSize)
    }
 


    AddGarden = (size) =>{
        let newFarm = [...this.state.farm]
        newFarm.push(this.generateGarden(size))
        this.setState({farm: newFarm})
    }


    render(){
        return(
        <>
            <h1 className="titre">My Emojis Garden</h1>
            <div className="contener"> 
                {this.state.farm.map((elem) =>{
                    return  <Garden garden={elem} /> 
                })}  
            </div>   
            <div className="btnContener">
                <button className='btnAdd' onClick={() => this.AddGarden(this.gardenSize)} >Add Garden</button>
            </div>
        </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
