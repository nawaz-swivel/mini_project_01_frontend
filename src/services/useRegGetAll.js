import React from "react";
import REGISTRATION_API from "./registration";

export default function useRegGetAll(url) {
    const isMounted = React.useRef(false);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        isMounted.current = true;
        async function init() {
            try {
                const response = await REGISTRATION_API.get(url);
                if (response.status === 200) {
                    if (isMounted.current) setData(response.data.data);
                } else {
                    if (isMounted.current) setError(response.data.message)
                }
            } catch (e) {
                throw e;
            } finally {
                if (isMounted.current) setLoading(false);
            }
        }

        init().then(() => {
            console.log('Data fetch successful')
        });

        return () => (isMounted.current = false);
    }, [url]);

    return { data, error, loading };
}
