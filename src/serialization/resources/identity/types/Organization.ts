/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const Organization: core.serialization.ObjectSchema<serializers.Organization.Raw, Chkk.Organization> =
    core.serialization.object({
        id: core.serialization.string(),
        slug: core.serialization.string(),
        name: core.serialization.string(),
        created: core.serialization.number(),
        updated: core.serialization.number().optional(),
        status: core.serialization.lazy(async () => (await import("../../..")).OrganizationStatus),
        address: core.serialization.string().optional(),
        logoUrl: core.serialization.property("logo_url", core.serialization.string().optional()),
        website: core.serialization.string().optional(),
    });

export declare namespace Organization {
    interface Raw {
        id: string;
        slug: string;
        name: string;
        created: number;
        updated?: number | null;
        status: serializers.OrganizationStatus.Raw;
        address?: string | null;
        logo_url?: string | null;
        website?: string | null;
    }
}
