package none.cvg.maven.datetime.greetinggen;

import none.cvg.maven.greeting.Greeting;

public class GreetingGenerator {

    public static void main(String[] args) {
        int a=5;
        int b=10;
        public void add(){
            System.out.println(a+b);
        }
        Greeting greeting = new Greeting();
        System.out.println("\n" + greeting.greet());
    }
}
