var garden,rabbit;
var gardenImg,rabbitImg;
var leaves
var greenLeaf, orangeLeaf, redLeaf
var leavesGroup

function preload(){
  
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  greenLeaf = loadImage("leaf.png")
  orangeLeaf = loadImage("orangeLeaf.png")
  redLeaf = loadImage("redImage.png")

}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden = createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

leavesGroup = new Group ();
}


function draw() {
  background(0);

  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createLeaves()

  drawSprites();
 }

function createLeaves(){
  if(frameCount % 60 == 0){
  leaves = createSprite(200, 0, 15, 15)
  leaves.velocityY = 3
  leaves.lifetime = width / leaves.velocityY
  var rand = Math.round(random(1, 3))
  switch(rand){
    case 1: leaves.addImage(greenLeaf)
    break;

    case 2: leaves.addImage(orangeLeaf)
    break;

    case 3: leaves.addImage(redLeaf)
    break;

    default : break;

  }

   leaves.scale = 0.05;

   leavesGroup.add(leaves)

   leaves.x = (random(10, 350))

  }
 }