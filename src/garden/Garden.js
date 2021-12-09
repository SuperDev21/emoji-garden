import React from 'react'
import Button from '../button/Button';
import './garden.css'


class Garden extends React.Component{
    constructor(props){
        super(props);
        this.state = { garden: props.garden}
    }

    // fonction spécifique du cycle de vie du composant : permet de suivre les mises à jours des states en synchrone
    //(et si nécessaire déclencher des actions)
    componentDidUpdate() {
        console.log("numberOfEmojis", this.getNumberOfEmojis());
    }


    // fonction qui renvoie juste le nombre de cases occupées
    getNumberOfEmojis = () => {
        let numberOfEmojis = this.state.garden.filter(
            (element) => element.emoji !== ""
    );
        return numberOfEmojis.length;
    };



    // fonction qui ajoute une plante au garden (change la valeur du champ emoji de la première case libre)
    updateGarden = () =>{
        this.growPlant()
        let newGarden = [...this.state.garden] // yntaxe pour récupérer les références et non juste les valeurs 
        //condition pour évacuer les cas où numberEmojis > 25
        if(this.getNumberOfEmojis() < 25){
            newGarden.find((elem) =>elem.emoji === "").emoji  = "🌱"; // permet de (re)planter dans la première case libre
        }
        // on met à jour le state 
        this.setState({garden : newGarden})
        }

    // fonction qui fait évoluer les plantes toutes les 2sec
    growPlant = () =>{
        let newGarden = [...this.state.garden];
        newGarden.map((elem) => {
            if (elem.emoji === "🌱") return (elem.emoji = "🌿");
            else if (elem.emoji === "🌿") return (elem.emoji = "🌳");
            else return elem.emoji;
          });
          this.setState({ garden: newGarden });
          if (this.state.garden.length > 0) {
            setTimeout(() => {
              this.growPlant()
            }, 2000);
          }
    }

    // fonction qui libère une case au clic
    DeleteEntry = (elemid) =>  {
        let newGarden = [...this.state.garden] 
        newGarden[elemid].emoji = ""
        this.setState({garden: newGarden})

    }


    render(){
    return (
        <>
         <div className='btnContainerConposent'>
            <div className="gardenGrid">
                {this.state.garden.map((elem, index) =>{
                    return <div className="cell" key={index} onClick={() => this.DeleteEntry(elem.id)}>{elem.emoji}</div>
                })}
            </div> 
            <Button handelChange={this.updateGarden}/>
        </div> 
        </>
    )}
}

export default Garden;



