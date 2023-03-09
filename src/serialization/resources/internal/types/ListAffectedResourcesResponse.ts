/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ListAffectedResourcesResponse: core.serialization.ObjectSchema<
    serializers.ListAffectedResourcesResponse.Raw,
    Chkk.ListAffectedResourcesResponse
> = core.serialization.object({
    availabilityRisk: core.serialization.property(
        "availability_risk",
        core.serialization.lazyObject(async () => (await import("../../..")).AvailabilityRisk).optional()
    ),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Resource)),
    continuationToken: core.serialization.property("continuation_token", core.serialization.string()),
});

export declare namespace ListAffectedResourcesResponse {
    interface Raw {
        availability_risk?: serializers.AvailabilityRisk.Raw | null;
        data: serializers.Resource.Raw[];
        continuation_token: string;
    }
}
