package none.cvg.maven.datetime.greetinggen;

import none.cvg.maven.greeting.Greeting;

public class GreetingGenerator {
    int a=3;
    int b=5;
    public void add(){
        System.out.println(a+b);
    }
    public static void main(String[] args) {
        Greeting greeting = new Greeting();
        System.out.println("\n" + greeting.greet());
    }
}
