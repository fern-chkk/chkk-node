/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ListSubscriptionsResponse: core.serialization.ObjectSchema<
    serializers.ListSubscriptionsResponse.Raw,
    Chkk.ListSubscriptionsResponse
> = core.serialization.object({
    accountId: core.serialization.property("account_id", core.serialization.string()),
    subscriptions: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ResolvedSubscription)
    ),
    totalEntitlement: core.serialization.property(
        "total_entitlement",
        core.serialization.lazyObject(async () => (await import("../../..")).ResolvedEntitlement)
    ),
});

export declare namespace ListSubscriptionsResponse {
    interface Raw {
        account_id: string;
        subscriptions: serializers.ResolvedSubscription.Raw[];
        total_entitlement: serializers.ResolvedEntitlement.Raw;
    }
}
