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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 620, 20, 10);
    createPlatform(710, 575, 35, 10, "blue");
    createPlatform(825, 450, 20, 5, "purple");
    createPlatform(1040, 315, 20, 5, "green");
    createPlatform(850, 190, 40, 5);
    createPlatform(620, 190, 10, 5, "red");
    createPlatform(200, 190, 200, 20);
    createPlatform(100, 400, 200, 20);
    createPlatform(1300, 510, 120, 10, "yellow");




    // TODO 3 - Create Collectables
    createCollectable("database", 1300, 480, 0);
    createCollectable("database", 300, 180, 0);
    createCollectable("database", 850, 150, 0);



    
    // TODO 4 - Create Cannons
    createCannon("left", 275, 2000)
    createCannon("right", 190, 3000)
    createCannon("bottom", 1200, 4000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
