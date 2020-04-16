// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import $ from "jquery";

export class Player{
  constructor(player){
    this.player = player;
    this.health = 100;
    this.weapon = {
    name:"Sword",
    damage: 20
    }
  }
}
// human, chimeara, minotaur 
export class Enemy {
  constructor(type) {
    this.enemyType = type;
    this.enemyHealth = 0;
    this.damageOutout = 0;
  } 
  populateEnemy(){
    if(this.enemyType === 'human'){
      this.enemyHealth = 50;
      this.damageOutout = 20;
    }else if( this.enemyType === 'chimera'){
      this.enemyHealth = 100;
      this.damageOutout = 25; 
    }else if( this.enemyType === 'minotaur'){
      this.enemyHealth = 150;
      this.damageOutout = 15; 
    }
  }
  
}


