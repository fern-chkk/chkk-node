/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

/**
 * The details for a member of a Chkk Team
 */
export interface TeamMember {
    /** The ID of the user that is a member of the Chkk Team */
    userId: string;
    /** The email address of the user that is a member of the Chkk Team */
    userEmail: string;
    /** The name of the user that is a member of the Chkk Team */
    userName: string;
    /** A URL to a picture or avatar of the user that is a member of the Chkk Team */
    userPicture?: string;
    /** Time at which the user became a member of the Chkk Team. Measured in seconds since the Unix epoch */
    dateAdded: number;
    status: Chkk.MembershipStatus;
}
