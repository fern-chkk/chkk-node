/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const IntegrationSlackAppConfigurationTeam: core.serialization.ObjectSchema<
    serializers.IntegrationSlackAppConfigurationTeam.Raw,
    Chkk.IntegrationSlackAppConfigurationTeam
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string().optional(),
});

export declare namespace IntegrationSlackAppConfigurationTeam {
    interface Raw {
        id: string;
        name?: string | null;
    }
}
