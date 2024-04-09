import java.util.ArrayList;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        System.out.println("Hello world");
//        Employee employee = new Employee(65,);
        Employee employee1 = new Employee();
        Employee employee2 = new Employee();

        Scanner myObj = new Scanner(System.in);  // Create a Scanner object
        System.out.println("Enter username 1");
        String userName = myObj.nextLine();  // Read user input

        System.out.println("Enter username 2");
        String userName2 = myObj.nextLine();  // Read user inpu

        System.out.println("Enter surname 1");
        String surname = myObj.nextLine();  // Read user input

        System.out.println("Enter employee id..");
        int empNo = myObj.nextInt();


        employee1.setName(userName);
        employee2.setName(userName2);
        employee1.setSurname(surname);
        employee1.setEmpNo(empNo);
        System.out.println(employee1.getName() + " " + employee1.getEmpNo()   + " " + employee1.getSurname() );

//          ArrayList<Integer> myList = new ArrayList<>();
//          myList.add(12);
//          myList.add(30);
//          myList.add(42);
//          myList.remove(0);
//          System.out.println(myList);


//        Scanner myObj = new Scanner(System.in);  // Create a Scanner object
//        System.out.println("Enter username");
//
//        String userName = myObj.nextLine();  // Read user input
//        System.out.println("Username is: " + userName);  // Output user input



    }
}
