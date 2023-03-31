import React from "react";
import {TUITION_API} from "./tuition";

export default function useTuitionGetAll(url, token) {
    const isMounted = React.useRef(false);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        isMounted.current = true;
        async function init() {
            try {
                const response = await TUITION_API(token).get(url);
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
