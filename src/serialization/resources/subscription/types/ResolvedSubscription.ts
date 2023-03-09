/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ResolvedSubscription: core.serialization.ObjectSchema<
    serializers.ResolvedSubscription.Raw,
    Chkk.ResolvedSubscription
> = core.serialization.object({
    accountId: core.serialization.property("account_id", core.serialization.string()),
    subscriptionId: core.serialization.property("subscription_id", core.serialization.string()),
    name: core.serialization.string(),
    type: core.serialization.lazy(async () => (await import("../../..")).SubscriptionType),
    plan: core.serialization.lazy(async () => (await import("../../..")).SubscriptionPlan),
    entitlement: core.serialization.lazyObject(async () => (await import("../../..")).ResolvedEntitlement),
});

export declare namespace ResolvedSubscription {
    interface Raw {
        account_id: string;
        subscription_id: string;
        name: string;
        type: serializers.SubscriptionType.Raw;
        plan: serializers.SubscriptionPlan.Raw;
        entitlement: serializers.ResolvedEntitlement.Raw;
    }
}