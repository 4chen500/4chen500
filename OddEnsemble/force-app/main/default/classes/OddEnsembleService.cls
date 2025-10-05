public with sharing class OddEnsembleService {

    // Rate Limit Constant: Maximum submissions allowed in the last hour
    private static final Integer SUBMISSION_LIMIT = 5;

    @AuraEnabled(cacheable=true)
    public static List<OddEnsemble__c> getTopEnsembles() {
        // Query to fetch approved ensembles for display (remains unchanged)
        return [SELECT Id, Name, Instruments__c, Status__c, CreatedDate 
                FROM OddEnsemble__c 
                WHERE Status__c = 'Approved' 
                ORDER BY CreatedDate DESC 
                LIMIT 5];
    }

    /**
     * @description Creates a new Odd Ensemble record submitted by a guest or member user, 
     * while enforcing a submission rate limit.
     * @param ensembleName The proposed name for the ensemble.
     * @param instruments The description of the odd instrument combination.
     * @return Id The Id of the newly created Odd Ensemble record.
     */
    @AuraEnabled
    public static Id createEnsemble(String ensembleName, String instruments) {
        if (String.isBlank(ensembleName) || String.isBlank(instruments)) {
            throw new AuraHandledException('Both the ensemble name and instruments must be provided.');
        }

        // --- 1. RATE LIMIT CHECK ---
        // Get the time one hour ago
        DateTime oneHourAgo = System.now().addHours(-1);

        // Count how many records the current user (running the LWC) has created recently
        // This is crucial for preventing Guest User spam, as each guest session gets a unique CreatedById.
        Integer recentSubmissions = [
            SELECT COUNT() 
            FROM OddEnsemble__c 
            WHERE CreatedById = :UserInfo.getUserId() 
            AND CreatedDate >= :oneHourAgo
        ];

        if (recentSubmissions >= SUBMISSION_LIMIT) {
            // Throw an exception if the limit is exceeded.
            // This message is captured and displayed in the LWC's error toast.
            throw new AuraHandledException('Submission limit reached. Please wait an hour before submitting more ideas.');
        }

        // --- 2. RECORD CREATION ---
        OddEnsemble__c newEnsemble = new OddEnsemble__c(
            // Assign the submitted values
            Name = ensembleName,
            Instruments__c = instruments,
            // Enforce default values for moderation and tracking
            Status__c = 'Pending'
        );

        // We use try-catch to handle potential DML exceptions (like lack of write permission)
        try {
            insert newEnsemble;
            return newEnsemble.Id;
        } catch (DmlException e) {
            // Throw a user-friendly error if insertion fails
            throw new AuraHandledException('Failed to create ensemble due to a system error. Please check object and field write permissions.');
        }
    }
}
