# ASSESSMENT 4: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. What is an instance variable in Ruby? How is it different from other variables?

    Your answer: Instance variables are things in Ruby that store data within a class. They can only be accessed within the class unless getter and/or setter methods are also created and stored within the class. Without the getters/setters, the new instances would not be able to access the instance variables. 

    Researched answer: Instance variables begin with the @ symbol and are stored within classes. They can be initialized to give them a defualt value but can also be stored without being initialized. 

    source: https://www.rubyguides.com/2019/07/ruby-instance-variables/


2. What is a block in Ruby?

    Your answer: A block is a piece of code that is surrounded by braces or the do/end noation. That block of code then does ~something~ and can be passed into a method or Proc or Lambda.

    Researched answer: There are single-line blocks and multi-line blocks. If you want to use a multi-line block, it is recommended that you use the do/end notation as that keeps it cleaner. There are many applications that can be done with blocks such as using the yield keyword and converting them to Procs or Lambdas to save time and coding space. 

    source: https://mixandgo.com/learn/mastering-ruby-blocks-in-less-than-5-minutes

3. Ruby has an implicit return. What does that mean?

    Your answer: In Ruby, you don't need to write the word "return" like we do in JavaScript. It is implied that after the do or {, the code written in the block will be returned. 
    If there are multiple cases of code, such as if/elsif statements, the last line, usually the else statement, will not need a return since Ruby automatically returns the final code block statement. 

    Researched answer: Any statement in Ruby returns the value of the last evaluated expression.

    source: https://www.freecodecamp.org/news/idiomatic-ruby-writing-beautiful-code-6845c830c664/

4. What is object-oriented programming? How is it different than functional programming?

    Your answer: Object Oriented Programming (OOP) is programming where everything (or almost everything) is considered an object. The interactions between the data is interactions between the classes and objects and the methods within them. 

    Researched answer: The four principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism.

    Encapsulation is achieved when each object keeps its state private, inside a class. Other objects don’t have direct access to this state. Instead, they can only call a list of public functions — called methods.

    Applying abstraction means that each object should only expose a high-level mechanism for using it. This mechanism should hide internal implementation details. It should only reveal operations relevant for the other objects. Think — a coffee machine. It does a lot of stuff and makes quirky noises under the hood. But all you have to do is put in coffee and press a button. 

    Inheritance: it means that you create a (child) class by deriving from another (parent) class. This way, we form a hierarchy.The child class reuses all fields and methods of the parent class (common part) and can implement its own (unique part). 

    Polymorphism gives a way to use a class exactly like its parent so there’s no confusion with mixing types. But each child class keeps its own methods as they are.

    source: https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/
    **really enjoyed reading this learning more about the concepts that make up OOP.**

5. What is the difference between a class and an object?

    Your answer: A class is a blueprint for an object. An object is an instance of a Class. 

    Researched answer: A class is used to bind data as well as methods together as a single unit.	Object acts like a variable of the class. Classes have logical existence.	Objects have a physical existence.A class doesn't take any memory spaces when a programmer creates one.	An object takes memory when a programmer creates one. The class has to be declared only once.	Objects can be declared several times depending on the requirement.
    source: https://www.w3schools.in/java-questions-answers/difference-between-classes-objects/
