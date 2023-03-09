/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ListClustersResponse: core.serialization.ObjectSchema<
    serializers.ListClustersResponse.Raw,
    Chkk.ListClustersResponse
> = core.serialization.object({
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Cluster)),
    hasMore: core.serialization.property("has_more", core.serialization.boolean()),
});

export declare namespace ListClustersResponse {
    interface Raw {
        data: serializers.Cluster.Raw[];
        has_more: boolean;
    }
}
