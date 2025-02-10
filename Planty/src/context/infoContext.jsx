import { useState, useEffect} from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { InfoContext } from "./context";

export const InfoProvider = ({ children }) => {
    const [info, setInfo] = useState({});
    const [error, setError] = useState(false);  

    InfoProvider.propTypes = {
        children: PropTypes.node.isRequired,
      };

    useEffect(() => {
        if (info) {
            const apiKey2 = "2466e011a8a341e2a441223702fb2a43";
            const recipeUrl = `https://api.spoonacular.com/recipes/${info}/information?apiKey=${apiKey2}`;

            axios.get(recipeUrl)
                .then((response) => {
                    setInfo(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching recipe information:', error);
                    alert("Ops! Something went wrong");
                    setError(true);
                });
        }
    }, [info]);



    return (
        <InfoContext.Provider value={{info, setInfo, error, setError}}>
            {children}
        </InfoContext.Provider> 
    )

}

