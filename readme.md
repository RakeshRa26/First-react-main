PAckage manager
-npm
-pnpm

vite code install
-npm i pnpm -g
-pnpm create vite
-run the url (http://localhost:5173/)


:- Never chance the anythings of node_module and package.json and pnpm-lock.yaml files

next.js Develop website

# Frontend with React
- DOM (Document Object Menupaliting)
- Keep everything inside `src` folder
- Use `public` folder unless you need to load   some static files sllike css/images



# React Component Rule
-It should be always a js/ts function 
:-function name must always start with capital letter Alphabet then always return




# Twailend
 Website for Icon
    - REact Icon
    - Iconify

    logo
    - unsplash


    Designing Platform
    -Dribbble
    -hyperUI

# React Props and state
-**Props**
- Any data passed as an argument or  parmaa to the component
- It's of thpe object
- Props are readonly 

function ComponentName(props: Readonly<{propsName: DataType}>) {
  return (<>Jsx</>)
}
or 
function ComponentName({propsName, ..., children}: Readonly<{propsName: DataType, ..., children: ReactNode}>) {
  return (<>Jsx</>)
}

// usages
<ComponentName propsName={value} ...>
  children
</ComponentName>

-Every components have a default props named 'children'

## React webhook
- Webhook are the special functions given by react that helps you to maintain different states of the component
- All hooks starts with `use` keyword
- Hooks are only allowed in react functional component 
- types
  **useState:** Maintains the state of the component
  **useEffect:** handle the render or state/props changen of the components

  // Effect hook

      import { useEffect } from "react";
      
      useEffect(() => {
        console.log("I am aleays a execute.")
      })

      useEffect(() => {
        console.log("Only esecute once when the component is loaded first.")
      }, [])

      useEffect(() => {
        console.log("only when the credentials state is changed.")
      }, [credentials]);



  **useContext:** to maintain the golobale state in teh react project
  **useCallback & useMemo:** used to maintain and optimized the react project states
  **useFef:** to reference to any html element(mainly form block) form the child components or of different level


  # hook form hanlding 
  -React hook form


  ## Task
  - *Iontrolled Input*
  - *Incontrolled Input*