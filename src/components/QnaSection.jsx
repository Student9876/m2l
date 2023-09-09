import React from "react";
import quesData from "../qnaData";
import CollapsibleFAQ from "./Collapsibile";

function QNA() {

    return <>

        <div id="faq" className="qnaDiv">
           <center><h1>Frequently Asked Questions</h1></center>
        <hr/>
            <br />
            {quesData.map(data => {
                return <>
                    <CollapsibleFAQ
                        question={<span key={data.q_no}>{data.q_no}. {data.question} </span>}
                        answer={<div className="answerSpan fade-in"><span>{data.answer}</span></div>}
                    />
                    <br />
                </>
            })}
        </div >
    </>
}

export default QNA;