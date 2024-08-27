var alltutors = {
  t1:["aidan","Aidan.jpg","Aidan Wang"],
  t2:["ariel","Ariel.jpg","Ariel Hung"],
  t3:["amelia","Amelia.jpg","Amelia Tsao"],
  t4:["darren","Darren.jpg","Darren Wu"],
  t5:["harris","Harris.jpg","Harris Liu"],
  t6:["henrik","Henrik.jpg","Henrik Liao"],
  t7:["jasmine","Jasmine.jpg","Jasmine Lu"],
  t8:["reese","Reese.jpg","Reese Zhou"],
  t9:["ruby","Ruby.jpg","Ruby CHen"],
  t10:["shannon","Shannon.jpg","Shannon Chen"],
  t11:["sophieK","SophieK.jpg","Sophie Kao"],
  t12:["sophieL","SophieL.jpg","Sophie Liao"],
  t13:["steven","Steven.jpg","Steven Hsueh"],
  t14:["tristan","Tristan.jpg","Tristan Cox"],
  t15:["verina","Verina.jpg","Verina Mok"],
  t16:["yoli","Yoli.jpg","Yoli Vautherin"],
  t17:["yuyan","Yuyan.jpg","Yuyan"],

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