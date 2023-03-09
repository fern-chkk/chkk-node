/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ListAvailabilityRisksResponse: core.serialization.ObjectSchema<
    serializers.ListAvailabilityRisksResponse.Raw,
    Chkk.ListAvailabilityRisksResponse
> = core.serialization.object({
    data: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).AvailabilityRisk)
    ),
    continuationToken: core.serialization.property("continuation_token", core.serialization.string()),
});

export declare namespace ListAvailabilityRisksResponse {
    interface Raw {
        data: serializers.AvailabilityRisk.Raw[];
        continuation_token: string;
    }
}
