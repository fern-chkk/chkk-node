/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const IntegrationJiraConfiguration: core.serialization.ObjectSchema<
    serializers.IntegrationJiraConfiguration.Raw,
    Chkk.IntegrationJiraConfiguration
> = core.serialization.object({
    jiraUser: core.serialization.property("jira_user", core.serialization.string()),
    jiraToken: core.serialization.property("jira_token", core.serialization.string()),
    jiraUrl: core.serialization.property("jira_url", core.serialization.string()),
    jiraProjectKey: core.serialization.property("jira_project_key", core.serialization.string()),
});

export declare namespace IntegrationJiraConfiguration {
    interface Raw {
        jira_user: string;
        jira_token: string;
        jira_url: string;
        jira_project_key: string;
    }
}
