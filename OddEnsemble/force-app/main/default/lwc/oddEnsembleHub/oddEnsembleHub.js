import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
// Import methods from the existing, shared Apex class
import getTopEnsembles from '@salesforce/apex/OddEnsembleService.getTopEnsembles';
import createEnsemble from '@salesforce/apex/OddEnsembleService.createEnsemble';

/**
 * LWC Hub: Displays the top approved Odd Ensembles and provides a form
 * for guest users to submit new ideas (which default to Pending status).
 */
export default class OddEnsembleHub extends LightningElement {
    // --- Data Display Properties ---
    @wire(getTopEnsembles)
    ensembles;
    
    ensembleCardClass = 'slds-tile slds-p-around_medium slds-m-bottom_small slds-card__body_inner ensemble-card approved-status';

    // --- Submission Form Properties ---
    ensembleName = ''; 
    instruments = '';
    isSubmitting = false;
    submissionError = ''; 

    // --- Form Handlers ---
    handleNameChange(event) {
        this.ensembleName = event.target.value;
    }

    handleInstrumentsChange(event) {
        this.instruments = event.target.value;
    }

    // --- Submission Logic ---
    async handleSubmit() {
        // CRITICAL DEBUG: Check the console when you click the button. If this does not appear, 
        // the issue is in the HTML template linkage.
        console.log('handleSubmit called.'); 
        
        this.submissionError = ''; // Clear previous errors on new attempt
        
        // 1. Get references to the input components
        const inputFields = this.template.querySelectorAll('lightning-input, lightning-textarea');
        
        let isValid = true;
        // 2. Validate all fields and stop if validation fails
        inputFields.forEach(field => {
            if (!field.checkValidity()) {
                field.reportValidity(); 
                isValid = false;
            }
        });

        if (!isValid) {
            // Stop processing if validation failed.
            return;
        }

        // 3. Robustly capture values before the async call
        // Note: For simplicity and robustness with onchange, we rely on the class properties
        // being updated, which is safer than querying DOM elements again after onchange has fired.
        const ensembleNameForSubmission = this.ensembleName;
        const instrumentsForSubmission = this.instruments;

        if (!ensembleNameForSubmission || !instrumentsForSubmission) {
            this.showToast('Error', 'Please fill in all required fields.', 'error');
            return;
        }

        this.isSubmitting = true;

        try {
            // Server-side call to create the record
            await createEnsemble({ 
                ensembleName: ensembleNameForSubmission, 
                instruments: instrumentsForSubmission 
            });

            this.showToast('Idea Submitted', 'Your ensemble idea is pending admin approval!', 'success');
            
            // Clear the form fields after successful submission
            this.ensembleName = '';
            this.instruments = '';
            
            // Refresh the wired list to show the new submission (if it was approved instantly, though it defaults to Pending)
            refreshApex(this.ensembles);

        } catch (error) {
            console.error('Submission Error:', error);
            // Extract the server-side error message
            const serverErrorMessage = error.body && error.body.message ? error.body.message : 'An unknown server error occurred during submission.';
            
            this.submissionError = serverErrorMessage; // Set persistent error
            this.showToast('Submission Failed', serverErrorMessage, 'error'); // Keep toast for immediate feedback
        } finally {
            this.isSubmitting = false;
        }
    }

    // --- Getters and Utilities ---
    
    get ensembleCount() {
        return this.ensembles.data ? this.ensembles.data.length : 0;
    }

    get formattedEnsembles() {
        if (this.ensembles.data) {
            return this.ensembles.data.map((ensemble, index) => ({
                ...ensemble,
                rank: index + 1, 
                formattedDate: new Date(ensemble.CreatedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }),
                tileClass: this.ensembleCardClass
            }));
        }
        return [];
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}
