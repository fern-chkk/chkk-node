/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

export interface ListSubscriptionsResponse {
    accountId: string;
    subscriptions: Chkk.ResolvedSubscription[];
    totalEntitlement: Chkk.ResolvedEntitlement;
}