# My notes:
CSS-
1. , - a way to imply css styling on multiple elements.
   syntatx: .h1,h2,span,img

2. a. position: relative- gives you access to four diffrenet properties.
   top, bottom, left and right. if the element is on position relative,
   and you will give it left 20px, the element will move from it's orignall
   position 20 px.

b. position: sticky- good for nav bar with top: 0.
the position will "stick" to it's place.

## END OF CSS
---
BASIC JAVA SCRIPT-

1. OBJECT literals-

there are 2 ways to change object property value
let Aviv = {
name: `Aviv`,
age: 28,
city: `tel-Aviv`
}
A# -
Aviv.age = 30;
--equivalent to:--
B#
Aviv[`age`] = 30;
object can contain an array property that has another object in it.
example:
let Aviv = {
name: `Aviv`,
age: `28`,
city: `tel-Aviv`,
friends: [
{name: `shay`, age: `28`},
{name: `ron`, age: `29`}
]
} 

1.a ObjectObject-
if you try to print out an object without first formatting the object as a string,
you'll get ObjectObject error.To see the contents of an object, convert the object to a string,
using JSON.stringify(*objName*)
synatx-
container.append(JSON.stringify(countriesInfo)) 
or 
for…in loop to iterate over the object and see its contents.
for(let key in objA) {
	console.log(key + ":", objA[key]);
}

2. ARGUMENTS-

sometimes we'll need to pass on the function some values.
to do so, we first declare what we want to get IN FUNCTION PARENTHESES.
these are the PARAMETERS.
synatx-
function NAME(name){
console.log(`Good afternoon- ${name}`)
}
we created a _local_ variable called 'name' through function PARENTHESES.
but what's the VALUE of the that variable?
when we'll call the function, we will write the value in the PARENTHESES like this:
NAME(`Aviv`);
output:
`Good afternoon- Aviv`.

<<<>>>
(name) = Parameter - variables we want to get.
(`Aviv`) = Argument - value of that parameter.
<<<>>>

we can also give default values to the PARAMETERS.
synatx-
function Name(name = `Aviv`){
console.log(`Good afternoon- ${name}`)
}
the result would be the same.
BUT, if we'll call the function again, and give it diffrenet values,
those we'll overwrite the default value that we gave before.
synatx-
function Name(name = `Aviv`){
console.log(`Good afternoon- ${name}`)
}
Name(`Ron`);

---

output: "Good afternoon- Ron".
more complex example:
const bill = function(products, tax){
some code...
}
console.log(bill([10,15,30], 0.2))

---

output:
products = an array of 3 products with the values of 10,15,30.
tax = 0.2
the values were given in the console log to the function bill

3. ADDEVENTLISTENR-

divides into 2 sections:
event- "how it will happen?" example: .onclick
listenr- "what will happen?" example: .someFunction
we use it when there are multiple evenets.
synatx-
posterImage.addEventListener("click", function () {
this.classList.add("increasedImageSize");
});

4. LOCAL STORAGE-
   a small maintained data base (max 10 mb) on the browser. doesn't dissapear if we close browser.
   only if we remove it deliberately.
   diffrenet browsers doesn't have same data. even if it's the same user.
   synatx-
   localStorage.setItem("key","value").
   localStorage.clear(); delete everything.
   localStorage.removeItem("key"). delete one key.
   object.keys(localStorage); return keys.
   LS behaves like an object. object.values(localStorage) returns the values.
   localStorage.getItem("")
   setItem - will add that key to the given storage object.
   getItem - will return the key from the given storage object.

5. JSON-

6. SETINTERVAL-
   set a function that will occur every permanent time.
   synatx-
   setInterval(function () {
   the content of what will happen. example: alert("Blah blah...");
   }, 5000);
   _-every five sec_

clearInterval(#id of interval)- will stop the interval from happening.

7. SETTIMEOUT-
   set a function that will occur _once_ in x peroid of time.
   synatx- same as setInterval.

8. LOUPE BY PHILLIP ROBERTs-
   a website that can give us a showcase of what's happening
   behind the scenes of javaScript.
   functions that are running regulary will take place in 'Call STACK'.
   functions that will take place in the future (such as setTimeout) will wait in 'Web A-P-I'.
   once activated, they will first go 'callBack Queue', check if they have room in 'callStack',
   if so, they will finally get to the Stack and run themeselves.
   why?
   JS can't wait and count by itself when he sees asynchronous functions.
   so he let the browser make the count for him, since he only have ONE THREAD.
   therefore he built the callBack Queue- a place for the browser to wait and count with the function.

9. RETURN-
   stops functions execution
   a given value is returned (we need to store it in a Var sometimes)
   has auto Semicolon ;

10. METHODS-
invoked by .Notation on element it self.
synatx-
const name = `Aviv`;
name.toUpperCase();
console.log(name);
output: `AVIV`

2nd example:
const people = [`mario`, `ron`, `aviv`];
people.forEach(index)
output:
mario 0
ron 1
aviv 2

--- || Kinds of Methods || ---

A. element.append() -

A1. filter- filterize something out of something.
when finds- he will continue to run untill the search is done.
(unlike 'find' method)
syntax-
object.filter(function(object,index,array)) {
   boolean statement (true\false)
}
example:
movies.filter(function(movie,index,array)){
   return  movie.movieDuration > (Number)50
}
if the boolean statment excsits - we'll get the return we asked for.

B. findIndex-
returns the index. if the boolean statment is false we will get -1.
if it will find something, we will get the index...

C. map- takes Array and returns a new one, upon what youv'e asked it to find.
synatx- *map use to create new Arr contains only currencies, from countries DataStructure*:

const currencies = countries.map(countries => countries.currencies);
console.log(currencies)

!synatx example of combinig 2 methods:

const arr = [{ user: "yonatan", age: 30 }, { user: "zipori", age: 20 }]
arr.filter(function (u) { return u.age < 25 }).map(function (u) { return u.user })
output: ['zipori']

D. indexOf-
can tell you the index of איבר in array
syntax-
(nameOfArray.indexOf("איבר"));

E. classList-
will give us all classes of an element.
classList.add: will add another class
classList.remove: will remove class
synatx-
const name = document.querySelector('#name')
name.classList.add(`newClass`);
name.classList.remove(`newClass`);

F. pop-
pop will remove last index from an arr.

G. find-
The find() method returns the value of the _first_ element(returns only 1 element)
in the provided arr,
that satisfies the provided testing function.
If no values matches, undefined is returned.
synatx-
const nameList = nameList.find((name)) => {
return nameList.name === `aviv`
}
console.log(nameList)
output: ["aviv"]

since the boolean statment is true,
and there is an element named "aviv",
we'll get "aviv" as a result. if it hasn't found- undefined.

H. forEach- lop through the entire array and do something.
dosen't return anything.

I. reduce- will reduce all elements in array to a -single- value.
synatx
const result = countries.reduce(
(accumulator, currentValue) =>
return accumulator + currentValue;
}, 0);
accumulator = the total amount after each loop
currentValue = each value that the method is looping through
0 = our starting point. can also be an empty array or an object.

J.
K.
L.

--- || end Kinds of Methods || ---

11. ARROW FUNCTION => - a shorter way to write function code.
example:

const calcArea = (radius) => {
returnn 3.14 * radius\*\*2;
}
*if there is only one PARAM, we can take parentheses off.
** if there is only one line of RETURN statment,
we can take off the return key-word and CB off.

arrow function real output:

const calcArea = radius => 3.14 \* radius\*\*2;

--equivalent to:--

const calacArea = function(radius){
return 3.14\* radius\*\*2;
}



12. THE HEAP- a heap is another meomery storage like stack,
    it's bigger but slower. it can hold more complex types
    like Arrays,Objects and Functions(called Reference Types).
    primitive types(Numbers,String,Boolean,Undefined,Null,Symbols) stored in the stack.
    _2 diffrenet parts of meomery, for 2 diffrenet things._
    primitive types can create a duplicate of themeselves in meomery
    Reference types will duplicate only the pointer
    example:

const scoreOne = 50;
const scoreTwo = scoreOne;
the Stack will look like this:
scoreOne = 50;
scoreTwo = 50;
these are 2 diffrenet variables with 2 diffrenet values (all though they're the same)

---

const userOne = {name: `Aviv`, score: 100};
const userTwo = userOne;
the heap will look like this:
{name: `Aviv`, score: 100};
it will not duplicate it self, only the pointer,
that will now give userOne & userTwo the same values.

END OF BASIC JAVASCRIPT

---

---

ADVANCED JAVA SCRIPT

1. OBJECT [[PROTOTYPE]]-
   Prototypes are the mechanism by which JavaScript objects inherit features from one another.

2. Function Constructor-

3. NEW keyword-

4. **proto**-

5. Spread Operator ... -
   replacement for 'concat'. a way to combine several objects\arrays elements together.
   synatx-
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   -> const arr3 = [...arr1, ...arr2, 5, 6]; <-
   output:
   arr3 = [1,2,3,4,5,6]
   we can also add new elements in an easier way.

const obj1 = {name: 'Aviv'};
const obj2 = {...obj1, location: 'TLV'};
output:
obj2 = {name: 'Aviv', location: 'TLV'};

6. callBack Functions-
a function called as Parameter, within another function.
synatx-
function firstFN(parameter1, parameter2, callbackFN){
   //some code
   ...
   ...

   callbackFN()
}
at the end of the function, we'll call another function,
that in turn might call another function and so on...
we're creating a chain of events.

7. Object.keys(),Object.values(),Object.entries()- 
object doesn't have indexs and "object.length" like arrays have.
therefore, very useful methods (forEach, filter, map, reduce) and even forLoop,
canno't be used on objects. 
if i have an object like this: 
let object = {
   aviv: 28,
   shay: 28,
   ron: 29
}
let keys = Object.keys(object) 
output:
[`aviv`, `shay`, `ron`]
the object transformed to array with the KEYS only.

Object.valus()- excatly the same just with values.

Object.entries()- gonna do both, keys and values together.
example:
let entries = Object.entries(object)
output:
[
[`aviv`, 28]
[`shay`, 28]
[`ron`, 29]
]
so we have an array of arrays, and if I would like to get the age 29 for example,
we'll write:
console.log(entries[2][1])
entries = our object (that is now an Array);
[2] = [`ron`, 29] -> go to 3rd array (0,1,2...)
[1] = 29 -> in the location of 1 (0,1)

8. Promises-
promise is an object. it describes an a-sync process.
has 3 states: pending, fulfilled, rejected.
pending-
fulfilled-
rejected-

definding new Promise:

let myPromise = new Promise((resolve, reject)) => {
   let a = 1+1
   if (a == 2) {
      resolve(console.log"sucsses")
   } else {
      reject(console.log"failure")
   }
}

 -what the promise does-
9. WEB API- 
domain explained- https://www.computerhope.com/jargon/u/url.png
These two URLs have the same origin:

http://example.com/foo.html
http://example.com/bar.html
These URLs have different origins than the previous two:

http://example.net - Different domain
http://example.com:9000/foo.html - Different port
https://example.com/foo.html - Different scheme
http://www.example.com/foo.html - Different subdomain


Application Programming Interfaces (APIs) allows dev's create high-level code 
more easily, taking complex code and providing some easier syntax instead.
example:
electricity supply in your house. when we want to use an electrical device,
we plug it in and it works. we don't have to mess with all the wires behind the wall.

Client side JS-
has many API's available to it — these are not part of JS language itself, 
rather they are built on top of the core of JS language,
providing you with extra superpowers to use in your code. splits mainly to two categories:

Browser APIs- are built into your web browser and able to expose data from the browser
and do complex things. example:
WEB Audio APIs allows us to manipulate audio in the browser. 
in the background, the browser actually uses some LOW-level code like c++.

3rd Party API's- are not built into the browser by default, and you generally have to retrieve
their code and info from somewhere on the Web.
example:
Twitter API allows you to do things like displaying your latest tweets

Path param- in the url, a path by some category
example:
www.web.com/products/*Meat*
Meat = the path param

Query param- in the url, a path by some id/name... in general 
a more specific path 
example:
www.web.com/products/Meat/*Chicken*
Chicken = the query param

10. asynchronous programming-
Synchronous- “occurring at the same time"
Asynchronous- “having each operation started only after the previous operation is completed"

11. Fetch- 
Fetch is the retrieval of data by a software program, script, or hardware device.
After being retrieved, the data is moved to an alternate location or displayed on a screen.

12. ajax- App's are able to make quick, incremental updates to the user interface without reloading the entire browser page.
---
Jquery - 
capturing element= $(#elementID)
capturing input -value- =$(#elementID).val("content")
creating elements = 
let header = $("<h1>Lol</h1>")
let button = $("<button>").text("click me")
let input = $("<input>").val("click me")
-! will not work without-
$("#mainDiv").append(header, button, input)

addEvnetListener= $("#button").on("click", function(){
    some code...
})

}

13. restAPI- 

---

GIT

1. what is GIT? - free and open VCS (version control system). we can save changes
   on our code, and to keep track of the changes with made.

2. Terms
   Directory - folder.
   CD- change directory. move to another folder, with the right instructsions...
   Repository - where we save our projects.
   GITHUB - website where dp's can share their code with each other.
   Clone - Bring a repository that's hosted somewhere like Github,
   into a folder on your LOCAL pc.
   add - Track my files and changes in GIT.
   commit- Save files in GIT.
   push - Upload GIT commits to a remote repository, like Github.
   pull -
   status - shows you all files that has been deleted or changed, but NOT saved in a commit.

## END OF GIT

typeScript

1. basic commands: 
tsc filename.ts - compile file(TSC- typeScriptCompile) (in cmd!)

rm filename - remove file

tsc filename.ts -w - ts is gonna watch our file and warn us from errors live. it will also change instantly filename.*JS*. to exit watch mode press CTRL+C

2. types of var's in TS: 

number, boolean, string, any.
if we want a var to be an array of a specific type, we'll write:

let a: number[] = [1,2,3]. - a is defined to be only an array with numbers
let b: any[] = [1,true,"Aviv"]. - array of any type.

enum- 
 enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

an easy way to declare strings as numbers,
as they get auto numbering even if we wont declare it.
in the example, Down = 2, left = 3, even if we wont set rest of numbers.

void- a function that doesn't return anything. no return keyword whatsoever. 

!- hide error

?- an optional param/type. 

Tuple- syntax: [number,string].
an Arr with *exactly* 2 elements, first is number and the second is a string.

Type Aliases- a fixed structue of types that we want to set up.
syntax-
type Combined = number | string;
function inputs(
   input1: Combined
   input2: number
){
   some code...
}

OOP-

1. Class- is not an object, but a 'map' for defining abillities and characteristic of an object. a way to plan and design how an object will look like.

2. Object- A new object is the execution of a Class plan. 

3. Encpsulation- hiding information to avoid errors and complications.

4. Inheritance- Classes can inherit from one another, if they have similar abillities and characteristic. this way we can save code, and change it in one Class only if we'll need to. 
super class: the class that bequeath(מורישה).
sub class: the class that inherit(יורשת)

4. A. Super keyword- allows: acsses to super class constructor/functions, from sub class scope. acsses to characteristic of super class will only be possible with
keyword 'this', and not super.

5. Polymorphism- A serval Classes has same functionlaity, but it acts diffrently in every Class. based on inheritance. 

Class snynatx example- 

class Person { // start Person class
scope.
/* מאפיינים */
public fullName: string
public age: number;
/* פעולות */
public print(): void {
/* this גישה מתוך הפונקציה למאפייני המחלקה ע"י
/* שימוש במילה
document.write(`Name:
${this.fullName}, Age: ${this.age}<br/>`);
}
} // End Person class scope.

note: in the example we didn't create 2 var's in memory. 
we just sketched them, when we'll create a new object from 
that class, than it will take life and memory in our program.

6. Public keyword- the accsses for Class functionlaity/characteristic is
possible even outside class scope. note: Default state!

Private keyword- the opposite from public...

7. value type- a regular Var, will take place in memory and hold it's value
example:
let num = 3;

8. reference type- more complex var, will point out to the class where it is created.

9. static functions / static properties- a var that is shared with all objects from
a class, but doesn't create itself each object separately. 

10. Abstract class- a very general and basic idea/functionlaity of a class,
that will be extended with his sub classes. you can NOT create new objects
from abstract class. 

11. Interface- a legality (חוקיות) cross classes that has to be exist, if a  
class has keyword I (interface). example:

interface ICircle{
   diameter: number;
}

class someName *implements* *ICircle*{
   diameter -> must have param! 
}

in interface we only define legality, not functionality! (unlike Extend keyword,
that inherit behaivor and actions as well) 
we can define just params and their types. (we can define a param to be a Function,
but that's it.)

---

REACT 
js liabry dev'ed by Facebook, lanuched in 2013, has lots of related liabris so we can develope any type of app we want in a fast & comfortable way. 

1. JSX- JavaScriptXml.
syntax extenion of JS combined with HTML. 
we can write html tags directly in react even though it's a JS liabry (transformed using JSXTransform- build in app in react-create-app)
*notice:* the html tags are not really html. jsx is just a fn call and leans on Babel (JS compiler that takes old JS and transforms it to new JS)
that's the reason we can write html in react.  

JSX is alot faster and takes less files.  
After compilation, JSX expressions become regular JS fn calls.
No need of append() or createElement() methods. 

Disadvantages of JSX:
Synax rules you can't break, more strict (we can't leave tags without their closing)
HTML code must be wrapped in 1 top-level div otherwise- we'll get an error.

2. React component-
UI component that our app will be assembled of.
basically a reuseable fn that returns React element. (with the help of React-render)


3. React defaultProps-
we can define default props for a component for saftey,
whenever some values are missing/undefined. example:

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
     return (
        <div style={styles}></div>
    )
    Card.defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100
}
   <Card cardColor="red" height={200} width={400} />
   <Card />

the 2nd <Card/> component will have the defaultProps we defined,
instead of just being a big null. 

4. React children props- 
we can create a container component that doesn't care what it has inside. example:

function <ContainerComponent>(props){
   return (
      <div className="container">
         {props.children}
      </div>
   )

function App() {
    return (
        <div>
            <ContainerComponent>
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!<button>
            </ContainerComponent>
         </div>
         )
}
what's happening here is that the features of ContainerComponent
will still apply and render reguradless of what it has inside.

5. HOC: React higher order component-
"A function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it"...

6. Render props-
the difference between FN & Component is that a component needs to return JSX.
https://swapi.dev/api/people/1/

7. shallow comparison (===)-
==	equal to
=== equal value and equal type. compares two values for equality **after**
converting both values to a common type.

Primitive types (strings, numbers, booleans)
console.log("Hi" === "Hi")
console.log(5 === 5)
console.log(false === false)
we'll get true for all three.

Complex types (array, object)
console.log({name: "Joe"} === {name: "Joe"})
we'll get false. every object takes a new place in memoery, 
causing react think that they are two diffrent objects.
if we'll check keys and values from objects, and they are the same,
then we'll get true because the compariston simply checks every key and value content.
example:
console.log(obj1.name === obj2.name) - true.
console.log(obj1 === obj2) - false.

**two objects/arrays define in seperate places are not going to be shallowly equal.**

another case:
const obj1 = {name: "aviv"};
const obj2 = obj1;

console.log(obj1 === obj2) - true. because they point for the same place in memory.


--REACT Hooks (2019)--
fn's that gives acsses to the lifeCycle & state of the component,
using fn component (instead class component). 

[A] useState- 
*can only be written at the top level of a component (outside 'return')
*we DO NOT use useState, if we're not going to use & show the first param
*if we want to store 2 diffrent values in state, we would write a new useState.
*has 2 param's already destructed from an array, and an inital state.

1st param: something that we want to change, make it *reActive*,
so it will respond automaticlly to any change of it's value, and rerender to ui. 
2nd param: a FN that updates our first param, changes it acordding to our request/fn that we'll write.
3rd param: an inital state. the inital value we're starting from. EXAMPLE:

const initailState = 0;
const [likes, setLikes] = useState(initailState)

likes: param that updates/changes through setName, and re-renders to the DOM **AUTOMATICLY** everytime setLikes is triggred.
this is what makes useState powerfull and unique. 
likes is what we'll show back to UI.

setLikes: FN that updates likes everytime we call it.
we can look at setLikes as the father of likes.
if we want to change likes value, setLikes can do that for us.

initailState: the default value, where we start from (in this case- integer 0).

[B] useEffect- 
allows us to perform side effects from fn component like:
Api calls
Manipulatiing DOM directly and etc...
How often the component renders isn't something we control — if React wants to render the component, we can't stop it.
therefore useEffect runs side-effects *independently* of rendering.

***by default, React runs useEffect after every render — including the first render**
**rendering occurs in the first lanuch of the component, and then whenever there's a change in state/props (whether it's global or local state)**
*Even if only one dep's changes, useEffect will still be triggered.
*If dep's change couple of times at once, still rerendering will ouccur once. 

useEffect has 2 params:

1st: Callback fn.
2nd: Dependencies- an array with data\elements that on change, will trigger useEffect callback FN again. synatx-

useEffect(()=> {
 [A]
}, [B])

if the dep's (B) is not defined, useEffect callback fn (A) will be called every render.
if dep's is defined to be an empty arr ([]), (A) will be called once, when component mounts/loadtime. 

useEffect Clean up fn-
if we'll try to change state of a component after it's been unmounted and unavailable, we'll get memoery leak error.
common reasons for this error are that we didn’t unsubscribe to a websocket component, or this were dismount before an async operation finished.
synatx-

useEffect(() => {
    API.subscribe()
    return function cleanup() {
        API.unsubscribe()
    }
})

[C] useContext (lesson 43, 01:59:00)-
if we want pass data between siblings component,
and avoid 'Prop Drilling'(passing data to components again & again from parent component),
we can use useContext.
it allows us to pass data directly to the component we need, with no mediators (מתווכים)

steps:

1) export const ContextName = createContext(); -
giving a name to what we want to pass(CounterContext, ThemeContext, DateTimeContext and etc...) notice: we need to export it so we can use it.
needs an inital state for start, even empty object/"" will do 

const ContextName = createContext({})

2) ContextName.Provider- createContext gives us a pair of functions,
Provider & Consumer
the provider is the wrap around the components we want to eventually use
the data that are passed. for exmaple:

export default function App(){
   return (
      <ThemeContext.Provider>
      <Layout>
      <ThemeContext.Provider/>
   )
}

now ThemeContext is availabe in Layout Component.
whice is the entire App.

2.1) ContextName.Provider value={} - something is ready to be provided to Layout component. but we need to initial what we want to pass, and doing it by 'value={}' in the Provider. example:

   <ThemeContext.Provider value={dataToPass}>

2.2) ContextName.Consumer

3) useContext()- final step is to use the context in the component we want, in this case Layout component.
in the Layout component we store the state/value we wanted to use in a var. example:

export function Layout(){
   const passedValue = useContext(ContextName)
   return (
      {passedValue}
   )
}

**Important: passedValue is eventually equall to the Provider value={}**
so if Provider.value={5}, passedValue = 5 as well. 

[D] useReducer()-
a way to manage more complex and global state with the help of useContext


const [state, dispatch] = useReducer(reducer, initialArg, init); 

[E] useRef()-


--end of REACT Hooks--

3. Component Life Cycle-
A- Mounting: first render/load to UI
B- Updating: if props/state of the component changes
C- Unmounting: if the component deleted and removed from UI



6. React Routes
Router-
*needs to wrap everything.
Link-
*where to go & how to go
Rotues- 

7. custom hook- (lesson 42, 49:00)
based on other core hook, we can create a hook of our own.

----
Redux + Redux Toolkit {lessons 63, 2:20:00 + lesson 64 }
install- 'npm install redux react-redux @types/redux @types/react-redux'

a global JS state manegemnt liabry for apps, fits to all kinds of UI framework but mostly used with react. 

*1 Way data flow- https://miro.medium.com/max/1400/1*lTQrztCHZ3sjtGu_waFMVg.png
the STATE gets rendered in a => VIEW (return() statemnt from component),
triggers an => ACTION to change the STATE,
the change in the state triggers a change in the => VIEW.
STATE => VIEW => ACTION => STATE => VIEW and so on...

1. Store- one single soruce of truth. we can store anything that represnt our data (numbers,arrays,objects,booleans...)
2. Action- An object that contains the type of the action (event) and an OPTIONAL payload.
example:
export const ACTIONS = {
  PRODUCTS: {
    ADD_PRODUCT: " ADD_PRODUCT",
  },
3. Reducer- A fn (event listener) that takes 2 arguments (currentState, action) and,
depending on the action type (e.g., add or remove), 
will make a new state with the new changes and return the new state.
example:
function addProductReducer(currentState, action) = {
  const newState = [...currentState, action.payload]
  return newState
}
4. Action creator- A fn that creates actions is useful when you want to create dynamic actions.
5. Dispatch- This is the ONLY WAY to update the state.
store- takes the current instance of the store as an arguement (using spread operator ...), and returns the updated store.
6. Selector: A fn that allows you to select a specific value or data from the store.


*in redux we have multiple reducers, each resposinble to update a slice of the store. 
*reducers are pure functions
*they get the current state instace, and return the updated one. 

Steps in Redux:
A. Design the store- decide what we want to keep in the store
B. Define the actions- what are the actions that the user can perform in this application
C. Create a reducer/s- take an action and return the updated state
D. set up the store

Steps in Redux ToolKit:

1. configureStore: create the global state store under Redux -> Store folder.

const store = configureStore({
   reducer: {
      example: exampleReducer
   }
});

' export type RootState = ReturnType<typeof store.getState>; '
configure the type of the RootState.
' export type AppDispatch = typeof store.dispatch; '
configure the type of the store dispatch.

these exports are more typescript issues and we can do them automatictaly. 

2. Hooks: we need to wrap react hooks useDispatch & useSelector with new types.

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: typeUseSelectorHook<RootState> = useSelector;

3. Provider: wrap Provider from "react-redux" around App componnent in index.tsx
<Provider store={store}>
<App />
</Provider>

4. CreateSlice: create a 'slice' of the global state so changes will be more effective and spesific, under Redux -> Store -> Reducers folder. 

A) Create slice INTERFACE
B) Create slice INITIAL STATE
C) Create the slice itself by createSlice method object.

const exampleSlice = createSlice({
   name: "example",
   initalState,
   reducers:{
      nameOfReducer: (state: exampleState, action: PayloadAction<examplePayloadType>) => 
      { state.example = action.payload }
   } 
})

*the state gets our interface as a Type,
*the action always gets PayloadAction as primary type,
*but the inner type depends on the actual payload we recieve (string, number, object) 
then we set the new state to be the payload

D) Export: we destruct our reducer from slice.actions, where all of our reducers are held. 

export const { nameOfReducer } = exampleSlice.actions;

5. Dispatch: in a componnent,
we can dispatch the reducer we've created.

const dispatch = useAppDispatch();
<Button onClick={ (e:any) => {
dispatch(nameOfReducer(e.target.value OR any other payload) ) 
}}> </Button>

6. Subscribe: In whice component the new state will be displayed? 
this is where the actual effect takes place and the ui changes.

export function SeeNewState(){
   const newState = useAppSelector((state) => state.stateSliceName.NameOfReducer);

   *this line means, go to the global store, 
   grab the stateSlice i want, 
   let me be subscribed to any changes that my reducer will cause. 

   return (
      <h1>{newState}</h1>
   )

}





---
Conditional rendering
1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on a condition of some sort

2. When would you use &&?
When you want to either display something or NOT display it

3. When would you use a ternary? ( ? : !)
When you need to decide which thing among 2 options to display
? if
: else
! not/oppsite

4. What if you need to decide between more than 2 options on
   what to display?
Use an `if...else if... else` conditional or a `switch` statement
 unlike if statements ternary is used inside the return statement

example:
--if statments--
   let someVar
    if () {
        someVar = <SomeJSX />
    } else if() {
        
    } else {
        
    }
function App() {
    return (
         --trenary-- <div>{____ ? <SomeJSXElement /> : <SomeOtherElement>}</div>
    )
}


Deprecation- the process of taking older code and marking it as no longer being useful within the codebase, usually because it has been superseded by newer code. The deprecated code is not immediately removed from the codebase because doing so may cause regression errors.

---
Node.js
run-time enviorment for JS outside the browser. more common for backend systems. 

node.js version wheel 3.2.1-
1) Patch: bug fixes.
2) Minor: new functionaliy that still fits old code.
3) Major: breaking changes. 
^)  when u restore a node moudle- use the most updated patch and minor version so i'll have bug fixes + new features
~) when u restore a node moudle- use the most updated patch version so i'll have bug fixes. 

packge-lock.json- 
the exact versions of the moudles we worked with on our project, and not different and more updated versions.


1. To run your code in terminal- 'node fileName'
2. Create new moudle- 'npm init'
3. 'entery point' - the main file that will run and also can intergrate other files. 
4. 'scripts' in packge json- custom commands that the author writes, and do stuff. (echo=output)
5. moudle.export = functionName - export a fn so it can be used in other files. 
const functionName = require() - import an fn so it can be used in other files. 
6. http.createServer- node core moudle that creats a server.
syntax-
const http = require("http") - importing the core moudle createServer via http.

http.createServer- the fn itself.

createServer is a call back fn that has:
a. req(aka request)-
b. res(aka response)- 
both has lots of built in methods that can operate on the request and response. for example:

res.send-("server is up") ends the coming request and return something to the client. in this case a string.

server.listen(2500)- port number, now 'listening', means the server is open for request and response via port 2500. 

7. express - faster way to create a server. express ia an object full of methods that we can use relating server request and response. 
syntax-
const serverName/app = express()

8. app.get- exposing an entry point- a path that the user will get to in the browser/app/web.
example:
app.get("/login,") - the user will be navigated to / login page/section.

9. res.json- most common way to comuunicate with client. cannot be used twice and send to the client 2 res.json unless it's in a diffrent code block. example:
res.json({message: "authroized"})

10. app.use() / Middleware- if we have 2 entitys that communicate with one another (for example server & client) and there's something between them, that's Middleware. like a door u must enter.
app.use() - a code block that the user will face everytime he switches paths in our app. if we specify a path, the user will face it only in the path that we wrote. example: 
app.use(/login, req, res, next){
   return res.json({message: hey})
}
the user will get 'hey' message only when trying to reach login path.
important- the user will not get to login page eventually because there is no 'next()' method. 

if we want the user to continue to it's relevant path, we need to use 'next()' method.
if we want him to stop, we can use 'return res.json'. (like the message example above)
if we leave it blank, with no code, he will get stuck in our middleware, hanging in the air.

-*Middleware- functionality that will take place across several entry points/paths, but under one single place (app.use)*-
instead of writing them over and over again,
we can write middlewares as functions, and place them directly in app.use
example- 

app.use(ourMiddlewareFN)

function ourMiddlewareFN(){
  console.log(req.url)
  next()
}

output: /someURLadress
we'll get url adress to the console whenever the user switches path in our app,
no matter where he goes (because we didn't speisify a path for our middleware).

11. express.Router() lesson 48 2:58:27-

generally we don't 'spill' all of our entry points in our root/main file.
we need to divide them into sub-files, and create abstractions, hierarchy. 
therefore we use router.get/post.
this will create additional layer, another path to get to the relevent page. 
to use Router we need to do couple of things:

-in our products sub-file- 

roter.get(/findProduct, someHandler)

function someHandler (req, res, next){
   res.json({ p: "1" , message: "p1 found"})
}

module.exports = { router }
--- 

-in our root file- (using products example):

A) const {router: productsRouter } = require("./routes/products") -
importing our router from the sub-file location, so we can use it's routers.

B) app.use("/products", productsRouter) - navigate our client to the relevent code block/page/functionality 

router.use - middleware that is relevent only for our router.get entery points.
app.use - relevent for the entire app (only if it's written in our root file)

12. process.env- file with keys and values that we don't want to be exposed globaly like username, password, port... 
'npm install dotenv'
require("dotenv").config()
filename: ".env" - will be created under node_moudles.

13. POST- used to send data to a server to create/update a resource. Data is not displayed in the URL
GET- is used to request data from a specified resource. we can simulate GET request through the URL (example: http:localhost:2500/login?username=aviv) but we -can't- do it for POST. therefore we use...

POST man- simulate post request to a server without frontend framework. 
the data we send (mostly called payload), body of data, for exmaple: username & password

14. body-parser- When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object.
"npm i body-parser"
const bodyParser = require('body-parser')

15. req.body - sending data back to server, then server sends it to user

Joi-
https://joi.dev/api/
npm install joi
const Joi = require ("joi")
joi lets you describe your data using a simple, intuitive, and readable language.
if we want data from user and we need to define what kind of data, we can use joi.

implementaion:

A) declare joi object schema validation: 

const changePasswordSchema = Joi.object({
   password: Joi.string().min(8).max(16).required()
   email: Joi.string().min(8).max(16).required()
})

(this means:
password must be a min of 8 and max of 16 chararts, and must be filled (required)
email must be a valid email acordding to joi requirements (@, .com, and etc...))

we can also create an object of schemas. example:
const schemas: = {
   createProduct: Joi.object({
      name:...
      price:...
   })
   changePassword: Joi.object({
      username:...
      password...
   })
   }
}

B) create a middleware, destruct as the error as follows:

function validatePasswordMiddleware(req,res,nest) {
   const {error} = changePasswordSchema.validate(req.body) //this means our request data (body) is equal to our joi validation. our joi validation expect password and email. 
   if (error) return res.json(error.message)
   next()
}

export and import...
module.exports = { validatePasswordMiddleware }
{ validatePasswordMiddleware } = require('./fileName')

C) plant in the app.use/ router.get/post
router.post("/change-password", validatePasswordMiddleware)

we can create a general validation. very high order fn...

function generalValidation(validatorKey) {
    return (req, res, next) => {
        const reqKey = req.method === "POST" ? "body" : "query"
        if (!schemas[validatorKey]) {
            return next(new Error(`There is an entry point without validation /${req.method} ${req.baseUrl}`))
        }
        const { error } = schemas[validatorKey].validate(req[reqKey])
        if (error) return next(new Error(error))
        return next()
    }
}
module.exports = { generalValidation }

and and then implement in middleware:
{ generalValidation } = require('./fileName')

router.get("/stats", generalValidation("stats"), statsHandler)

*validatorKey parma = "stats";

Error middleware-
we can create a general error middleware that the user will counter everytime there is an error, no matter when it occured in the app. 
*this middleware will always be the last middleware in our root app*

app.use(error, req, res, next) => {
   console.log(error, req.token)
   res.status(400).res.json({message: "something went wrong!"})
}

this way we can control the error message we want to present, so the user will not receive sensitive info. 


16. Req, Res, NextFunction, Lesson 50- Api & client-
 we can import an interface for these methods through import {Request, Response, NextFunction } from "express". 

17. JWT- Json Web Token. lesson 50 02:20:00

npm i @types/jsonwebtoken --savedev
import jwt from "jsonwebtoken"

when we communicate with a server there are usually 2 stages:

a) Sign in- we send username & password, and the server checkes if we are -authorized-.
if we do, we'll get JWT.
once we receive it, it's signed. if we try to use in another PC, or with a different username\password, the JWT brekas and changes to something else automaticly. 

b) Verification- whenever we want to get data from a server, the server checks our token to see if we are -verified-. if we do, we'll get the data we wanted (using Next() method for example).
this action we'll take place everytime we switches paths in the app/web. signing in on the other hand we'll only take place once. 
the tokens are kept in 'secret', a secured section in the server. for example '.env' file
if we change the secret/payload and the server refreshes, the token is expired. 

18. jwt.sign()- receive:
const token = {expiresIn:"1h": payload: {...username, password:null } ,procses.env.SECRET } 
relying on these params we'll get a custom jwt.
all that's left is to send it back to the user with res.json({session: token})

19. jwt.verify()-

export default function verifyToken(req, res, next) {
    const authorization = req?.headers?.authorization;
    jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
        if (err) {
          return next({ ...err, status: 401 })
        } else {
           return next();
        }

20. 
---
SQL Lesson 53 3:00:00

 DB server-
 level 1: *schema's* manipulation: deciding how we want to *arrange/showcase* our data. collection of tables -> coluoms-> rows...

 level 2: *data* manipultaions- create, delete, get, search...

 level 3: security groups & users.

 Queris: questions that will get the data for us. 
 SELECT- what do you want
 FROM- where do you want it from
 WHERE- the condition. 

 smiple query example:

 SELECT id, first_name
  FROM northland_custmors
   WHERE company = `Company A`

 SELECT id, first_name: give me id and first_name data
 FROM: from the northwind_customrs file
 WHERE: that their company equels/matches  `Company A`.

CONCAT: can take sevral columns and combine them into one. example:

SELECT 
    customers.company as companyName ,
    CONCAT(customers.first_name,"__",customers.last_name) 
    as fullName
FROM
    northwind.customers

as= customers.company will now be presented as companyName (aka ALIAS)
CONCAT= will combine first_name & last_name as fullNamr with ___ seperation.

COUNT: can count the number of data in the wanted colum. example:
COUNT(ship_city) 

disticnt: return only unique results, that doesn't repeat themselfs. example:
distinct(ship_country_region)- output:
USA
count(distinct(ship_country_region))- output:
1

like: return data that starts,ends, or includes a word or a letter. example:
product_name like '%Mix'- ends with the word "Mix"
product_name like 'Mix%'- starts with the word "Mix"
product_name like '%Mix%'- includes the word "Mix"

in: return data that has spesific name in spesific colum. example:
product_name in ("or","guy","aviv")- return one or all of these names if they exist in product_name.
*like is -incase- senesitve. 

REXEP: regular expression. just like 'like' but no % involved. example:
'^filed|mac|rose'
give me some data that starts with the word filed / mac / rose. 
"[gim]e"
give me some data that has either G or I or M before letter E.
"[a-h]e"
all letters between a to h before letter E.
$- end

ORDER BY- will sort data by the coluom we choose. example-
SELECT *
FROM northwind.customrs
ORDER BY customer.id DESC
will sort all northwind customrs id's from highest to lowest

DESC- sort from last to first (alphabeit)

BETWEEN- WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01' 
give me the people(or data) who were born between these dates. 

NULL- we can get data that is missing (null) 
WHERE phone_number IS NULL
give me all custumores that doesn't have a phone number. 
IS NOT NULL- the oppsite. 

UPDATE- we can update data. example
UPDATE 'northwind.products'
SET
'description' = 'blahblah'
WHERE
'id' = '1';

Functions-
AVG-
 SELECT 
    product_name, standard_cost
FROM
    northwind.products
WHERE
    standard_cost > (SELECT 
            (AVG(standard_cost))
        FROM
            northwind.products)
ORDER BY standard_cost DESC;

return all product names & their cost if they're higher than the AVG standard cost, and order them from highest to lowest. 

GROUP BY- order data by a colum without duplications. example:

SELECT 
    ship_city, COUNT(*) AS NumberOfOrders
FROM
    northwind.orders
GROUP BY ship_city

return the number of orders from each ship_city 

HAVING- can filter more data after using GROUP BY


LIMIT- limit the results we'll get. (limit is always last in the query)
LIMIT 6, 3
skip the first 6 results, and give me the 3 results afterwards (aka offset)

INSERT- 

INNER JOIN- 

DELETE- 


---
Socket API-
a two way communication between two programs running on the newtwork. like a listenter on both sides, 
that without a click knows apply 
Socket.io- a libary for both client and server 

 ---
DOCKER-

 ---
 ---
Mongo DB-


 ---
 ANGULAR
 1. 
 
 
 ---
 78, date: 5.10.22, time in record: 5:24:00
firebase hosting:
steps to upload project:
open gitbash terminal in the root project directory
1.install firebase ( supposed to installed globaly)
2. npm run build
3. firebase login (follow instructions...)
4. after logged in, firebase init
5. after ready, pick storage configure a security rules... with space
6. IMPORTANT- don't pick public directory, type 'build'
7. configre SAP (yes)
8. set auto updates? no
9. overwrite? no
10. firebase deploy



---
General Nots:

Abstraction- is used to hide background details or any unnecessary implementation about the data so that users only see the required information. It is one of the most important and essential features of object-oriented programming.

interface- is a description of the actions that an object can do... for example when you flip a light switch, the light goes on, you don't care how, just that it does. In Object Oriented Programming, an Interface is a description of all functions that an object must have in order to be an "X". Again, as an example, anything that "ACTS LIKE" a light, should have a turn_on() method and a turn_off() method. The purpose of interfaces is to allow the computer to enforce these properties and to know that an object of TYPE T (whatever the interface is ) must have functions called X,Y,Z, etc.

- you can give an id directly to sub-elements. example: give an id to table row,
  instead of table head and then table body and so on...

- subset- a part of something and NOT the whole array/object/elemenes...
הזחה- movments and shifts of arguments and param's

Rendering Engine – this takes HTML code and interprets it into what you see visually. For instance, a <b> tag would be interpreted by the rendering engine as a set of instructions to make the text inside of the element bold.

-six `false` values:
0
undefined
null
""
false
NaN

Coding Notes:
$ dot notation .value = mostly for inputs! there is no such thing h1.value. there is h1.innerText
$ to be declarative and clear as much as possible.
$ high standarts writing, sticking with gal technique.
$ validations!
$ syntax- never forget ; spacing when needed ;,
$ DRY - don't repeat yourself


github

clone--
1. Open a new folder
2. Clone link from the relevant repo(sitory) from main page of repo
3. open terminal
4. make sure you're on the right folder
5. git clone "url" (from repo)
6. open integrated terminal - right click on the relevant sub-folder
7. "npm install" (download all folders from ID/json.package)
8. "npm start"

upload new project-- (lesson 44)
1. open new folder
2. create file.js tease
3. git init
   git commit -m "gitTease"
4. git add .
5. git push origin head to remote repo url
6. exit to new bracnh- git checkout -b "branch_Name"
git add .
git commit 
8. git push origin head
back to github.com
click on compare and pull request in green



Update current repo
1. git add .
2. git commit -m I've updated something
3. git push origin head

