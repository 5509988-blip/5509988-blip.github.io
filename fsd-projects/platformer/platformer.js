$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 290, "blue");
createPlatform(1350, 400, 50, 50, "red");
createPlatform(0, 160, 300, 20);
createPlatform( 200, 160, 200, 20);
createPlatform(400, 310, 100, 20, "green");
createPlatform( 0, 270, 150, 20 );
createPlatform(0, 610, 150, 20)
createPlatform(0, 490, 150, 20)
createPlatform(0, 380, 150, 20)
createPlatform(400, 610, 100, 20)
createPlatform(600, 600, 200, 20, "orange", 600, 600, 0, 100, 600, 1)
createPlatform(500, 100, 100, 20, "blue");
createPlatform(900, 110, 100, 20, );
createPlatform(1100, 190, 100, 20, );
createPlatform(1300, 150, 100, 20, );
    // TODO 3 - Create Collectables
createCollectable("diamond", 40, 200, 0.5, 0.7);
createCollectable("steve", 1350, 110);
createCollectable("diamond", 550, 50, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
createCannon("right", 800, 1);
createCannon("right", 330, 2000)
 createCannon("top", 1100, 2000)   
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
