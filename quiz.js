        const quizData = [
            {
                category: "C++ Basics & Loops",
                questions: [
                    { question: "What is true about the following for loop?", code: "for (;;) {\n// code\n}", options: ["It will not compile.", "It runs exactly once.", "It runs infinitely unless broken from inside.", "It runs zero times."], answer: "It runs infinitely unless broken from inside." },
                    { question: "Which of the following statements about loops in C++ is true?", options: ["A for loop can only be used when the number of iterations is unknown.", "A while loop is guaranteed to execute at least once.", "A do-while loop checks the condition before executing the loop body.", "A for loop is often used when the number of iterations is known."], answer: "A for loop is often used when the number of iterations is known." },
                    { question: "What will be the value of sum after this loop?", code: "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n  sum += i;\n}", options: ["10", "15", "5", "20"], answer: "15" },
                    { question: "Which keyword is used to skip the current iteration and continue with the next?", options: ["break", "exit", "continue", "skip"], answer: "continue" },
                    { question: "What is the output of this code?", code: "for (int i = 1; i <= 5; i++) {\n  if (i == 3) break;\n  cout << i << \" \";\n}", options: ["1 2 3 4 5", "1 2", "1 2 3", "1 2 4 5"], answer: "1 2" },
                    { question: "What is the output?", code: "int i = 0;\ndo {\n  cout << i << \" \";\n  i++;\n} while (i < 3);", options: ["1 2 3", "0 1 2", "0 1 2 3", "No output"], answer: "0 1 2" },
                    { question: "How many times will the following loop execute?", code: "for (int i = 0; i < 10; i += 3) {\n  cout << i << \" \";\n}", options: ["3 times", "4 times", "10 times", "Infinite times"], answer: "4 times" },
                    { question: "Which statement about continue is correct?", options: ["It terminates the loop completely.", "It skips the remaining code in the current iteration and starts the next iteration.", "It exits from the function.", "It jumps to the start of the program."], answer: "It skips the remaining code in the current iteration and starts the next iteration." },
                    { question: "What will be the output of this code?", code: "int x = 2;\nswitch (x) {\n  case 1: cout << \"One\"; break;\n  case 2: cout << \"Two\"; break;\n  case 3: cout << \"Three\"; break;\n  default: cout << \"Other\";\n}", options: ["One", "Two", "Three", "Other"], answer: "Two" },
                    { question: "Which data type can not be used in a switch statement in C++?", options: ["char", "int", "float", "enum"], answer: "float" },
                    { question: "What is the output?", code: "int n = 4;\nswitch (n) {\n  case 1:\n  case 2:\n  case 3: cout << \"Small\"; break;\n  case 4:\n  case 5: cout << \"Medium\"; break;\n  default: cout << \"Large\";\n}", options: ["Small", "Medium", "Large", "No output"], answer: "Medium" },
                    { question: "What is the key difference between a while loop and a do-while loop?", options: ["while loop always executes at least once.", "do-while loop always executes at least once.", "Both always execute at least once.", "do-while can only be used with integers."], answer: "do-while loop always executes at least once." },
                    { question: "What is the output of the following code?", code: "int i = 5;\nwhile (i < 5) {\n  cout << i;\n  i++;\n}", options: ["5", "5 6", "No output", "Infinite loop"], answer: "No output" },
                    { question: "What is the output of this code?", code: "int i = 5;\ndo {\n  cout << i;\n  i++;\n} while (i < 5);", options: ["No output", "5", "5 6", "Infinite loop"], answer: "5" }
                ]
            },
            {
                category: "C++ Functions & Arrays",
                questions: [
                    { question: "What is the output of this code?", code: "int square(int x) {\n  return x * x;\n}\nint main() {\n  cout << square(3);\n  return 0;\n}", options: ["6", "9", "3", "27"], answer: "9" },
                    { question: "Which of the following is a correct function prototype?", options: ["void display() { }", "int sum(int a, int b);", "float average(a, b);", "function int(int x);"], answer: "int sum(int a, int b);" },
                    { question: "What is the output?", code: "void printHello() {\n  cout << \"Hello\";\n}\nint main() {\n  printHello();\n  printHello();\n  return 0;\n}", options: ["Hello", "HelloHello", "Hello Hello", "Compilation error"], answer: "HelloHello" },
                    { question: "Which statement about returning an array from a function is correct?", options: ["You can directly return a local array.", "You must return a pointer or use dynamic allocation.", "You must return all elements separately.", "Arrays cannot be returned at all."], answer: "You must return a pointer or use dynamic allocation." },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int arr[3] = {1, 3, 5};\ncout << arr[0] + arr[2];", options: ["4", "5", "6", "7"], answer: "6" },
                    { question: "Q2. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int nums[4] = {10, 20, 30, 40};\ncout << nums[1] * nums[3];", options: ["200", "400", "600", "800"], answer: "800" },
                    { question: "Q3. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int data[5] = {2, 4, 6, 8, 10};\ncout << data[3] - data[0];", options: ["4", "6", "8", "10"], answer: "6" },
                    { question: "Q4. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int score[3] = {50, 60, 70};\nscore[1] = 100;\ncout << score[1];", options: ["60", "70", "100", "50"], answer: "100" },
                    { question: "Q5. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int a[2] = {5, 7};\ncout << a[0] * a[1];", options: ["12", "30", "35", "57"], answer: "35" },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int nums[3] = {5, 10, 15};\nif (nums[1] > 8) {\n  cout << nums[2];\n} else {\n  cout << nums[0];\n}", options: ["5", "10", "15", "Error"], answer: "15" },
                    { question: "Q2. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int arr[4] = {2, 4, 6, 8};\nif (arr[0] + arr[3] == 10) {\n  cout << \"Equal\";\n} else {\n  cout << \"Not Equal\";\n}", options: ["Equal", "Not Equal", "Error", "10"], answer: "Equal" },
                    { question: "Q3. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int score[2] = {70, 80};\nif (score[0] >= 75) {\n  cout << \"Pass\";\n} else {\n  cout << \"Fail\";\n}", options: ["Pass", "Fail", "Error", "70"], answer: "Fail" },
                    { question: "Q4. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int data[3] = {1, 3, 5};\nif (data[2] % 2 == 0) {\n  cout << \"Even\";\n} else {\n  cout << \"Odd\";\n}", options: ["Even", "Odd", "Error", "5"], answer: "Odd" },
                    { question: "Q5. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int a[2] = {7, 9};\nif (a[0] < a[1]) {\n  cout << a[1] - a[0];\n} else {\n  cout << a[0] + a[1];\n}", options: ["2", "7", "9", "16"], answer: "2" },
                    { question: "Q3. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int data[5] = {2, 4, 6, 8, 10};\nfor (int i = 0; i < 5; i += 2) {\n  cout << data[i] << \" \";\n}", options: ["2 4 6 8 10", "2 6 10", "4 8", "6 10"], answer: "2 6 10" },
                    { question: "Q5. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int a[3] = {3, 6, 9};\nfor (int i = 0; i < 3; i++) {\n  if (a[i] > 5)\n    cout << a[i] << \" \";\n}", options: ["3 6 9", "6 9", "3 6", "9"], answer: "6 9" },
                    { question: "Q2. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int nums[4] = {5, 10, 15, 20};\nint sum = 0;\nfor (int i = 0; i < 4; i++) {\n  sum += nums[i];\n}\ncout << sum;", options: ["45", "50", "55", "60"], answer: "50" },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int a[2][2] = {\n  {1, 2},\n  {3, 4}\n};\ncout << a[1][0];", options: ["1", "2", "3", "4"], answer: "3" },
                    { question: "Q2. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int m[2][3] = {\n  {5, 10, 15},\n  {20, 25, 30}\n};\ncout << m[0][2] + m[1][1];", options: ["35", "40", "45", "50"], answer: "40" },
                    { question: "Q3. តើ Syntax មួយណាដែលត្រឹមត្រូវសម្រាប់បង្កើត array មាន 3 rows និង 4 columns?", options: ["int arr[4][3];", "int arr[3][4];", "int arr(3,4);", "int arr[3,4];"], answer: "int arr[3][4];" },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int a[2][2] = {\n  {1, 2},\n  {3, 4}\n};\nint sum = 0;\nfor (int i = 0; i < 2; i++) {\n  for (int j = 0; j < 2; j++) {\n    sum += a[i][j];\n  }\n}\ncout << sum;", options: ["8", "9", "10", "11"], answer: "10" },
                    { question: "Q2. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int b[2][3] = {\n  {2, 4, 6},\n  {1, 3, 5}\n};\nfor (int i = 0; i < 2; i++) {\n  cout << b[i][1] << \" \";\n}", options: ["2 1", "4 3", "6 5", "3 4"], answer: "4 3" },
                    { question: "Q3. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int c[3][2] = {\n  {10, 20},\n  {30, 40},\n  {50, 60}\n};\nfor (int i = 0; i < 3; i++) {\n  cout << c[i][0] << \" \";\n}", options: ["10 30 50", "20 40 60", "10 20 30", "30 40 50"], answer: "10 30 50" }
                ]
            },
            {
                category: "Structs, Enums & Error Handling",
                questions: [
                    { question: "Q2. តើអ្វីទៅជា purpose សំខាន់នៃការប្រើ try-catch?", options: ["បង្កើត loop", "ចាប់កំហុស និងដោះស្រាយ", "បង្ហាញ Output", "បង្កើត Array"], answer: "ចាប់កំហុស និងដោះស្រាយ" },
                    { question: "Q4. តើ Statement មួយណាដែលប្រើសម្រាប់ចាប់កំហុស?", options: ["try", "catch", "throw", "break"], answer: "catch" },
                    { question: "Q5. តើអ្វីកើតឡើងបើគ្មាន catch ហើយមាន throw?", options: ["Program បន្តដំណើរការ Normally", "Program បង្ហាញសារ Error ហើយបញ្ចប់", "Program ចាប់ដោយ Default catch", "Nothing happens"], answer: "Program បង្ហាញសារ Error ហើយបញ្ចប់" },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int arr[3] = {1, 2, 3};\ntry {\n  if (arr[2] == 3)\n    throw \"Last element is 3!\";\n  cout << \"No error\";\n}\ncatch (const char* msg) {\n  cout << msg;\n}", options: ["No error", "Last element is 3!", "Error", "Nothing displayed"], answer: "Last element is 3!" },
                    { question: "Q2. តើអ្វីកើតឡើងបើ Access arr[5] នៅក្នុង Array arr[3]?", options: ["ចាប់បានដោយ Automatic catch", "Error នៅ Runtime", "Error si Compile-time", "មិនមានអ្វីកើតឡើង"], answer: "Error នៅ Runtime" },
                    { question: "Q3. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "int nums[2] = {5, 10};\ntry {\n  cout << nums[1] << endl;\n  cout << nums[2] << endl;\n}\ncatch (...) {\n  cout << \"Out of range!\";\n}", options: ["5 10", "10 Out of range!", "Out of range!", "Compilation Error"], answer: "10 Out of range!" },
                    { question: "តើ statement ណាខាងក្រោម ជា សេចក្តីកំណត់ (Definition) ត្រឹមត្រូវសម្រាប់ struct?", options: ["struct គឺជា function ដែលប្រើសម្រាប់គណនា", "struct គឺជា data type សម្រាប់ផ្ទុកតម្លៃតែមួយប្រភេទប៉ុណ្ណោះ", "struct គឺជា user-defined data type ដែលអាចផ្ទុក fields ច្រើនមានប្រភេទទិន្នន័យផ្សេងៗគ្នា", "struct គឺជា keyword ដើម្បីបង្កើត loop"], answer: "struct គឺជា user-defined data type ដែលអាចផ្ទុក fields ច្រើនមានប្រភេទទិន្នន័យផ្សេងៗគ្នា" },
                    { question: "Q1. តើ Syntax ត្រឹមត្រូវសម្រាប់កំណត់ struct Student?", options: ["struct Student { string name; int age; };", "struct Student() { string name; int age; };", "Student struct { string name; int age; };", "struct { string name; int age; } Student;"], answer: "struct Student { string name; int age; };" },
                    { question: "Q5. តើ syntax ត្រឹមត្រូវសម្រាប់កំណត់តម្លៃផ្ទាល់ struct?", options: ["Student s = {\"Dara\", 20, 85.5};", "Student s(\"Dara\", 20, 85.5);", "Student s.new(\"Dara\", 20, 85.5);", "Student s => {\"Dara\", 20, 85.5};"], answer: "Student s = {\"Dara\", 20, 85.5};" },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "struct Item {\n  string name;\n  int price;\n};\nItem items[2] = {{\"Pen\", 5}, {\"Book\", 10}};\nfor (int i = 0; i < 2; i++) {\n  cout << items[i].name << \" \";\n}", options: ["Pen Book", "5 10", "Pen", "Book"], answer: "Pen Book" },
                    { question: "Q2. តើកូដខាងក្រោមបង្ហាញអ្វី?", code: "struct Student {\n  string name;\n  int age;\n};\nStudent list[3] = {{\"Sok\", 18}, {\"Dara\", 19}, {\"Vann\", 20}};\nint sum = 0;\nfor (int i = 0; i < 3; i++) {\n  sum += list[i].age;\n}\ncout << sum;", options: ["18", "19", "20", "57"], answer: "57" },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "#include <iostream>\nusing namespace std;\nstruct Student {\n  string name;\n  int age;\n  float score;\n};\nint main() {\n  Student list[3] = {\n    {\"Sok\", 19, 85.5},\n    {\"Dara\", 20, 65.0},\n    {\"Vann\", 18, 90.0}\n  };\n  cout << \"--- Passed Students ---\" << endl;\n  for (int i = 0; i < 3; i++) {\n    if (list[i].score >= 70) {\n      cout << \"Name: \" << list[i].name << endl;\n    }\n  }\n  return 0;\n}", options: ["Sok Dara Vann", "Sok Vann", "Dara only", "Vann only"], answer: "Sok Vann" },
                    { question: "Q1. តើអ្វីជា Definition ត្រឹមត្រូវសម្រាប់ enum ក្នុង C++?", options: ["enum គឺជា function សម្រាប់គណនា", "enum គឺជា user-defined data type ដើម្បីកំណត់តម្លៃមានឈ្មោះ (named constants)", "enum គឺជា loop type មួយ", "enum គឺជា data type សម្រាប់ផ្ទុក string ប៉ុណ្ណោះ"], answer: "enum គឺជា user-defined data type ដើម្បីកំណត់តម្លៃមានឈ្មោះ (named constants)" },
                    { question: "Q2.  enum ត្រូវបានប្រើសម្រាប់...?", options: ["កំណត់ array size", "កំណត់ក្រុមតម្លៃ integer មានឈ្មោះ", "កំណត់ function name", "កំណត់ variable ជាប្រភេទ float"], answer: "កំណត់ក្រុមតម្លៃ integer មានឈ្មោះ" },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "enum Level {Low, Medium, High};\nLevel l = High;\nif (l == High)\n  cout << \"Danger!\";", options: ["Danger!", "Medium", "Low", "មិនបង្ហាញអ្វីទេ"], answer: "Danger!" },
                    { question: "Q2. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "enum Day {Sun, Mon, Tue, Wed, Thu, Fri, Sat};\nfor (int i = Mon; i <= Wed; i++) {\n  cout << i << \" \";\n}", options: ["1 2 3", "0 1 2", "Mon Tue Wed", "Error"], answer: "1 2 3" },
                    { question: "Q3. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "enum Status {Off, On};\nStatus s = Off;\nif (s == On)\n  cout << \"Running\";\nelse\n  cout << \"Stopped\";", options: ["Running", "Stopped", "off", "Error"], answer: "Stopped" },
                    { question: "Q4. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "enum Size {Small = 1, Medium, Large};\nfor (int i = Small; i <= Large; i++) {\n  if (i == Medium)\n    cout << \"M\";\n  else\n    cout << i << \" \";\n}", options: ["1 M 3", "1 2 3", "S M L", "M M M"], answer: "1 M 3" },
                    { question: "Q5. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "enum Color {Red, Green, Blue};\nfor (int i = Red; i <= Blue; i++) {\n  if (i == Green)\n    cout << \"Selected \";\n}", options: ["Selected Selected", "Selected", "Red Green Blue", "មិនបង្ហាញអ្វីទេ"], answer: "Selected" }
                ]
            },
            {
                category: "OOP & Classes",
                questions: [
                    { question: "Q1. តើ class ក្នុង C++ មាននាទីអ្វី?", options: ["function សម្រាប់គណនា", "user-defined data type សម្រាប់បង្កើត objects", "loop type មួយ", "data type សម្រាប់ទាញទិន្នន័យពី file"], answer: "user-defined data type សម្រាប់បង្កើត objects" },
                    { question: "Q2. តើ statement ណាដែលត្រូវសម្រាប់កំណត់ class?", options: ["class Student { ... };", "Student class { ... };", "class = Student { ... };", "struct Student();"], answer: "class Student { ... };" },
                    { question: "Q1. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "class Number {\npublic:\n  int value;\n};\nint main() {\n  Number n[3] = {{5}, {10}, {15}};\n  for (int i = 0; i < 3; i++) {\n    if (n[i].value > 8)\n      cout << n[i].value << \" \";\n  }\n  return 0;\n}", options: ["5 10 15", "10 15", "5 10", "15 only"], answer: "10 15" },
                    { question: "Q2. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "class Student {\npublic:\n  string name;\n  float score;\n};\nint main() {\n  Student s[2] = {{\"Sok\", 75.0}, {\"Dara\", 65.0}};\n  for (int i = 0; i < 2; i++) {\n    if (s[i].score >= 70)\n      cout << s[i].name << endl;\n  }\n  return 0;\n}", options: ["Sok Dara", "Sok only", "Dara only", "មិនបង្ហាញអ្វីទេ"], answer: "Sok only" },
                    { question: "Q3. តើលទ្ធផលនៃកូដខាងក្រោម?", code: "class Item {\npublic:\n  string name;\n  int price;\n};\nint main() {\n  Item list[3] = {{\"Pen\", 2}, {\"Book\", 5}, {\"Bag\", 7}};\n  for (int i = 0; i < 3; i++) {\n    if (list[i].price >= 5)\n      cout << list[i].name << \" \";\n  }\n  return 0;\n}", options: ["Pen Book Bag", "Book Bag", "Pen only", "Bag only"], answer: "Book Bag" },
                    { question: "Q1. តើ C++ គឺជាភាសាដែលគាំទ្រប្រព័ន្ធណាដែលមានលក្ខណៈ OOP?", options: ["Structured Programming", "Object-Based", "Object-Oriented Programming", "Functional Programming"], answer: "Object-Oriented Programming" },
                    { question: "Q2. តើអ្វីជាធាតុមូលដ្ឋាននៃ OOP?", options: ["Object", "Class", "Inheritance", "ទាំងបីខាងលើ"], answer: "ទាំងបីខាងលើ" },
                    { question: "Q3. តើ “Class” មាននាទីអ្វីនៅក្នុង C++?", options: ["ដើម្បីដាក់ព័ត៌មានតែប៉ុណ្ណោះ", "ដើម្បីបង្កើត array", "ដើម្បីកំណត់គំរូសម្រាប់ objects", "ដើម្បីបញ្ចូល loop"], answer: "ដើម្បីកំណត់គំរូសម្រាប់ objects" },
                    { question: "Q4. តើការបង្កើត object ត្រូវប្រើអ្វី?", options: ["new keyword", "Variable name + class", "Class name + Object name", "Function call"], answer: "Class name + Object name" },
                    { question: "Q1: តើ Access Modifiers មួយណាដែលអាចចូលបានពីក្រៅ class?", options: ["private", "public", "protected", "internal"], answer: "public" },
                    { question: "Q2: តើ Modifier private មានន័យយ៉ាងដូចម្តេច?", options: ["Members អាចចូលបានគ្រប់ទីកន្លែង", "Members អាចចូលបានតែក្នុង class", "Members អាចចូលបានតាម inheritance", "Members អាច access តាម object"], answer: "Members អាចចូលបានតែក្នុង class" },
                    { question: "តើ protected member អាច access បានពីណាខ្លះ?", options: ["តែក្នុង base class", "តែក្នុង derived class", "ក្នុង base និង derived class", "នៅក្រៅ class"], answer: "ក្នុង base និង derived class" },
                    { question: "Q4: តើអ្វីកើតឡើងបើអ្នកព្យាយាម access private variable ពីក្រៅ class?", options: ["compile normally", "show 0 value", "error", "convert public"], answer: "error" },
                    { question: "What is the correct definition of Encapsulation in C++?", options: ["The ability of different objects to respond to the same function call in different ways.", "The process of hiding internal data and exposing only necessary parts through public methods.", "The mechanism by which one class inherits the properties of another class.", "The separation of interface and implementation using abstract classes only."], answer: "The process of hiding internal data and exposing only necessary parts through public methods." },
                    { question: "Which line best demonstrates Encapsulation in the following code?", code: "class Employee {\nprivate:\n  int salary;\npublic:\n  void setSalary(int s) {\n    salary = s;\n  }\n  int getSalary() {\n    return salary;\n  }\n};", options: ["Declaring salary as a private member", "Using setSalary() to assign salary", "Printing salary using cout", "Making getSalary() return 0"], answer: "Declaring salary as a private member" },
                    { question: "What will be the output of this program?", code: "class Person {\nprivate:\n  string name;\npublic:\n  void setName(string n) {\n    name = n;\n  }\n  string getName() {\n    return name;\n  }\n};\nint main() {\n  Person p;\n  p.setName(\"Sareth\");\n  cout << p.getName();\n  return 0;\n}", options: ["Sareth", "name", "Compile error", "Blank output"], answer: "Sareth" },
                    { question: "Which access specifier prevents outside access to a variable?", options: ["public", "protected", "global", "private"], answer: "private" },
                    { question: "1. What is polymorphism in C++?", options: ["Ability to reuse code", "Ability of one function to behave differently in different contexts", "Ability to store multiple values in a single variable", "Ability to hide class members"], answer: "Ability of one function to behave differently in different contexts" },
                    { question: "2. Which of the following is an example of compile-time polymorphism?", options: ["Function Overloading", "Function Overriding", "Virtual Functions", "Abstract Classes"], answer: "Function Overloading" }
                ]
            },
            {
                category: "OOP Inheritance",
                questions: [
                    { question: "Q2:  class ដែលទទួលមរតក (inherits) ពី class ផ្សេង គេហៅថា?", options: ["Parent class", "Object class", "Derived class", "Structure"], answer: "Derived class" },
                    { question: "Q3: តើការបង្កើត inheritance ជាសាធារណៈត្រូវសរសេរជារបៀបណា?", options: ["class A inherits B", "class A: B", "class A < B", "class A : public B"], answer: "class A : public B" },
                    { question: "Q4: តើ private members នៃ base class អាច access តាមរយៈ derived class បានទេ?", options: ["បាន", "បានកែប្រើ pointer", "មិនបានទេ", "បានប្រើ friend"], answer: "មិនបានទេ" },
                    { question: "Which of the following is not a type of inheritance in C++?", options: ["Single inheritance", "Multiple inheritance", "Duplicate inheritance", "Hierarchical inheritance"], answer: "Duplicate inheritance" },
                    { question: "In hierarchical inheritance,", options: ["One base class is inherited by many derived classes", "Many base classes inherit one derived class", "A derived class inherits another derived class", "Classes are unrelated"], answer: "One base class is inherited by many derived classes" },
                    { question: "Which of the following best describes hybrid inheritance?", options: ["Inheritance where one class inherits multiple times from the same base", "A combination of more than one type of inheritance", "Only private members are inherited", "Two unrelated classes are merged"], answer: "A combination of more than one type of inheritance" },
                    { question: "Which type of inheritance involves a derived class inheriting from another derived class?", options: ["Hybrid", "Multiple", "Hierarchical", "Multilevel"], answer: "Multilevel" },
                    { question: "What kind of inheritance is shown below?", code: "class A {};\nclass B : public A {};\nclass C : public B {};", options: ["Multilevel inheritance", "Multiple inheritance", "Hierarchical inheritance", "Hybrid inheritance"], answer: "Multilevel inheritance" },
                    { question: "Question 1: What type of inheritance is shown?", code: "class A {};\nclass B : public A {};\nclass C : public B {};", options: ["Multiple", "Multilevel", "Hybrid", "Hierarchical"], answer: "Multilevel" },
                    { question: "Question 2: What type of inheritance is this?", code: "class Animal {\npublic:\n  void eat() {}\n};\nclass Mammal : public Animal {\npublic:\n  void walk() {}\n};\nclass Human : public Mammal {\npublic:\n  void speak() {}\n};", options: ["Single", "Multilevel", "Hierarchical", "Multiple"], answer: "Multilevel" },
                    { question: "What type of inheritance is shown?", code: "class A {};\nclass B : public A {};\nclass C : public B {};\nclass D : public C {};", options: ["Single", "Multiple", "Multilevel", "Hierarchical"], answer: "Multilevel" },
                    { question: "What type of inheritance is used?", code: "class A {};\nclass B {};\nclass C : public A, public B {};", options: ["Multilevel", "Hybrid", "Multiple", "Hierarchical"], answer: "Multiple" },
                    { question: "What kind of inheritance is used here?", code: "class Flyer {\npublic:\n  void fly() {}\n};\nclass Swimmer {\npublic:\n  void swim() {}\n};\nclass Duck : public Flyer, public Swimmer {};", options: ["Multilevel", "Multiple", "Hybrid", "Single"], answer: "Multiple" },
                    { question: "What inheritance is shown?", code: "class A {};\nclass B : public A {};\nclass C : public A {};", options: ["Multilevel", "Multiple", "Hierarchical", "Hybrid"], answer: "Hierarchical" },
                    { question: "What type of inheritance is this?", code: "class Animal {\npublic:\n  void eat() {}\n};\nclass Dog: public Animal {};\nclass Cat: public Animal {};\nclass Cow: public Animal {};", options: ["Single", "Multilevel", "Hierarchical", "Multiple"], answer: "Hierarchical" },
                    { question: "What type of inheritance is this?", code: "class Account {\npublic:\n  void login() {}\n};\nclass StudentAccount: public Account {};\nclass TeacherAccount: public Account {};", options: ["Hybrid", "Hierarchical", "Multilevel", "Multiple"], answer: "Hierarchical" },
                    { question: "This setup describes:", code: "class A {};\nclass B : public A {};\nclass C : public A {};\nclass D : public B, public C {};", options: ["Multiple inheritance", "Hybrid inheritance", "Multilevel inheritance", "Hierarchical inheritance"], answer: "Hybrid inheritance" },
                    { question: "Question 3: What type of inheritance does D represent?", code: "class A {};\nclass B : public A {};\nclass C {};\nclass D : public B, public C {};", options: ["Multiple", "Multilevel", "Hybrid", "Single"], answer: "Hybrid" },
                    { question: "What type of inheritance is this?", code: "class A {};\nclass B : public A {};\nclass C : public A {};\nclass D : public B, public C {};", options: ["Multiple", "Single", "Hierarchical", "Hybrid"], answer: "Hybrid" }
                ]
            },
            {
                category: "General Logic & Excel",
                questions: [
                    { question: "What is decision making?", options: ["a. Choosing between different alternatives", "b. Collecting information only", "c. Following orders without thinking", "d. Avoiding responsibility"], answer: "a. Choosing between different alternatives" },
                    { question: "Which of these is a disadvantage of group decision making?", options: ["Higher creativity", "More information available", "Risk of groupthink", "Shared responsibility"], answer: "Risk of groupthink" },
                    { question: "What is intuition-based decision making?", options: ["Based only on data analysis", "Based on feelings and experiences", "Based on voting by a group", "Based on a computer program"], answer: "Based on feelings and experiences" },
                    { question: "Which function can return the relative position of an item?", options: ["INDEX", "MATCH", "OFFSET", "INDIRECT"], answer: "MATCH" },
                    { question: "What does the formula =SUMIF(A1:A10, \">100\", B1:B10) do?", options: ["Sums all cells in A1:A10 greater than 100.", "Sums all cells in B1:B10 where corresponding A1:A10 cells are greater than 100.", "Counts cells in A1:A10 greater than 100.", "Returns an error."], answer: "Sums all cells in B1:B10 where corresponding A1:A10 cells are greater than 100." },
                    { question: "What does the formula =INDEX(A1:A10, MATCH(\"Apple\", B1:B10, 0)) do?", options: ["Finds \"Apple\" in A1:A10 and returns its position.", "Returns the value in A1:A10 that corresponds to the row where \"Apple\" is found in B1:B10.", "Returns \"Apple\" from B1:B10 directly.", "Produces an error."], answer: "Returns the value in A1:A10 that corresponds to the row where \"Apple\" is found in B1:B10." },
                    { question: "Which function allows you to count the number of cells that meet multiple criteria?", options: ["COUNTIF", "COUNTIFS", "COUNTA", "SUMIF"], answer: "COUNTIFS" },
                    { question: "What does the formula =INDIRECT(\"B\"&5) return?", options: ["Value in cell B5.", "String \"B5\".", "Error.", "Value in cell 5B."], answer: "Value in cell B5." },
                    { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Tool Multi Language"], answer: "Hyper Text Markup Language" },
                    { question: "Q4. បើចាប់ពី 1 ដល់ 100, តើមានប៉ុន្មានចំនួនចែកដាច់ដោយ 5?", options: ["10", "15", "20", "25"], answer: "20" },
                    { question: "បើឪពុកមានអាយុ 40 ឆ្នាំ និងកូនមានអាយុ 10 ឆ្នាំ។ តើប៉ុន្មានឆ្នាំទៀតទើបឪពុកមានអាយុ២ដងនៃអាយុកូន?", options: ["10 ឆ្នាំ", "20 ឆ្នាំ", "15 ឆ្នាំ", "5 ឆ្នាំ"], answer: "20 ឆ្នាំ" }
                ]
            }
        ];

        const categoryNav = document.getElementById('category-nav');
        const quizContainer = document.getElementById('quiz-container');
        const resultsContainer = document.getElementById('results-container');
        const scoreText = document.getElementById('score-text');
        const restartQuizBtn = document.getElementById('restart-quiz');
        const welcomeMessage = document.getElementById('welcome-message');
        const timerContainer = document.getElementById('timer-container');
        const timerEl = document.getElementById('timer');
        const answerSummaryContainer = document.getElementById('answer-summary');
        
        let currentCategory = null;
        let score = 0;
        let chartInstance = null;
        let timerInterval = null;
        let timeLeft = 3600;
        let currentQuizQuestions = [];

        function init() {
            quizData.forEach(cat => {
                const button = document.createElement('button');
                button.textContent = cat.category;
                button.className = 'nav-button py-2 px-4 rounded-lg text-sm sm:text-base font-medium bg-white border border-gray-200 hover:bg-gray-50';
                button.onclick = () => startQuiz(cat.category);
                categoryNav.appendChild(button);
            });

            const showAllButton = document.createElement('button');
            showAllButton.textContent = 'Show All Answers';
            showAllButton.className = 'nav-button py-2 px-4 rounded-lg text-sm sm:text-base font-medium bg-white border border-gray-200 hover:bg-gray-50';
            showAllButton.onclick = () => showAllAnswers();
            categoryNav.appendChild(showAllButton);
        }

        function startQuiz(category) {
            currentCategory = category;
            score = 0;
            welcomeMessage.classList.add('hidden');
            resultsContainer.classList.add('hidden');
            quizContainer.innerHTML = '';
            
            document.querySelectorAll('#category-nav .nav-button').forEach(btn => {
                btn.classList.remove('active'); // Deactivate all buttons first
                if(btn.textContent === category) {
                    btn.classList.add('active');
                }
            });

            const categoryData = quizData.find(cat => cat.category === category);
            // Create a new array of questions for the current quiz attempt with shuffled options
            currentQuizQuestions = categoryData.questions.map(q => ({
                ...q,
                shuffledOptions: [...q.options].sort(() => Math.random() - 0.5)
            }));

            const intro = document.createElement('div');
            intro.className = 'text-center mb-8 p-6 bg-white rounded-lg shadow-sm';
            intro.innerHTML = `<h2 class="text-2xl font-bold intro-header">${category}</h2><p class="mt-2 text-gray-600">This section tests your knowledge of ${category.toLowerCase()}. Read each question carefully and select the best answer.</p>`;
            quizContainer.appendChild(intro);

            const form = document.createElement('form');
            form.id = 'quiz-form';
            form.className = 'space-y-6';

            currentQuizQuestions.forEach((q, index) => {
                const questionCard = document.createElement('div');
                questionCard.className = 'quiz-card p-6 rounded-lg';
                questionCard.id = `question-${index}`;

                let questionText = q.question.replace(/^\d+\.\s*/, '').replace(/^Q\d+\.?\s*/, '');
                let questionHTML = `<p class="font-semibold text-lg mb-4">${index + 1}. ${questionText}</p>`;
                if (q.code) {
                    questionHTML += `<code>${q.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`;
                }

                const optionsContainer = document.createElement('div');
                optionsContainer.className = 'space-y-3 mt-4';
                
                q.shuffledOptions.forEach((option, optionIndex) => {
                    const prefix = String.fromCharCode(65 + optionIndex);
                    const optionId = `q${index}_${optionIndex}`;
                    const optionDiv = document.createElement('div');
                    optionDiv.innerHTML = `
                        <input type="radio" id="${optionId}" name="question${index}" value="${option}" class="peer sr-only" ${optionIndex === 0 ? 'required' : ''}>
                        <label for="${optionId}" class="option-label block p-3 rounded-md border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:ring-2 peer-checked:ring-blue-600">${prefix}. ${option}</label>
                    `;
                    optionsContainer.appendChild(optionDiv);
                });

                questionCard.innerHTML = questionHTML;
                questionCard.appendChild(optionsContainer);
                form.appendChild(questionCard);
            });

            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.textContent = 'Submit Answers';
            submitButton.className = 'w-full btn-primary font-bold py-3 px-6 rounded-lg mt-6';
            form.appendChild(submitButton);

            form.onsubmit = (e) => {
                e.preventDefault();
                
                // If the form is not valid, show validation messages and highlight the first error.
                if (!form.checkValidity()) {
                    form.reportValidity(); // Show browser's validation messages

                    const firstInvalidField = form.querySelector(':invalid');
                    if (firstInvalidField) {
                        const questionCard = firstInvalidField.closest('.quiz-card');
                        if (questionCard) {
                            // Scroll to the invalid card
                            questionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            
                            // Add a temporary border to highlight it
                            questionCard.classList.add('border-red-400', 'border-2');
                            setTimeout(() => {
                                questionCard.classList.remove('border-red-400', 'border-2');
                            }, 2500);
                        }
                    }
                    return; // Stop the function here
                }
                showResults(); // Only show results if the form is valid
            };

            quizContainer.appendChild(form);
            quizContainer.classList.remove('hidden');
            startTimer();
        }
        
        function startTimer() {
            timeLeft = 3600;
            timerContainer.classList.remove('hidden');
            if (timerInterval) clearInterval(timerInterval);

            timerInterval = setInterval(() => {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                
                if (timeLeft <= 10) {
                    timerEl.classList.add('text-red-500');
                }

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    handleTimeUp();
                }
            }, 1000);
        }

        function handleTimeUp() {
            const modal = document.getElementById('time-up-modal');
            modal.classList.remove('hidden');
            
            const closeModal = () => {
                modal.classList.add('hidden');
                showResults();
            };

            document.getElementById('close-modal-btn').onclick = closeModal;
            setTimeout(closeModal, 4000);
        }

        function showAllAnswers() {
            // Deactivate any active category buttons and activate the "Show All" button
            document.querySelectorAll('#category-nav .nav-button').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent === 'Show All Answers') {
                    btn.classList.add('active');
                }
            });

            // Hide other containers and stop the timer
            if (timerInterval) clearInterval(timerInterval);
            timerContainer.classList.add('hidden');
            welcomeMessage.classList.add('hidden');
            resultsContainer.classList.add('hidden');
            
            // Clear and prepare the main container for the answer key
            quizContainer.innerHTML = '';
            quizContainer.classList.remove('hidden');

            const reviewHeader = document.createElement('div');
            reviewHeader.className = 'text-center mb-8 p-6 bg-white rounded-lg shadow-sm';
            reviewHeader.innerHTML = `<h2 class="text-2xl font-bold intro-header">All Questions & Answers</h2><p class="mt-2 text-gray-600">A complete review of all questions across all categories.</p>`;
            quizContainer.appendChild(reviewHeader);

            const summaryList = document.createElement('div');
            summaryList.className = 'space-y-6';

            quizData.forEach(category => {
                const categoryHeader = document.createElement('h3');
                categoryHeader.className = 'text-xl font-bold mt-8 mb-4 p-3 bg-gray-100 rounded-md';
                categoryHeader.textContent = category.category;
                summaryList.appendChild(categoryHeader);

                category.questions.forEach((q, index) => {
                    let questionText = q.question.replace(/^\d+\.\s*/, '').replace(/^Q\d+\.?\s*/, '');
                    const summaryItem = document.createElement('div');
                    summaryItem.className = 'quiz-card p-6 rounded-lg';
                    
                    let summaryHTML = `<p class="font-semibold text-lg mb-4">${index + 1}. ${questionText}</p>`;
                    if (q.code) {
                        summaryHTML += `<code>${q.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`;
                    }

                    summaryHTML += '<div class="mt-4 space-y-3">';
                    q.options.forEach((option, optionIndex) => {
                        const prefix = String.fromCharCode(65 + optionIndex);
                        const isCorrect = option === q.answer;
                        const optionClass = isCorrect ? 'bg-green-100 border-green-300 text-green-800 font-medium' : 'border-gray-200 bg-gray-50 text-gray-700';
                        const indicator = isCorrect ? ' &check; Correct Answer' : '';
                        summaryHTML += `<div class="block p-3 rounded-md border text-sm ${optionClass}">${prefix}. ${option}${indicator}</div>`;
                    });
                    summaryHTML += '</div>';
                    
                    summaryItem.innerHTML = summaryHTML;
                    summaryList.appendChild(summaryItem);
                });
            });

            quizContainer.appendChild(summaryList);
        }

        function showResults() {
            if (timerInterval) clearInterval(timerInterval);
            timerContainer.classList.add('hidden');
            timerEl.classList.remove('text-red-500');
            const form = document.getElementById('quiz-form');

            if (!form) return;
            
            score = 0; // Reset score for recalculation

            answerSummaryContainer.innerHTML = '<h3 class="text-2xl font-bold text-center mb-6 intro-header">Review Your Answers</h3>';
            const summaryList = document.createElement('div');
            summaryList.className = 'space-y-6';
            
            currentQuizQuestions.forEach((q, index) => {
                const selectedOptionInput = form.elements[`question${index}`];
                const selectedOption = selectedOptionInput ? selectedOptionInput.value : "Not Answered";

                const isCorrect = selectedOption === q.answer;
                if (isCorrect) {
                    score++;
                }
                
                let questionText = q.question.replace(/^\d+\.\s*/, '').replace(/^Q\d+\.?\s*/, '');
                const summaryItem = document.createElement('div');
                summaryItem.className = 'quiz-card p-6 rounded-lg';
                
                let summaryHTML = `<p class="font-semibold text-lg mb-4">${index + 1}. ${questionText}</p>`;
                
                if (q.code) {
                    summaryHTML += `<code>${q.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`;
                }

                summaryHTML += '<div class="mt-4 space-y-3">';
                q.shuffledOptions.forEach((option, optionIndex) => {
                    let optionClass = 'block p-3 rounded-md border text-sm';
                    const prefix = String.fromCharCode(65 + optionIndex);
                    let indicator = '';

                    if (option === q.answer) {
                        optionClass += ' bg-green-100 border-green-300 text-green-800 font-medium';
                        indicator = ' &check; Correct Answer';
                    } else if (option === selectedOption) {
                        optionClass += ' bg-red-100 border-red-300 text-red-800';
                        indicator = ' &times; Your Answer';
                    } else {
                        optionClass += ' border-gray-200 bg-gray-50 text-gray-700';
                    }
                    summaryHTML += `<div class="${optionClass}">${prefix}. ${option}${indicator}</div>`;
                });
                summaryHTML += '</div>';
                
                summaryItem.innerHTML = summaryHTML;
                summaryList.appendChild(summaryItem);
            });
            
            answerSummaryContainer.appendChild(summaryList);
            
            const submitBtn = form.querySelector('button[type="submit"]');
            if(submitBtn) submitBtn.style.display = 'none';

            quizContainer.classList.add('hidden');
            resultsContainer.classList.remove('hidden');

            const percentage = (score / currentQuizQuestions.length) * 100;
            scoreText.textContent = `You scored ${score} out of ${currentQuizQuestions.length} (${percentage.toFixed(1)}%)`;

            renderChart(currentQuizQuestions.length);
        }

        function renderChart(totalQuestions) {
            const ctx = document.getElementById('resultsChart').getContext('2d');
            if(chartInstance) {
                chartInstance.destroy();
            }
            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Correct', 'Incorrect'],
                    datasets: [{
                        label: 'Your Score',
                        data: [score, totalQuestions - score],
                        backgroundColor: [
                            'rgba(37, 99, 235, 0.6)',
                            'rgba(239, 68, 68, 0.6)'
                        ],
                        borderColor: [
                            'rgba(37, 99, 235, 1)',
                            'rgba(239, 68, 68, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: `Results for: ${currentCategory}`
                        }
                    }
                }
            });
        }

        restartQuizBtn.onclick = () => {
            if (timerInterval) clearInterval(timerInterval);
            timerContainer.classList.add('hidden');
            timerEl.classList.remove('text-red-500');

            quizContainer.innerHTML = '';
            resultsContainer.classList.add('hidden');
            welcomeMessage.classList.remove('hidden');
            quizContainer.appendChild(welcomeMessage);
            quizContainer.classList.remove('hidden');
            document.querySelectorAll('#category-nav .nav-button').forEach(btn => btn.classList.remove('active'));
        };

        init();