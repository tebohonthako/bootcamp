public class Employee {

    String name;

    int empNo;

    String surname;

    double salary;


    //Constructor can have parameters or have no params
//    Employee(int empNumber, String firstName, String lastName, double salary ) {
//        this.empNo = empNumber;
//        this.name = firstName;
//        this.surname = lastName;
//        this.salary = salary;
//    }

    Employee() {}

     //void - we do not want to return anything
     // public or private - we want to return something ie int
     // set the datatype.... get we return datatype
    // setter and getter tell your program what to do

    ///
    public void setEmpNo(int empNo)
    {
        this.empNo = empNo;
    }

    public int getEmpNo(){
        return empNo;
    }
/////
    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getSurname() {
        return surname;
    }
/////

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }
}
