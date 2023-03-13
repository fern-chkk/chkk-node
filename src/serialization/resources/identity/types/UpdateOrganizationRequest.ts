/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const UpdateOrganizationRequest: core.serialization.ObjectSchema<
    serializers.UpdateOrganizationRequest.Raw,
    Chkk.UpdateOrganizationRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    logoUrl: core.serialization.property("logo_url", core.serialization.string().optional()),
    address: core.serialization.string().optional(),
    website: core.serialization.string().optional(),
});

export declare namespace UpdateOrganizationRequest {
    interface Raw {
        name?: string | null;
        logo_url?: string | null;
        address?: string | null;
        website?: string | null;
    }
}