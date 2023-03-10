/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const IntegrationSlackAppConfiguration: core.serialization.ObjectSchema<
    serializers.IntegrationSlackAppConfiguration.Raw,
    Chkk.IntegrationSlackAppConfiguration
> = core.serialization.object({
    team: core.serialization
        .lazyObject(async () => (await import("../../..")).IntegrationSlackAppConfigurationTeam)
        .optional(),
    enterprise: core.serialization
        .lazyObject(async () => (await import("../../..")).IntegrationSlackAppConfigurationEnterprise)
        .optional(),
    user: core.serialization.lazyObject(async () => (await import("../../..")).IntegrationSlackAppConfigurationUser),
    isEnterpriseInstall: core.serialization.boolean().optional(),
    enterpriseUrl: core.serialization.string().optional(),
    bot: core.serialization
        .lazyObject(async () => (await import("../../..")).IntegrationSlackAppConfigurationBot)
        .optional(),
});

export declare namespace IntegrationSlackAppConfiguration {
    interface Raw {
        team?: serializers.IntegrationSlackAppConfigurationTeam.Raw | null;
        enterprise?: serializers.IntegrationSlackAppConfigurationEnterprise.Raw | null;
        user: serializers.IntegrationSlackAppConfigurationUser.Raw;
        isEnterpriseInstall?: boolean | null;
        enterpriseUrl?: string | null;
        bot?: serializers.IntegrationSlackAppConfigurationBot.Raw | null;
    }
}
