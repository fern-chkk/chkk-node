/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ListLaRsStatusResponse: core.serialization.ObjectSchema<
    serializers.ListLaRsStatusResponse.Raw,
    Chkk.ListLaRsStatusResponse
> = core.serialization.object({
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).LarStatus)),
});

export declare namespace ListLaRsStatusResponse {
    interface Raw {
        data: serializers.LarStatus.Raw[];
    }
}