/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

/**
 * ???
 */
export interface UpdateIntegrationRequestBody {
    /** ??? */
    integrationName: string;
    status?: Chkk.IntegrationStatus;
}