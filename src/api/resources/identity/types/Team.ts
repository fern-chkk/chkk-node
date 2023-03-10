/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

/**
 * A Chkk Team in a specific Chkk Account
 */
export interface Team {
    /** Team identifier */
    id: string;
    /** Account ID */
    accountId: string;
    /** A human-readable, unique identifier for the Team */
    slug: string;
    /** Display name of the Team */
    name: string;
    /** Time at which the Team was created. Measured in seconds since the Unix epoch */
    created: number;
    /** Time at which the Team was updated. Measured in seconds since the Unix epoch */
    updated?: number;
    /** Team members */
    members?: Chkk.TeamMember[];
}
