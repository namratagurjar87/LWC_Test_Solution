import { LightningElement , api , track} from 'lwc';

export default class ChildComponent extends LightningElement {

    @api helpText; // Helptext for Input Label
    @api labelColor; // Format color for the Input Label
    @api inputLabel;   // Input Label Text
    @track hasRendered = true; // Boolean Property

    renderedCallback() {
      // Check if the renderedCallback executed first time
        if (this.hasRendered) {
            // Set Input Label Text color
            document.documentElement.style.setProperty('--labelColor', this.labelColor);
            this.hasRendered = false;
        }
    }
}