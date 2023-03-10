/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const Integration: core.serialization.ObjectSchema<serializers.Integration.Raw, Chkk.Integration> =
    core.serialization.object({
        accountId: core.serialization.property("account_id", core.serialization.string()),
        integrationId: core.serialization.property("integration_id", core.serialization.string()),
        integrationName: core.serialization.property("integration_name", core.serialization.string()),
        integrationType: core.serialization.property(
            "integration_type",
            core.serialization.lazy(async () => (await import("../../..")).IntegrationType)
        ),
        integrationToken: core.serialization.property("integration_token", core.serialization.string().optional()),
        status: core.serialization.lazy(async () => (await import("../../..")).IntegrationStatus),
        resourceName: core.serialization.property("resource_name", core.serialization.string().optional()),
        slackConfiguration: core.serialization.property(
            "slack_configuration",
            core.serialization
                .lazyObject(async () => (await import("../../..")).IntegrationSlackConfiguration)
                .optional()
        ),
        slackAppConfiguration: core.serialization.property(
            "slack_app_configuration",
            core.serialization
                .lazyObject(async () => (await import("../../..")).IntegrationSlackAppConfiguration)
                .optional()
        ),
        jiraConfiguration: core.serialization.property(
            "jira_configuration",
            core.serialization
                .lazyObject(async () => (await import("../../..")).IntegrationJiraConfiguration)
                .optional()
        ),
        created: core.serialization.number(),
        updated: core.serialization.number().optional(),
    });

export declare namespace Integration {
    interface Raw {
        account_id: string;
        integration_id: string;
        integration_name: string;
        integration_type: serializers.IntegrationType.Raw;
        integration_token?: string | null;
        status: serializers.IntegrationStatus.Raw;
        resource_name?: string | null;
        slack_configuration?: serializers.IntegrationSlackConfiguration.Raw | null;
        slack_app_configuration?: serializers.IntegrationSlackAppConfiguration.Raw | null;
        jira_configuration?: serializers.IntegrationJiraConfiguration.Raw | null;
        created: number;
        updated?: number | null;
    }
}
