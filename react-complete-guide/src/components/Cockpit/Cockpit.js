import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
      console.log('[cockpit.js] hasEffect');
      //http request is ok
      setTimeout(() => {
        alert('Saved data to cloud');
      } ,1000);
      return () => {
        
        console.log('[cockpit.js] cleanup work in useEffect');
      } //return runs after the render cycle
    }, []);

    useEffect(() => {
      console.log('[cockpit.js] 2nd useEffect');
      return() => {
        console.log('[cockpit.js] cleanup work in 2nd useEffect');
      };

    });

    // useEffect() ok to call again

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
}

export default React.memo(Cockpit);