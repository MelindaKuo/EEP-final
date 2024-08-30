var alltutors = {
  t1:["aidan","Aidan.jpg","Aidan Wang"],
  t2:["blair","Blair.jpg","Blair Chen"],
  t3:["chipei","Chipei.jpg","Chipei"],
  t4:["chloe","Chloe.jpg","Chloe Fan"],
  t5:["emma","Emmat.jpg","Cheng-ya Tan"],
  t6:["harris","Harris.jpg","Harris Liu"],
  t7:["henrik","Henrik.jpg","Henrik Liao"],
  t8:["olivia","Olivia.jpg","Olivia Hsu"],
  t9:["jack","Jack.jpg","Jack Andrews"],
  t10:["jasmine","Jasmine.jpg","Jasmine Lu"],
  t11:["jeremy","Jeremy.jpg","Jeremy Sun"],
  t12:["katelynL","katelynl.jpg","Katelyn Liu"],
  t13:["katelynS","unknown.jpg","Katelyn Sun"],
  t14:["reese","Reese.jpg","Reese Zhou"],
  t15:["ruby","Ruby.jpg","Ruby Chen"],
  t16:["sophieL","SophieL.jpg","Sophie Liao"],
  t17:["steven","Steven.jpg","Steven Hsueh"],
  t18:["tiffany","Tiffany.jpg","Tiffany Hsu"],
  t19:["travis","unknown.jpg","Travis Han"],
  t20:["tristan","Tristan.jpg","Tristan Cox"],
  t21:["verina","Verina.jpg","Verina Mok"],
  t22:["ronen","unknown.jpg","Ronen Sun"],
  t23:["yoli","Yoli.jpg","Yoli Vautherin"],
  t24:["yuyan","Yuyan.jpg","Yuyan"],

}

function displayTutors(alltutors){
  var count = 0
  colnum = 3
  for (var tutor in alltutors){
    if (count!=0&&count%4==0){
      colnum++
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
  }
}

displayTutors(alltutors)