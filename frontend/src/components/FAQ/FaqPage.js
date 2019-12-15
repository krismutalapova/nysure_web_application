import React from "react";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


const QandA = {
    "I forgot my username and password. How do I log in?": "Trying to log into your account, but can’t remember your username and password? Don’t worry; we can help recover your information. Just call 1-888-327-6335 Mon-Fri 7:00 am to 11:00 pm Central Time.",
    "How does my local fire department impact my homeowner’s policy?": "Each fire protection agency (including your local fire department) is reviewed by the Insurance Services Office (ISO) and ranked based on their fire protection services, such as fire equipment, staffing and available water supply. The ranking is called the Public Protection Class (PPCTM) with 1 being the best score and 10 being the worst score. Many insurance companies use the PPC rating and the distance your home is from the nearest legally responding fire department to determine whether they will insure your home and how much to charge.",
    "How do I make a claim?": "Once you are logged in just go to the Claims page and press the 'Add a claim' button. Fill in the form and press submit. Taht's it!",
    "What is a deductible?": "A deductible is the amount you’re responsible for in the event of a covered loss. In most covered loss cases, you are responsible for any amounts up to your deductible level and your insurance would cover anything beyond that up to your coverage limit. For example, if you select a $1,000 deductible and have a $4,200 covered loss, you would receive a claim payment of $3,200 after deducting the $1,000. A homeowners deductible applies to each claim. If you have more than one claim in a policy period, you will be responsible for the deductible amount for each individual claim regardless of the number of claims you have during that policy period.",
    "Does home insurance apply to me if I rent?": "As the owner, your landlord will be responsible for the maintenance of the building, so it’s down to them to ensure their property is protected with buildings insurance. But you’re responsible for any contents inside that you own. If anything were to happen to your possessions, you would be liable for the cost of replacing them if you didn't have contents insurance.",
    "What do you do with my business and personal information?": "We use your business information for identifying your business, calculating appropriate premiums for your business, and sending you correspondence such as your welcome email containing your policy documents. Specifically with regards to personal information, there has recently been substantial change to regulations on data protection (the General Data Protection Regulation). We only ask for limited personal information in the form of your name and contact details, and store and use these details in line with this regulation. We do not pass your personal information on to other parties and will only use your personal details to send you information on our products with your prior consent.",
    "How do I retrieve my quotes?": "Unfortunately we do not store any of your requested quotes. We are working hard on providing this functionality soon.",
    "How do I delete my account?": "If you want to delete your account, then contact us. Please make sure you include your full name, date of birth and postcode for Data Protection purposes, as without these details we can only unsubscribe you, we won’t be able to remove your account. Just call 1-888-327-6335 Mon-Fri 7:00 am to 11:00 pm Central Time.",
}

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(
        eventKey, 
        () => {
            console.log('clicked');
        },
    );

    return (
        <button
            type="button"
            className="faq-btn-collapse"
            onClick={decoratedOnClick}
            style={{ color: '#eeeeee', textDecoration: 'none'}}
        >
            {children}
        </button>
    );
}

class FaqPage extends React.Component {
    render() {
        return (
            <div>
                {renderQandA(QandA)}
            </div>
        )
    }
}

function renderQandA(QandADict) {
    let all = Object.keys(QandADict).map(function(key, index) {
        return renderOneQandA(key, QandADict[key], index);
    });

    return <Accordion>
        {all}
    </Accordion>
}

function renderOneQandA(question, answer, index) {
    
    return <Card key={index}>
        <Card.Header>
            <CustomToggle eventKey={index}><h5>{question}</h5></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={index}>
            <Card.Body style={{ color: '#eeeeee'}}>{answer}</Card.Body>
        </Accordion.Collapse>
    </Card>
}

export default FaqPage;
