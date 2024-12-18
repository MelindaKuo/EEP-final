var alltutors = {
  t1:["aidan","Aidan.jpg","Aidan Wang"],
  t2:["blair","Blair.jpg","Blair Chen"],
  t3:["chipei","Chipei.jpg","Chipei"],
  t4:["chloe","Chloe.jpg","Chloe Fan"],
  t5:["darren","Darren.jpg","Darren Wu"],
  t6:["emma","Emmat.jpg","Cheng-ya Tan"],
  t7:["harris","Harris.jpg","Harris Liu"],
  t8:["henrik","Henrik.jpg","Henrik Liao"],
  t9:["ivan","Ivan.jpg","Ivan Lan"],
  t10:["jack","Jack.jpg","Jack Andrews"],
  t11:["jasmine","Jasmine.jpg","Jasmine Lu"],
  t12:["jeremy","Jeremy.jpg","Jeremy Sun"],
  t13:["katelyn","katelynl.jpg","Katelyn Liu"],
  t14:["katelynS","Chloe.jpg","Katelyn Sun"],
  t15:["olivia","Olivia.jpg","Olivia Hsu"],
  t16:["reese","Reese.jpg","Reese Zhou"],
  t17:["ruby","Ruby.jpg","Ruby Chen"],
  t18:["sophieL","SophieL.jpg","Sophie Liao"],
  t19:["steven","Steven.jpg","Steven Hsueh"],
  t20:["tiffany","Tiffany.jpg","Tiffany Hsu"],
  t21:["travis","Chloe.jpg","Travis Han"],
  t22:["tristan","Tristan.jpg","Tristan Cox"],
  t23:["verina","Verina.jpg","Verina Mok"],
  t24:["ronen","Chloe.jpg","Ronen Sun"],
  t25:["yoli","Yoli.jpg","Yoli Vautherin"],
  t26:["yuyan","Yuyan.jpg","Yuyan"],

}

function displayTutors(alltutors){
  var count = 0
  colnum = 3
  for (var tutor in alltutors){
    if (count!=0&&count%4==0){
      colnum=3
    }
    $(".all-tutors").append(`
      <a class = "apl" href = "tutorpages/`+alltutors[tutor][0]+`.html">
          <div class = "column`+colnum+`">
              <img class  = "img1" src = "tutorphotos/`+alltutors[tutor][1]+`" alt ="picture of self " width = 200px height = 200px>
              <h2>`+alltutors[tutor][2]+`</h2>
          </div>
      </a>
    `)
    count++
    colnum++
  }
}

displayTutors(alltutors)