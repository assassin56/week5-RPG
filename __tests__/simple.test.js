import {Enemy, Player} from './../src/main.js'

describe('Player Methods',()=>{
  test('check if enemy is dead', ()=>{
  let player = new Player('Eric')
  player.health = 0 ;
  expect(player.isDead()).toBeTruthy()
  })
  test('check if enemy is Alive', ()=>{
    let player = new Player('Eric')
  expect(player.isDead()).toBeFalsy()
  })
  test('subtract damage from enemy', ()=>{
    let player = new Player('Eric')
    player.getDamage(5);
  expect(player.health).toBe(95)
  })
  test('Deal Damage', ()=>{
    let player = new Player('Eric')
    
  expect(player.dealDamage()).toBe(20)
  })

})

describe('Enemy Methods',()=>{
  test("test that Enemy pupulate method gives right info for human",()=>{
    let humanEnemy = new Enemy('human');
    humanEnemy.populateEnemy();
    expect(humanEnemy.enemyType).toEqual('human')
    expect(humanEnemy.enemyHealth ).toEqual(50)
    expect(humanEnemy.damageOutout ).toEqual(20)
  })
    test("test that Enemy pupulate method gives right info for chimera",()=>{
      let chimeraEnemy = new Enemy('chimera');
      chimeraEnemy.populateEnemy();
      expect(chimeraEnemy.enemyType).toEqual('chimera')
      expect(chimeraEnemy.enemyHealth ).toEqual(100)
      expect(chimeraEnemy.damageOutout ).toEqual(25)
    })
    test("test that Enemy pupulate method gives right info for minotaur",()=>{
      let minotaurEnemy = new Enemy('minotaur');
      minotaurEnemy.populateEnemy();
      expect(minotaurEnemy.enemyType).toEqual('minotaur')
      expect(minotaurEnemy.enemyHealth ).toEqual(150)
      expect(minotaurEnemy.damageOutout ).toEqual(15)
    })
    test('check if enemy is dead', ()=>{
      let humanEnemy = new Enemy('human');
      humanEnemy.populateEnemy();
      humanEnemy.enemyHealth = 0;
    expect(humanEnemy.isDead()).toBeTruthy()
    })
    test('check if enemy is Alive', ()=>{
      let humanEnemy = new Enemy('human');
      humanEnemy.populateEnemy();
    expect(humanEnemy.isDead()).toBeFalsy()
    })
    test('subtract damage from enemy', ()=>{
      let humanEnemy = new Enemy('human');
      humanEnemy.populateEnemy();
      humanEnemy.getDamage(5);
    expect(humanEnemy.enemyHealth).toBe(45)
    })
})

