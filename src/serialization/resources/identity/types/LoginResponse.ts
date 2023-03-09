/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const LoginResponse: core.serialization.ObjectSchema<serializers.LoginResponse.Raw, Chkk.LoginResponse> =
    core.serialization.object({
        continuationToken: core.serialization.property("continuation_token", core.serialization.string()),
        orgs: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).Organization)
        ),
        accessTokens: core.serialization.property(
            "access_tokens",
            core.serialization
                .record(
                    core.serialization.string(),
                    core.serialization.lazy(async () => (await import("../../..")).AccountAccessToken).optional()
                )
                .optional()
        ),
    });

export declare namespace LoginResponse {
    interface Raw {
        continuation_token: string;
        orgs: serializers.Organization.Raw[];
        access_tokens?: Record<string, serializers.AccountAccessToken.Raw | null | undefined> | null;
    }
}