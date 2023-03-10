/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

/**
 * Paginated list of Availability Risks
 */
export interface ListAvailabilityRisksResponse {
    /** List of Availability Risks */
    data: Chkk.AvailabilityRisk[];
    /** a token to get the next page of results, or an empty string if no further results are available */
    continuationToken: string;
}
