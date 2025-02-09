import { useState, useEffect} from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { InfoContext } from "./context";

export const InfoProvider = ({ children }) => {
    const [info, setInfo] = useState({});

    InfoProvider.propTypes = {
        children: PropTypes.node.isRequired,
      };

    useEffect(() => {
        if (info) {
            // const apiKey="408814722ef44110b32ac948f30d3c14"
            const apiKey2="2466e011a8a341e2a441223702fb2a43"
            const recipeUrl="https://api.spoonacular.com/recipes/"+info+"/information?"+"apiKey="+apiKey2

            axios.get(recipeUrl).then((response) => {
                setInfo(response.data)
                console.log(response.data)
               })
        }
    }, [info])

    return (
        <InfoContext.Provider value={{info, setInfo}}>
            {children}
        </InfoContext.Provider> 
    )

}

