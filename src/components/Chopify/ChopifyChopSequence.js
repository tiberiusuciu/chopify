import React, { Component } from 'react';

import styles from '../../styles/Chopify/Chopify.css';

class ChopifyChopSequence extends Component {
    
    on_check_change(e, id, onToggleName, onToggleFade) {
        if (e.target.value === "name") {
            onToggleName(id, e.target.checked);
        }
        else if (e.target.value === "fade") {
            onToggleFade(id, e.target.checked);
        }
    }

    gen_fade_pill(s) {
        if (s.addFade) {
            return (
                <div className={styles.chopify__basic__pill + " " +  styles.chopify__fadepill}>
                    <div className={styles.chopify__fadepill__start__text}>
                        Fade-In
                    </div>
                    <input className={styles.chopify__fadepill__start__input} type="text" placeholder="hh/mm/ss" />
                    <input className={styles.chopify__fadepill__end__input} type="text" placeholder="hh/mm/ss" />
                    <div className={styles.chopify__fadepill__end__text}>
                        Fade-out
                    </div>
                </div>
            )
        }
    }

    gen_name_pill(s) {
        if (s.customName) {
            return (
                <div className={styles.chopify__basic__pill + " " +  styles.chopify__namepill}>
                    <div className={styles.chopify__namepill__label}>
                        Name
                    </div>
                    <input className={styles.chopify__namepill__input} type="text" placeholder="MY Chopped Song" />
                </div>
            )
        }
    }

    generateTrashButton(deleteMode, id, onDeleteSequence) {
        if (deleteMode) {
            return (
                <div onClick={() => {onDeleteSequence(id)}} className={styles.chopify__timepill__trash + " " + styles.chopify__timepill__trash__active}>
                    <img src="/images/trash-icon.svg" />
                </div>
            );
        }
        else {
            return (
                <div className={styles.chopify__timepill__trash}>
                </div>
            );
        }
    }

    begin_time_change(e, args) {
        console.log("e", e);
        console.log("e.target", e.target);
        console.log("e.value", e.value);
        console.log("e.value", e.target.value);
        
        console.log("args", args);
        
        
        
        
    }
    
    render() {		
		return (
            <div id={this.props.sequence.id} className={styles.chopify__sequence}>
                <div className={styles.chopify__timepill__options}>
                    <div className={styles.chopify__timepill__customname}>
                        <input onChange={(e) => {this.on_check_change(e, this.props.sequence.id, this.props.onToggleName, this.props.onToggleFade )}} id={"sequence_name_" + this.props.sequence.id} type="checkbox" name="Custom Name" value="name" />
                        <label htmlFor={"sequence_name_" + this.props.sequence.id} className={styles.chopify__timepill__customname__label}>Add custom name</label>
                    </div>
                    {this.generateTrashButton(this.props.deleteMode, this.props.sequence.id, this.props.onDeleteSequence)}
                    <div className={styles.chopify__timepill__fadeeffect}>
                        <input onChange={(e) => {this.on_check_change(e, this.props.sequence.id, this.props.onToggleName, this.props.onToggleFade )}} id={"sequence_fade_" + this.props.sequence.id} type="checkbox" name="Add Fade" value="fade" />
                        <label htmlFor={"sequence_fade_" + this.props.sequence.id} className={styles.chopify__timepill__fadeeffect__label}>Add fade effect</label>
                    </div>
                </div>
                <div className={styles.chopify__basic__pill + " " +  styles.chopify__timepill}>
                    <div className={styles.chopify__timepill__start__text}>
                        Start
                    </div>
                    <input onChange={(e, args) => {this.begin_time_change(e, args)}} className={styles.chopify__timepill__start__input} type="text" placeholder="hh/mm/ss" />
                    <input className={styles.chopify__timepill__end__input} type="text" placeholder="hh/mm/ss" />
                    <div className={styles.chopify__timepill__end__text}>
                        End
                    </div>
                </div>

                {this.gen_fade_pill(this.props.sequence)}
                {this.gen_name_pill(this.props.sequence)}

                {/* 
                    <div className={styles.chopify__basic__pill + " " + styles.chopify__downloadpill}>
                        DOWNLOAD
                    </div> 
                */}
            </div>
		)
	}
};

export default ChopifyChopSequence;
