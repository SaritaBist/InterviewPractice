class Student
{
    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }
    getDetail()
    {
        let str="Id:"+this.id+"Name is"+this.name;
        return str;
    }
}
let c=new Student(102,"Sarita");
  let ans=c.getDetail();
  console.log(ans);

