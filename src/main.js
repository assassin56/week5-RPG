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

  isDead(){
    if( this.health <= 0){return true} else {return false}
   }
   getDamage(dmg){
     this.health -= dmg;
   }
   dealDamage(){
     return this.weapon.damage
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
      this.damageOutput = 20;
    } else if( this.enemyType === 'chimera'){
      this.enemyHealth = 100;
      this.damageOutput = 25; 
    } else if( this.enemyType === 'minotaur'){
      this.enemyHealth = 150;
      this.damageOutput = 15; 
    } else if( this.enemyType === 'scylla') {
      this.enemyHealth = 110;
      this.damageOutput = 35;
    } 
  }
  isDead(){
   if( this.enemyHealth <= 0){return true} else {return false}
  }
  getDamage(dmg){
    this.enemyHealth -= dmg;
  }
 
}

