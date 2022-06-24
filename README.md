# React app setup

- npx create-react-app newsiesigor
- cd into folder 
- npm start 
- tidy up App.js and index.js , delete logo.sv 
- remove css from index.js and App.js


GO TO:
- create components folder , pages and layout
- import { Header, Footer } from './layout';     in APP.js
- layout Header and footer -> create index.js 3x 
- export in global and fill detail in the rest(footer and header)


- copy stuff from repot to Header and footer 
- add css and import it
- import Header and footer in App.js
I think next step:
- - `npm install `
- `npm install react-router-dom@6`  (REACT ROUTER routing library for React)
- add Footer into fragment in App.js
- add Header to fragment App.js 
- screenshotr of code copy and paste here 3 x 

- create 2 pages, Home and About 
- inside `rfce + enter ` and update Home and About  (make sure to change function to const Home ())
- create global index.js and export Home and About 
- import Home and About in App.js ( add them to fragment and comment out for now)
- `React Router documentation !!!! so good to folllow along ! `
- add/import Browser Router to index.js and add inside over <App /> ( We have access to many hooks and actions/functions)
- App.js `import { Routes, Route } from 'react-router-dom';` + add them insige fragment in App.js
- add Route in Routes `<Route path="/" element={<Home />} />` 
- remove Home and about from fragment as they are alteady in ROute path, you can check localhots3000/about it is working now 
- move them between Header and Footer 
- we can implement 404 
- add NotFound in pages, export in global
- import in APp.js and add in Route 
- check if working 

-  add screenshot header initial value 
- add css 
- add screenshot with li a href 
- ISSUE : it refreshes all the time when changed page 
- FIX: use Link 
- `import { Link } from "react-router-dom";`
- replace a href with Link to (check page) it does not refresh! 
- NavLink is better coz it has active !
- change Link to NavLink 
- copy paste from my repo 


## Create Back Button 
- create BackButton component + index.js + global index.js
- copy index.js BackButton 
- we need useNavigate hook (documentation below )
- `https://reactrouter.com/docs/en/v6/hooks/use-navigate`
- add BackButton in Header + import














- create component Navbar and index.js
- Navbar/index.js `rfce + enter `
- update function name and export + return h1
- App.js add Navbar/ and add import on top
- App.js tidy up, add fragment, remove App.css 
- `npm install `
- `npm install react-router-dom@6`  (REACT ROUTER routing library for React)
- componments 
- Navbar -> create `NavLink to ..` (compy from my repo)


- add some routes Navbar to App.js
- create folders layout, components, pages, tests 
- each folder has global index.js and folders inside (layout(HEADER, FOOTRER), pages (Homepage, about)) + each has index.js

- layout add style.css file to Header and footer and style them 
- layout add test.js to Header and Footer 

- global index.js export default as 
- pages and layout to do first 
- connect App.js to pages and layout
- `npm install react-router-dom@6`
- Footer check (simple copy fron nav-v6 repo and add tests and css)
- Header fix stuff and add Navlink (imort anything if apply e.g. BackButton) Add CSS 
- 




- components 

