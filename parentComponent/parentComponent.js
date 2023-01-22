import { LightningElement , track } from 'lwc';

export default class ParentComponent extends LightningElement {

    @track helpText = 'Please enter your First + Last Name'; //Set HelpText
    @track labelColor = '#e41414'; //Set Format class for Input Label
    @track inputLabel = 'Full Name'; //Set Input Label Name
}