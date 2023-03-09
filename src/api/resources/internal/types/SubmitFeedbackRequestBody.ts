/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SubmitFeedbackRequestBody {
    /** The type of the feedback request. NewSignUpRequest, ReportAvailabilityRiskRequest and k8sExpertRequest have special meaning but callers might also specify their own values */
    title: string;
    /** The actual feedback contents. For structured feedback calls this might be JSON embedded into the string to convey more information. */
    details: string;
    /** The email address of the submitter of the feedback, for Chkk to get back to them. */
    userEmail: string;
}
