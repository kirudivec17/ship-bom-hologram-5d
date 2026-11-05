const { cuboid, cylinder } = require('@jscad/modeling').primitives
const { union } = require('@jscad/modeling').booleans

function main() {
  // Hull - lamba dabba
  let hull = cuboid({size: [120, 20, 10], center: [0, 0, 5]})
  
  // Deck
  let deck = cuboid({size: [100, 18, 2], center: [0, 0, 11]})
  
  // Cabin / Bridge
  let cabin = cuboid({size: [20, 16, 10], center: [30, 0, 17]})
  
  // Chimney - BOM wala
  let chimney = cylinder({radius: 4, height: 15, segments: 32, center: [-30, 0, 18]})
  
  // Mast
  let mast = cylinder({radius: 1.5, height: 40, segments: 16, center: [0, 0, 30]})

  return union(hull, deck, cabin, chimney, mast)
}

module.exports = { main }
