/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

/**
 * ???
 */
export interface Integration {
    accountId: string;
    /** ??? */
    integrationId: string;
    /** ??? */
    integrationName: string;
    integrationType: Chkk.IntegrationType;
    /** token used with some integrations to validate the correct association */
    integrationToken?: string;
    status: Chkk.IntegrationStatus;
    /** ??? */
    resourceName?: string;
    slackConfiguration?: Chkk.IntegrationSlackConfiguration;
    slackAppConfiguration?: Chkk.IntegrationSlackAppConfiguration;
    jiraConfiguration?: Chkk.IntegrationJiraConfiguration;
    /** Time at which the Organization was created. Measured in seconds since the Unix epoch */
    created: number;
    /** Time at which the Organization was updated. Measured in seconds since the Unix epoch */
    updated?: number;
}
