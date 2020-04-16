import {Enemy, Player} from './../src/main.js'

// describe('Player Methods',()=>{

// })
describe('Enemy Methods',()=>{
  test("test that Enemy pupulate method gives right info for human",()=>{
    let humanEnemy = new Enemy('human');
    humanEnemy.populateEnemy();
    expect(humanEnemy.enemyType).toEqual('human')
    expect(humanEnemy.enemyHealth ).toEqual(50)
    expect(humanEnemy.damageOutout ).toEqual(20)
  })
})

