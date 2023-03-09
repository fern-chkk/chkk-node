/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const SubmitAgentStatusNotificationRequestBody: core.serialization.ObjectSchema<
    serializers.SubmitAgentStatusNotificationRequestBody.Raw,
    Chkk.SubmitAgentStatusNotificationRequestBody
> = core.serialization.object({
    resourceId: core.serialization.property("resource_id", core.serialization.string()),
    components: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).AgentComponent)
    ),
});

export declare namespace SubmitAgentStatusNotificationRequestBody {
    interface Raw {
        resource_id: string;
        components: serializers.AgentComponent.Raw[];
    }
}