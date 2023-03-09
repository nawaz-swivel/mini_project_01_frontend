import React, {useContext, useState} from "react";
import {TuitionContext} from "../../others/Context";
import {createTuition} from "./helper";

const CreateTuition = () => {
    const { dispatch } = useContext(TuitionContext);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    return (
        <div>
            CREATE TUITION
            <section>
                <form>
                    <div className="form-group">
                        <label htmlFor="nameInput">Tuition Name</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Enter tuition name"
                               value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="locationInput">Location</label>
                        <input type="text" className="form-control" id="locationInput" placeholder="Location"
                               value={location} onChange={e => setLocation(e.target.value)}/>
                    </div>
                    <button
                        style={{marginRight: 10}}
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => createTuition(e, name, location, dispatch, setError, setSuccess)}
                    >
                        Create Tuition
                    </button>
                    {
                        success ? (
                            <p className='success-msg'>{success}</p>
                        ) : null
                    }
                    {
                        error ? (
                            <p className='error-msg'>{error.message}</p>
                        ) : null
                    }
                </form>
            </section>
        </div>
    );
};

export default CreateTuition;
