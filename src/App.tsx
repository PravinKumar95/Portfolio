import { useEffect } from "react";
import * as React from "react";
const App = (props:any) => {
    useEffect(() => {
        console.log('app mounted');
        return () => {
            console.log('app unmounted');
        }
    },[]);

    return <div>App</div>
}

export default App;